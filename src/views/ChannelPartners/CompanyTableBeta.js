import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

import {
  // CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  // CButton,
  // CModal,
  // CModalBody,
  // CModalTitle,
  // CModalHeader,
  // CBreadcrumbRouter,
  CBreadcrumb,
  CLink,
  CBreadcrumbItem,
  CButton,
  CFormGroup,
  CInput,
  CModalFooter,
  CLabel,
  CModalBody,
  CForm,
  CModalTitle,
  CModalHeader,
  CModal,
} from "@coreui/react";
import { CIcon } from "@coreui/icons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import regimanData from "./RegimanData";
import EmployeeTable from "./EmployeeTable";
import Translation from "../../app/Language/Translation";

const companyFields = [
  "companyname",
  "contacts",
  "activeRegistrations",
  "totalRegistrations",
  "update",
  "delete",
];

const CompanyTable = ({ id }) => {
  const [large, setLarge] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSaveClick = () => {
    setLarge(!large);
    console.log(name, email, phone);
  };
  const [show, setShow] = useState(false);
  const [companyId, setCompanyId] = useState(null);
  const handleClickBack = () => {
    setCompanyId(null);
    setShow(false);
  };
  const handleClick = (companyId) => {
    setCompanyId(companyId);
    setShow(true);
    return;
  };
  return (
    <>
      <br />
      <br />
      <CRow>
        <CCol>
          <CForm inline>
            <CButton color="primary" onClick={() => setLarge(!large)}>
              <CIcon name="cil-plus" />
              &nbsp;&nbsp;Add
            </CButton>
          </CForm>
          <br />
          <br />
          <CModal show={large} onClose={() => setLarge(!large)} size="lg">
            <CModalHeader closeButton>
              <CModalTitle>
                Channel Partner&nbsp;&nbsp;
                <small>Contact</small>
              </CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CForm
                action=""
                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input" sm="15" col="lg">
                      {(Translation.t("NAME"), "Name")}
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      size="lg"
                      id="text-input"
                      name="text-input"
                      type="text"
                      autoComplete="given-name"
                      autoFocus={true}
                      required
                      placeholder="Enter Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input" sm="15" col="lg">
                      {(Translation.t("EMAIL"), "Email")}
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      size="lg"
                      type="email"
                      id="email-input"
                      name="email-input"
                      placeholder="Enter Email"
                      autoComplete="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input" sm="15" col="lg">
                      {(Translation.t("PHONE_NUMBER"), "Phone Number")}
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      size="lg"
                      id="phone-input"
                      name="phone-input"
                      placeholder="Enter Phone Number"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </CCol>
                </CFormGroup>
              </CForm>
            </CModalBody>
            <CModalFooter>
              <CButton color="primary" onClick={() => handleSaveClick()}>
                Save
              </CButton>
              <CButton color="secondary" onClick={() => setLarge(!large)}>
                Cancel
              </CButton>
            </CModalFooter>
          </CModal>
        </CCol>
      </CRow>
      {show ? <EmployeeTable id={id} companyId={companyId} /> : null}
      {!show ? (
        <CRow>
          <CCol>
            <div style={{ textAlign: "center" }}>
              <CDataTable
                items={regimanData[id].companies}
                fields={companyFields}
                itemsPerPage={5}
                pagination
                hover
                onRowClick={(item) => handleClick(item.CompanyId)}
                scopedSlots={{
                  delete: (item) => (
                    <td>
                      <CButton
                        onClick=""
                        size="sm"
                        className="btn-pinterest btn-brand mr-1 mb-1"
                      >
                        <CIcon name="cil-trash" alt="" />
                      </CButton>
                    </td>
                  ),
                  update: (item) => (
                    <td>
                      <CButton
                        onClick=""
                        size="sm"
                        className="btn-stack-overflow btn-brand mr-1 mb-1"
                      >
                        <CIcon name="cil-pencil" alt="" />
                      </CButton>
                    </td>
                  ),
                }}
              />
            </div>
          </CCol>
        </CRow>
      ) : null}
    </>
  );
};

export default CompanyTable;
