import { useFormik } from 'formik';
import * as Yup from 'yup';
import File from '../../asset/image/svg/File';
import ReCAPTCHA from 'react-google-recaptcha';
import React, { useState } from 'react';
import { SelectDropdown } from '../Select/SelectDropdown';
import { useRouter } from 'next/router';
import Loader from '../Loader/Loader';
import Thankyou from '../../asset/image/svg/Thankyou';

export const MegaContact = () => {
  // interface RecaptchaRef {
  //   current: any;
  // }
  // const recaptchaRef: RecaptchaRef = React.createRef();

  const API_KEY: any = process.env.REACT_APP_SITE_KEY;
  const optionsData = [
    { label: 'DevOps', value: 'DevOps' },
    { label: 'Development', value: 'Development' },
    { label: 'Design', value: 'Design' },
    { label: 'Artificial Intelligence(AI)', value: 'Artificial Intelligence' },
    { label: 'Voice support process', value: 'Voice Support Process' },
    { label: 'Business Analytics', value: 'Business Analytics' },
    { label: 'Project Management', value: 'Project Management' },
  ];
  const [isLoading, setLoading] = useState<any>(false);
  const buffer = new ArrayBuffer(8);

  // const [fileBase64, setFileBase64] = useState<any>("");
  // const [error, setError] = useState<any>("");
  const [file, setFlie] = useState<any>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    resume: '',
    subject: '',
  });

  return (
    <>
      {isLoading ? (
        ''
      ) : (
        <form
          className='form-block'
          // onSubmit={formik.handleSubmit}
          action='https://getform.io/f/5575393c-7430-4404-b874-7e6fa32831e0'
          method='POST'
          encType='multipart/form-data'
        >
          <div className='form-inner-container'>
            <div className='input-container'>
              <label htmlFor='nameInput'>First name*</label>
              <input
                type='text'
                name='firstName'
                id='fistNameInput'
                value={file.firstname}
                onChange={(e) => {
                  setFlie({ ...file, firstname: e.target.value });
                }}
                required
                placeholder='Enter your first name'
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.name}
              />
              {/* {formik.touched.name && formik.errors.name && (
                <div className="errors">{formi <script src="https://www.google.com/recaptcha/api.js"></script>k.errors.name}</div>
              )} */}
            </div>
            <div className='input-container'>
              <label htmlFor='nameInput'>Last name*</label>
              <input
                type='text'
                name='lastName'
                id='lastNameInput'
                value={file.lastname}
                onChange={(e) => {
                  setFlie({ ...file, lastname: e.target.value });
                }}
                required
                placeholder='Enter your Last name'
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.name}
              />
              {/* {formik.touched.name && formik.errors.name && (
                <div className="errors">{formi <script src="https://www.google.com/recaptcha/api.js"></script>k.errors.name}</div>
              )} */}
            </div>
          </div>
          <div className='input-container'>
            <label htmlFor='emailInput'>Email address*</label>
            <input
              type='email'
              name='email'
              id='emailInput'
              value={file.email}
              onChange={(e) => {
                setFlie({ ...file, email: e.target.value });
              }}
              placeholder='Enter your email address'
              required
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.email}
            />
            {/* {formik.touched.email && formik.errors.email && (
                <div className="errors">{formik.errors.email}</div>
              )} */}
          </div>
          <div className='input-container'>
            <label htmlFor='nameInput'>Contact number*</label>
            <input
              type='number'
              name='phone'
              id='phoneInput'
              value={file.phone}
              onChange={(e) => {
                setFlie({ ...file, phone: e.target.value });
              }}
              placeholder='Enter your contact number '
              required
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.phone}
            />
            {/* {formik.touched.phone && formik.errors.phone && (
              <div className="errors">{formik.errors.phone}</div>
            )} */}
          </div>
          <div className='input-container'>
            <label htmlFor='subInput'>Interested to work in</label>
            <SelectDropdown
              isMulti={true}
              name='subject'
              id='subInput'
              options={optionsData}
              value={file.subject}
              onChange={(e) => {
                setFlie({ ...file, subject: e.value });
              }}
            />
          </div>

          <div>
            <div className='fileUpload'>
              <label htmlFor='fileUpload'>
                <File />
                <span className='browse_font cursor-pointer'>
                  Browse to attach your resume
                </span>
                <span className={file.resume ? 'file_uploaded' : 'hidden'}>
                  <Thankyou />
                </span>
              </label>
              <input
                name='resume'
                type='file'
                id='fileUpload'
                accept='.pdf'
                value={file.resume}
                onChange={(e) => {
                  setFlie({ ...file, resume: e.target.value });
                }}
              />
              {/* <p
                className={`${
                  error === "Upload only pdf" ? "error-msg" : "hidden"
                }`}
              >
                {error}
              </p> */}
            </div>
            <div className='mt-12 mb-14'>
              {/* <ReCAPTCHA ref={recaptchaRef} sitekey={API_KEY} /> */}
              <div className='g-recaptcha' data-sitekey={API_KEY}></div>
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
          </div>
          <div className='form-btn cursor-pointer'>
            {/* {error && error ? (
              <button className="btn primary-btn" disabled>
                SEND
              </button>
            ) : ( */}
            <button className='btn primary-btn' type='submit'>
              REGISTER
            </button>
            {/* )} */}
          </div>
        </form>
      )}
      {isLoading ? <Loader /> : ''}
    </>
  );
};
