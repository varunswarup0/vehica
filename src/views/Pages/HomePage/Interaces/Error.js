import React, { useState } from "react";
import { CCardBody, CCard, CCardHeader, CCol, CRow } from "@coreui/react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Error = () => {
  const [danger, setDanger] = useState(true);
  const handleClick = () => {
    window.location.reload();
    setDanger(!danger);
  };
  return (
    <>
      <CCard
        style={{
          marginTop: "10rem",
        }}
        show={danger}
        onClose={() => handleClick()}
        size="lg"
      >
        <CCardHeader style={{ textAlign: "center" }}>
          <span className="h2">OTP is expired</span>
        </CCardHeader>
        <CCardBody style={{ padding: "3rem" }}>
          <CRow>
            <CCol md="2" lg="2" sm="2">
              <FontAwesomeIcon
                icon={faExclamationCircle}
                name="cil-exclamation-circle"
                style={{ color: "#e55353", width: "8rem", height: "8rem" }}
              />
            </CCol>
            <CCol>
              <br />
              <br />
              <br />
              <center>
                <span className="h3" style={{ lineHeight: "0.1rem" }}>
                  Proceeding to
                  Billing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </center>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Error;
