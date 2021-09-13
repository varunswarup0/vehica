// Core imports
import React from "react";
// import { CBreadcrumb, CBreadcrumbItem, CLink } from "@coreui/react";
// Default export of main functional component
export default function Header() {
  // JSX
  return (
    <>
      {/* <CBreadcrumb>
        <CBreadcrumbItem>
          <CLink>Form</CLink>
        </CBreadcrumbItem>
        <CBreadcrumbItem active>Preview</CBreadcrumbItem>
      </CBreadcrumb> */}

      <header>
        <div className="logo">
          <img src={require("../../../images/logo.png")} alt={"ecia-logo"} />
        </div>
      </header>
    </>
  );
}
