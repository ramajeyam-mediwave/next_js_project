import React, { useEffect, useState } from "react";
import _ from "lodash";

import Button from "./Button";
import { AccordionArrow } from "../../asset/image/svg/AccordionArrow";
import Link from "next/link";
import { useRouter } from "next/router";

export type selectValue = {
  id: string;
  title: string;
  link?: string;
  icon: JSX.Element;
  bgColor?: string;
  description?: string;
};
interface ButtonDropDownProps {
  name: string;
  dropIcon: boolean;
  addClass?: string;
  data: Array<selectValue>;
}

const ButtonDropDown: React.FC<ButtonDropDownProps> = ({
  data,
  name,
  dropIcon,
  addClass,
}) => {
  const [open, setOpen] = React.useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const location = useRouter();
  const drop = React.useRef<any>(null);
  function handleClick(e: any) {
    if (!e.target.closest(`.${drop?.current?.className}`) && open) {
      setOpen(false);
    }
  }
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  const tabIndex = 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveMenuItem(entry.target.id);
          } else if (entry.target.id === activeMenuItem) {
            console.log("isIntersecting", entry.target.id === activeMenuItem);
            setActiveMenuItem(null);
          }
        });
      },
      { root: null, rootMargin: "0px 0px 50% 0px", threshold: 0.5 }
    );

    const section1 = document.querySelector("#our_services");
    if (section1 !== null) {
      observer.observe(section1);
    }

    const section2 = document.querySelector("#our_work");
    if (section2 !== null) {
      observer.observe(section2);
    }

    return () => {
      if (section1 !== null) {
        observer.unobserve(section1);
      }
      if (section2 !== null) {
        observer.unobserve(section2);
      }
    };
  }, [activeMenuItem, location]);
  return (
    <div
      className="dropdown"
      ref={drop}
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <Button
        btntype="button"
        customButton={true}
        text={`${name} dropdown`}
        btnCatogery="toggle"
        showLabel={false}
        status={open}
        addClass={`${addClass || ""} button-drop-down `}
        onClick={() => setOpen((open) => !open)}
      >
        <span className="text-primaryContent font-normal font-Nunito dropDownBtn">
          {name}
        </span>
        {dropIcon && (
          <>
            {open ? (
              <i className="tracker-acc-up-arrow text-baseColor">
                <AccordionArrow
                  fill="!fill-primaryContent"
                  stroke="!stroke-primaryContent"
                  addClass="w-4"
                />
              </i>
            ) : (
              <i className="tracker-acc-down-arrow text-baseColor">
                <AccordionArrow
                  fill="!fill-primaryContent"
                  stroke="!stroke-primaryContent"
                  addClass="w-4 rotate-180"
                />
              </i>
            )}
          </>
        )}
      </Button>
      {open && (
        <>
          <div className="drop-align absolute z-50 mt-3 h-auto  shadow">
            <ul className="text-left p-4 grid gap-4">
              {data.map((item: any) => {
                return (
                  <React.Fragment key={item.title}>
                    <li className="!m-0" tabIndex={tabIndex}>
                      <Link
                        className={`no-underline ${
                          location.asPath.includes(item.link)
                            ? "active w-full"
                            : ""
                        } ${
                          activeMenuItem
                            ? item.id === activeMenuItem &&
                              location.asPath !== activeMenuItem
                              ? "menuactive"
                              : "inactive"
                            : "null-path"
                        }`}
                        href={`/services/${item.link}`}
                        onClick={() => setOpen(!open)}
                      >
                        <div className="drop-down-menu">
                          <p className="flex justify-center items-center">
                            {item.icon}
                          </p>
                          <p className="!text-sm">{item.title}</p>
                        </div>
                      </Link>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ButtonDropDown;
