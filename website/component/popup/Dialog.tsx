import { useEffect, useRef, ReactNode } from "react";
import Close from "../../asset/image/svg/Close";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: "sm" | "medium" | "large";
}

const sizeClasses = {
  sm: "w-1/4 h-auto",
  medium: "w-1/2 h-auto",
  large: "w-3/4 h-auto",
};

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "medium",
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="dialog-popup-wrapper"
      aria-labelledby="dialog-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="dialog-popup-card"
        role="document"
      >
        <div className="grid gap-2 w-full">
          <div className="flex gap-4 justify-between items-center w-full">
            <h2 id="dialog-title" className="text-2xl mb-4 text-primaryHeading">
              {title}
            </h2>
            <button onClick={onClose} className="absolute right-4 top-4">
              <Close />
            </button>
          </div>
          <div className="mb-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
