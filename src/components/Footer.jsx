import React from "react";
import "../App.css";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";
import { IsTabletWidth } from "../utils";

const Footer = (props) => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();

  return (
    <div className={`p-5 bg-zinc-800 ${props.color}`}>
      <nav
        className={clsx(
          "text-white px-40",
          mobileWidth && "text-center items-center p-0",
          tabletWidth && "items-center px-10"
        )}
      >
        <div className="flex flex-row items-center py-8">
          <div className="uppercase">
            <a
              href="/home"
              className={clsx(
                "text-3xl no-underline text-white hover:text-blue-dark mr-8 font-bold",
                mobileWidth && "text-center items-center"
              )}
            >
              Iminn
            </a>
          </div>
          <div
            className={clsx(
              "grid grid-flow-col gap-9 list font-semibold",
              mobileWidth && "visibility: hidden"
            )}
          >
            <a
              href="/one"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              Home
            </a>
            <a
              href="/two"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              About
            </a>
            <a
              href="/three"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              Blog
            </a>
            <a
              href="/three"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
