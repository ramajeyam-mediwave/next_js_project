import React, { useState } from "react";
import { Button } from "../button/Button";
import { useRouter } from "next/router";
import Dialog from "../popup/Dialog";
import ContactForm from "../contactForm/ContactForm";

interface BannerProps {
  heading: string;
  description: string;
}

const Banner = ({ heading, description }: BannerProps) => {
  const router = useRouter();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [dialogSize, setDialogSize] = useState<"sm" | "medium" | "large">(
    "medium"
  );

  const openDialog = (size: "sm" | "medium" | "large") => {
    setDialogSize(size); // Set the dialog size
    setDialogOpen(true);
  };
  const closeDialog = () => setDialogOpen(false);

  const handleSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <>
      <div className="bg-banner rounded-[10px]">
        <div className="grid gap-10">
          <div className="grid gap-5 lg:w-4/5">
            <h2 className="text-6xl">{heading}</h2>
            <p className="text-2xl">{description}</p>
          </div>
          <div className="text-left">
            <Button
              addclass="primary-btn !bg-white !text-black"
              btntext="GET IN TOUCH"
              OnClick={() => openDialog("medium")}
              aria-haspopup="dialog"
              aria-controls="dialog"
            />
          </div>
          <Dialog
            isOpen={isDialogOpen}
            onClose={closeDialog}
            title={heading}
            size={dialogSize}
          >
            <p className="text-primaryContent">{description}</p>
            <ContactForm service onSubmit={handleSubmit} />
          </Dialog>
        </div>
        <div className="block"></div>
      </div>
    </>
  );
};

export default Banner;
