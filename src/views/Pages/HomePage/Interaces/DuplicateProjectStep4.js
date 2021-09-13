import React from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CListGroup,
  CListGroupItem,
  CRow,
  CModalBody,
  CModal,
} from "@coreui/react";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DuplicateProjectStep4 = () => (
  <CModal
    show={true}
    style={{
      marginTop: "10rem",
    }}
    size="lg"
  >
    <CModalBody>
      <CCardBody className="text-left">
        <CRow>
          <CCol md="6" lg="6" sm="6">
            <CListGroup>
              <CListGroupItem>
                <FontAwesomeIcon icon={faCheckCircle} />
                &nbsp;&nbsp; Cras justo odio
              </CListGroupItem>
              <CListGroupItem>
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} />
                &nbsp;&nbsp; Dapibus ac facilisis in
              </CListGroupItem>
              <CListGroupItem>
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} />
                &nbsp;&nbsp; Morbi leo risus
              </CListGroupItem>
              <CListGroupItem>
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} />
                &nbsp;&nbsp; Porta ac consectetur ac
              </CListGroupItem>
              <CListGroupItem>
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} />
                &nbsp;&nbsp; Vestibulum at eros
              </CListGroupItem>
            </CListGroup>
          </CCol>
          <CCol md="6" lg="6" sm="6">
            <img
              src={require("../../../../../src/assets/images/CyZV.gif")}
              alt={""}
              style={{ width: "20rem" }}
            />
          </CCol>
        </CRow>
      </CCardBody>
      {/* </CCardBody> */}
    </CModalBody>
  </CModal>
);

export default DuplicateProjectStep4;
