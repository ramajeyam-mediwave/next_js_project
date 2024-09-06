import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { SelectDropdown } from "../Select/SelectDropdown";
import File from "../../asset/image/svg/File";
import Thankyou from "../../asset/image/svg/Thankyou";

import secureKey from "../../credentials/secureKey";

interface FormFields {
  name: string;
  email: string;
  phone: string;
  message: string;
  resume: File | undefined;
  subjects: string;
}

interface ContactFormProps {
  onSubmit: (data: FormFields) => void;
  service?: boolean;
}

const optionsData = [
  { label: "General enquiry", value: "General enquiry" },
  { label: "Business Enquiry", value: "Business Enquiry" },
];
const serviceData = [
  { label: "Software development", value: "Software development" },
  { label: "Web app development", value: "Web app development" },
  { label: "Mobile app development", value: "Mobile app development" },
  { label: "SaaS product development", value: "SaaS product development" },
  { label: "AR/VR development", value: "AR/VR development" },
  { label: "UI/UX design services", value: "UI/UX design services" },
  {
    label: "Software testing & QA services",
    value: "Software testing & QA services",
  },
  // { label: "Resource outsourcing", value: "Resource outsourcing" },
];

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, service }) => {
  const API_KEY: any = process.env.REACT_APP_SITE_KEY;
  const formRef = useRef<HTMLFormElement>(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: service
      ? Yup.string().required("Organisation name is required")
      : Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
    resume: Yup.mixed().when("subjects", {
      is: "Business Enquiry",
      then: Yup.mixed().required("Attachment is required"),
      otherwise: Yup.mixed(),
    }),
    subjects: Yup.string().required("Subject is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      resume: undefined,
      subjects: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);

        if (formik.isValid) {
          let fileUrl = "";

          if (values.subjects !== "General enquiry" && values.subjects !== "") {
            fileUrl = await uploadResumeToAzureBlobStorage(values.resume!);
          }

          const formResponse = await submitFormResponse(fileUrl, values);

          if (formResponse) {
            onSubmit(values);
            formik.resetForm();
          } else {
            console.log("Failed to submit form. Please try again.");
          }
        }
      } catch (error) {
        console.log("Error:", error);
        console.log("An error occurred. Please try again later.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    values,
    errors,
    touched,
    isSubmitting,
  } = formik;

  // console.log(values, handleSubmit());

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFieldValue("resume", e.target.files[0]);
    }
  };

  const uploadResumeToAzureBlobStorage = async (resume: File) => {
    const { accountName, containerName, sasToken } = secureKey.azure;

    const fileMetadata = {
      name: resume.name || "",
    };

    const timestamp = new Date().getTime(); // Generate a unique timestamp
    const uniqueFileName = `${timestamp}_${fileMetadata.name}`; // Append the timestamp to the original filename

    const folderName = "formdata"; // Specify folder name
    const url = `https://${accountName}.blob.core.windows.net/${containerName}/${folderName}/${uniqueFileName}?${sasToken}`;

    await axios.put(url, resume, {
      headers: {
        "Content-Type": resume.type,
        "x-ms-blob-type": "BlockBlob", // Specify the blob type as 'BlockBlob'
      },
    });

    const fileUrl = url.split("?")[0]; // Remove the SAS token from the file URL

    return fileUrl;
  };

  const submitFormResponse = async (fileUrl: string, values: FormFields) => {
    const { formId } = secureKey.googleForm;

    const formDataWithResumeUrl: FormFields = {
      ...values,
      resume: fileUrl as any, // As the Google Form requires a string value for resume field
    };

    const payload = new FormData();
    payload.append("entry.1842466174", formDataWithResumeUrl.name);
    payload.append("entry.1334908892", formDataWithResumeUrl.email);
    payload.append("entry.1850068784", formDataWithResumeUrl.phone);
    payload.append("entry.2142012250", formDataWithResumeUrl.message);
    payload.append("entry.1310480307", formDataWithResumeUrl.subjects);
    if (formDataWithResumeUrl.resume) {
      payload.append("entry.1139895486", formDataWithResumeUrl.resume);
    }

    try {
      const response = await axios.post(
        `https://docs.google.com/forms/d/e/${formId}/formResponse`,
        payload
      );
      console.log(response, "response");
      return response.data;
    } catch (error) {
      console.log("Form not submitted", error);
      return true;
    }
  };

  // const defaultValue = optionsData[0];

  return (
    <div className="form-container">
      <form className="form-block !mb-0" ref={formRef} onSubmit={handleSubmit}>
        <div
          className={`form-inner-container ${
            service ? "!grid-cols-1 !gap-0" : ""
          }`}
        >
          <div className="input-container">
            <label htmlFor="nameInput">Name*</label>
            <input
              className="form-input"
              type="text"
              name="name"
              id="nameInput"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your name"
            />
            {touched.name && errors.name && (
              <div className="error">{errors.name}</div>
            )}
          </div>
          <div className="input-container">
            <label htmlFor="emailInput">Email address*</label>
            <input
              type="email"
              name="email"
              id="emailInput"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email address"
            />
            {touched.email && errors.email && (
              <div className="error">{errors.email}</div>
            )}
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="phoneInput">
            {service ? "Organisation name*" : "Phone number*"}
          </label>
          <input
            className="form-input"
            type={service ? "text" : "number"}
            name="phone"
            id="phoneInput"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={
              service
                ? "Please enter your organisation name"
                : "Enter your contact number"
            }
          />
          {touched.phone && errors.phone && (
            <div className="error">{errors.phone}</div>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="subInput">{service ? "Service" : "Subject"}</label>
          <SelectDropdown
            isRequired
            name="subjects"
            id="subInput"
            options={service ? serviceData : optionsData}
            value={values.subjects}
            // defaultValue={defaultValue}
            onChange={(e) => {
              setFieldValue("subjects", e.value);
            }}
          />
          {touched.subjects && errors.subjects && (
            <div className="error">{errors.subjects}</div>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="msgInput">Message*</label>
          <textarea
            className="form-input"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.message && errors.message && (
            <div className="error">{errors.message}</div>
          )}
        </div>
        {values.subjects === "Applying for a position" && (
          <div>
            <div className="fileUpload">
              <label htmlFor="fileUpload">
                <File />
                <span className="browse_font cursor-pointer">
                  Browse to attach a file
                </span>
                <span className={values.resume ? "file_uploaded" : "hidden"}>
                  <Thankyou />
                </span>
              </label>
              <input
                name="resume"
                type="file"
                id="fileUpload"
                accept=".pdf"
                onChange={handleFileChange}
              />
              {touched.resume && errors.resume && (
                <div className="error">{errors.resume}</div>
              )}
            </div>
          </div>
        )}
        <div className="mt-12 mb-14">
          {/* <ReCAPTCHA ref={recaptchaRef} sitekey={API_KEY} /> */}
          <div className="g-recaptcha" data-sitekey={API_KEY}></div>
          {/* <p
              className={`${
                recaptchaError === "Please confirm that you are not a robot."
                  ? "error-msg"
                  : "hidden"
              }`}
            >
              {recaptchaError}
            </p> */}
        </div>
        <div className="form-btn cursor-pointer">
          <button
            className="btn primary-btn"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "SEND MESSAGE"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
