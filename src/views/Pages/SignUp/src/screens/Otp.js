import React, { useEffect } from "react";
import OtpContainer from "../components/OtpContainer";

import "../index.css";
import "../assets/css/webflow.css";
import "../assets/css/normalize.css";
import "../assets/css/coot-login-auth.webflow.css";
import { CCard } from "@coreui/react";

const Otp = (props) => {
  useEffect(() => console.log("props.location", props.location), [
    props.location,
  ]);

  return (
    <>
      <div style={{ marginTop: "5rem", backgroundColor: "#ced2d8" }}>
        <CCard
          style={{
            backgroundColor: "#ced2d8",
            placeItems: "center",
          }}
        >
          <OtpContainer
            email={props.location.state}
            label="Validate Verification Code"
          ></OtpContainer>
          {/* <div>
        {props.match}
      </div> */}
        </CCard>
      </div>
    </>
  );
};

export default Otp;
