import React from "react";
import { CFooter } from "@coreui/react";

const DefaultFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        {/* <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">CoreUI</a> */}
        <span className="ml-1">&copy; Vehica</span>
      </div>
      <div className="ml-auto">
        <span className="mr-1">Made with</span>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          ❤️
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(DefaultFooter);
