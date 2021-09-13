import React, { useState } from "react";
import { CCardBody, CCard, CCardHeader, CCol, CRow } from "@coreui/react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Verify = () => {
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
          <span className="h2">Your Email is verified</span>
        </CCardHeader>
        <CCardBody style={{ padding: "3rem" }}>
          <CRow>
            <CCol md="2" lg="2" sm="2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#2eb85c", width: "8rem", height: "8rem" }}
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

export default Verify;
