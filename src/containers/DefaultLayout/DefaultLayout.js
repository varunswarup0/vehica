import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import {
  DefaultContent,
  DefaultSidebar,
  DefaultAside,
  DefaultFooter,
  DefaultHeader,
} from "./index";

const DefaultLayout = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const classes = classNames(
    "c-app c-default-layout",
    darkMode && "c-dark-theme"
  );

  return (
    <div className={classes}>
      <DefaultSidebar />
      <DefaultAside />
      <div className="c-wrapper">
        <DefaultHeader />
        <div className="c-body">
          <DefaultContent />
        </div>
        <DefaultFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
