import React from "react";
import { CCardBody, CCard, CCol, CCardHeader, CRow } from "@coreui/react";

const Form = (props) => {
  props.location.state !== undefined &&
    localStorage.setItem("emailId", JSON.stringify(props.location.state));
  let emailId = JSON.parse(localStorage.getItem("emailId"));
  console.log(props);
  return (
    <center>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h1>Channel Partner: {emailId}</h1>
            </CCardHeader>
            <CCardBody style={{ height: "25rem" }}>Form Body</CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </center>
  );
};

export default Form;
