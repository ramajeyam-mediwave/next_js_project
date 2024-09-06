import React, { useRef, useEffect } from 'react';

export interface ButtonProps {
  text?: string;
  addClass?: string;
  btntype: 'submit' | 'button';
  disabled?: boolean;
  onClick?: any;
  showIcon?: boolean;
  onKeyDown?: any;
  iconPlaceholder?: any;
  ariaLive?: 'polite' | 'assertive';
  ariaexpanded?: boolean;
  showLoading?: boolean;
  children?: any;
  customButton?: boolean;
  showLabel?: boolean;
  navigationValue?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  btnId?: any;
  btnCatogery?: 'button' | 'toggle' | 'accordion';
  status?: Boolean;
  ButtonRef?: any;
  btnName?: any;
  btnValue?: any;
  btnTitle?: any;
  btnStyle?: any;
  btnKey?: any;
}

const Button = ({
  text,
  addClass,
  btntype,
  disabled,
  onClick,
  onKeyDown,
  showIcon,
  iconPlaceholder,
  ariaLive,
  children,
  customButton = false,
  showLabel = true,
  showLoading = false,
  navigationValue,
  ariaLabel,
  ariaLabelledby,
  btnId,
  btnCatogery = 'button',
  btnName,
  status = false,
  btnValue,
  btnTitle,
  btnStyle,
  btnKey,
  ButtonRef = useRef<HTMLButtonElement | null>(null),
}: ButtonProps) => {
  useEffect(() => {
    const commands = [
      `${btnCatogery === 'button' ? 'click' : ''} ${
        navigationValue?.toLowerCase() || text?.toLowerCase()
      }`,
      `${btnCatogery === 'button' ? 'submit' : ''} ${
        navigationValue?.toLowerCase() || text?.toLowerCase()
      }`,
      `${status ? 'show' : 'hide'} ${
        navigationValue?.toLowerCase() || text?.toLowerCase()
      }`,
      `${status ? 'open' : 'close'} ${
        navigationValue?.toLowerCase() || text?.toLowerCase()
      }`,
    ];
  }, [text, status, btnCatogery, navigationValue]);

  const handleButtonClick = () => {
    if (ButtonRef.current && btnCatogery === 'button') {
      ButtonRef.current.click();
    }

    if (ButtonRef.current && btnCatogery === 'toggle' && (!status || status)) {
      ButtonRef.current.click();
    }
  };

  const classNamesArray = [customButton ? '' : 'btn', addClass];

  const classNames = classNamesArray
    .filter((className) => className !== '')
    .join(' ');

  return (
    <>
      {btntype === 'button' && (
        <button
          style={btnStyle}
          ref={ButtonRef}
          title={btnTitle}
          key={btnKey}
          value={btnValue}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          id={btnId}
          data-btncatogery={btnCatogery}
          onClick={() => {
            if (!showLoading && onClick) {
              onClick();
            }
          }}
          type="button"
          name={btnName}
          className={classNames}
          onKeyDown={onKeyDown}
          disabled={disabled}
          data-navigationvalue={
            navigationValue?.toLowerCase() || text?.toLowerCase()
          }
        >
          {showIcon && iconPlaceholder}
          {children}
          {showLabel && text}
        </button>
      )}
      {btntype === 'submit' && (
        <button
          ref={ButtonRef}
          onClick={() => {
            if (onClick) {
              onClick();
            }
          }}
          type="submit"
          className={`${classNames} ${
            showLoading && 'pointer-events-none cursor-not-allowed'
          }`}
          onKeyDown={onKeyDown}
          disabled={disabled}
          aria-live={ariaLive}
          data-navigationValue={
            navigationValue?.toLowerCase() || text?.toLowerCase()
          }
        >
          {showIcon && <span>{iconPlaceholder}</span>}
          {showLabel && text}
          {children}
        </button>
      )}
    </>
  );
};

export default React.memo(Button);
