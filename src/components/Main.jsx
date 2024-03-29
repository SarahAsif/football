import React from "react";
import Button from "@mui/material/Button";
import TrendingFlat from "@mui/icons-material/TrendingFlat";
import Football from "../images/football.png";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";
import { IsDesktopWidth } from "../utils";
import { IsTabletWidth } from "../utils";
import { IsDesktopSmallWidth } from "../utils";

const Main = () => {
  const mobileWidth = IsMobileWidth();
  const desktopWidth = IsDesktopWidth();
  const tabletWidth = IsTabletWidth();
  const desktopSmallWidth = IsDesktopSmallWidth();

  return (
    <div
      className={clsx(
        "flex flex-row justify-between",
        (mobileWidth || tabletWidth || desktopSmallWidth) &&
          "text-center items-center flex-col"
      )}
    >
      <div
        className={clsx(
          "text-zinc-800 mt-40",
          mobileWidth && "mt-1 text-center",
          tabletWidth && "text-center "
        )}
      >
        <div
          className={clsx(
            "py-7 pl-40 grid grid-flow-row",
            (mobileWidth || tabletWidth || desktopSmallWidth) &&
              "pl-5 text-center items-center "
          )}
        >
          <div>
            <h1 className="text-6xl mb-8 font-semibold">
              Play <span className="football ">Football</span> Easily
            </h1>
            <div className="mb-4">
              <p>
                Join a network of players near you to make you no longer cancel
                a game for last minutes dropouts
              </p>
            </div>
          </div>
        </div>
        <div className={clsx("px-40", mobileWidth && "px-0 text-center")}>
          <Button
            variant="contained"
            endIcon={<TrendingFlat />}
            color="warning"
          >
            Start Demo
          </Button>
        </div>
        <div>
          <div
            className={clsx(
              "flex flex-row gap-1 px-40 py-20 ",
              mobileWidth && "flex-col px-0 py-8 text-center  justify-between "
            )}
          >
            <div
              className={clsx(
                "grid grid-flow-col text-center",
                mobileWidth && "text-center justify-center"
              )}
            >
              <div>
                <svg
                  className="svg_icons"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,10.84 21.79,9.69 21.39,8.61L19.79,10.21C19.93,10.8 20,11.4 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.6,4 13.2,4.07 13.79,4.21L15.4,2.6C14.31,2.21 13.16,2 12,2M19,2L15,6V7.5L12.45,10.05C12.3,10 12.15,10 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.85 14,11.7 13.95,11.55L16.5,9H18L22,5H19V2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12H16A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8V6Z" />
                </svg>
              </div>
              <div>
                <div className="text-orange-400 font-semibold ">
                  Create Game
                </div>
                <div>Easy to create</div>
              </div>
            </div>
            <div
              className={clsx(
                "grid grid-flow-col",
                mobileWidth && "text-center justify-center"
              )}
            >
              <div>
                <svg
                  className="svg_icons"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
              </div>

              <div>
                <div className="text-orange-400 font-semibold">Search Game</div>
                <div>Easy to create</div>
              </div>
            </div>
            <div
              className={clsx(
                "grid grid-flow-col ",
                mobileWidth && "text-center justify-center"
              )}
            >
              <div>
                <svg
                  className="svg_icons"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" />
                </svg>
              </div>

              <div>
                <div className="text-orange-400 font-semibold ">Climb Rank</div>
                <div>Become a superstar</div>
              </div>
            </div>
            <div>
              <div className="text-orange-400 font-semibold"></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          src={Football}
          className={clsx(
            "visibility: visible",
            mobileWidth && "visibility: hidden overflow-x-hidden",
            desktopWidth && "visibility: visible overflow-x-hidden",
            tabletWidth && "visibility: hidden overflow-x-hidden",
            desktopSmallWidth && "visibility: hidden overflow-x-hidden"
          )}
        />
      </div>
    </div>
  );
};

export default Main;
