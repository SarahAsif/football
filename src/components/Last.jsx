import React from "react";
import "../App.css";
import Phone from "../images/phone.png";
import Button from "@mui/material/Button";
import TrendingFlat from "@mui/icons-material/TrendingFlat";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";
import { IsTabletWidth } from "../utils";
import { IsDesktopSmallWidth } from "../utils";

const Last = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const desktopSmallWidth = IsDesktopSmallWidth();
  return (
    <>
      {" "}
      <div
        className={clsx(
          "bg_last px-36 leading-normal",
          mobileWidth && "text-center px-5 pb-6",
          tabletWidth && "px-2"
        )}
      >
        <div
          className={clsx(
            "flex flex-row",
            mobileWidth && "flex-col",
            tabletWidth && ""
          )}
        >
          <div className="z-30">
            <img src={Phone} />
          </div>
          <div className="space-y-7 flex flex-col justify-center">
            <div className="leading-normal lg:text-5xl text-2xl lg:max-w-lg max-w-xs text-center">
              Don't miss the launch of our application
            </div>
            <div
              className={clsx(
                "flex flex-row space-x-10",
                mobileWidth && "space-x-0 space-y-9 flex-col",
                tabletWidth && "pt-7 space-x-0 space-y-9 flex-col text-center"
              )}
            >
              <div>
                <input type="text" placeholder="Leave Your Email" />
              </div>
              <div>
                <Button
                  variant="contained"
                  endIcon={<TrendingFlat />}
                  color="warning"
                >
                  Send Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Last;
