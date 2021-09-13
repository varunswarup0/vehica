import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";

import {
  // CBadge,
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
  CForm,
  CModalFooter,
  CInput,
  CLabel,
  CFormGroup,
  CModalBody,
  CModalTitle,
  CModalHeader,
  CModal,
  CSelect,
} from "@coreui/react";
import { CIcon } from "@coreui/icons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { useSelector } from "react-redux";

// import regimanData from "./RegimanData";
import EmployeeTable from "./EmployeeTable";
import Translation from "../../app/Language/Translation";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";

const companyFields = [
  "companyname",
  "contacts",
  "activeRegistrations",
  "totalRegistrations",
  "update",
  "delete",
];

const channelPartners = (id) => {
  switch (id) {
    case 0:
      return "Manufacturer";
    case 1:
      return "Distribtor";
    case 2:
      return "Sales Represntative";
    case 3:
      return "Sales Represntative";
    default:
      return "Manufacturer";
  }
};

const companies = [
  { _id: "0", name: "Kreator 3d" },
  { _id: "1", name: "LG" },
  { _id: "2", name: "Whirpool" },
  { _id: "3", name: "ACIS" },
];

const CompanyTable = ({ id }) => {
  // Add Channel Partner
  const [small, setSmall] = useState(false);
  const [type, setType] = useState("Manufacture");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [channelPartnerEmail, setChannelPartnerEmail] = useState("");
  const [channelPartnerPhone, setChannelPartnerPhone] = useState("");
  const [accountId, setAccountId] = useState("");
  const [regimanData, setRegimanData] = useState([]);

  const idRedux = useSelector((state) => state.id);
  const companyIdRedux = useSelector((state) => state.companyId);
  useEffect(() => {
    if (!companyIdRedux) return;
    Axios.post(
      `http://127.0.0.1:3002/api/channelpartners/${companyIdRedux}/company`
    )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, [companyIdRedux]);

  // Add Channel Partner Conatct
  const [large, setLarge] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [show, setShow] = useState(false);
  const [bread, setBread] = useState(
    <CBreadcrumb>
      <CBreadcrumbItem active>
        <span>{channelPartners(id)}</span>
      </CBreadcrumbItem>
    </CBreadcrumb>
  );
  const [companyId, setCompanyId] = useState(null);
  const handleLargeSaveClick = () => {
    setLarge(!large);
    console.log(name, email, phone);
  };
  const handleSmallSaveClick = () => {
    setSmall(!small);
    console.log(
      type,
      companyName,
      address,
      channelPartnerEmail,
      channelPartnerPhone,
      accountId
    );
  };
  const handleClickBack = () => {
    setCompanyId(null);
    setShow(false);
    setBread(
      <CBreadcrumb>
        <CBreadcrumbItem>
          <span>{channelPartners(id)}</span>
        </CBreadcrumbItem>
      </CBreadcrumb>
    );
  };
  const handleClick = (companyId) => {
    setCompanyId(companyId);
    setBread(
      <CBreadcrumb>
        <CBreadcrumbItem>
          <CLink onClick={() => handleClickBack()}>{channelPartners(id)}</CLink>
        </CBreadcrumbItem>
        <CBreadcrumbItem active>
          <span>{regimanData[id].companies[companyId].companyname}</span>
        </CBreadcrumbItem>
      </CBreadcrumb>
    );
    setShow(true);
    return;
  };
  return <></>;
  return (
    <>
      <br />
      <br />
      <CRow>
        <div style={{ marginRight: "auto", marginLeft: "5rem" }}>{bread}</div>

        <CForm inline>
          <CButton
            color="primary"
            onClick={() => (!show ? setSmall(!small) : setLarge(!large))}
            style={{ marginRight: "5rem" }}
            shape="square"
            className="h5"
          >
            <CIcon
              name="cil-plus"
              style={{
                backgroundColor: "#fff",
                borderColor: "#fff",
                color: "#321fdb",
                borderRadius: "50%",
              }}
            />
            &nbsp;&nbsp;ADD
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
            <CButton color="primary" onClick={() => handleLargeSaveClick()}>
              Save
            </CButton>
            <CButton color="secondary" onClick={() => setLarge(!large)}>
              Cancel
            </CButton>
          </CModalFooter>
        </CModal>
        <CModal show={small} onClose={() => setSmall(!small)} size="lg">
          <CModalHeader closeButton>
            <CModalTitle>
              <small>ADD&nbsp;&nbsp;</small>
              Channel Partner&nbsp;&nbsp;
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
                  <CLabel htmlFor="select" sm="15" col="lg">
                    {(Translation.t("COMPANY_TYPE"), "Company Type")}
                  </CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CSelect
                    size="lg"
                    custom
                    name="select"
                    id="select"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="" label="Select Company Type" />
                    <option value="manufacturer">Manufacturer</option>
                    <option value="distribtor">Distribtor</option>
                    <option value="salesrepresentative">
                      Sales Representative
                    </option>
                  </CSelect>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input" sm="15" col="lg">
                    {(Translation.t("COMPANY_NAME"), "Company Name")}
                  </CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <Autocomplete
                    id="companies"
                    options={companies}
                    getOptionLabel={(company) => company.name}
                    style={{ width: 300 }}
                    onChange={(event, company) => {
                      setCompanyName(company.name);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Company"
                        variant="outlined"
                      />
                    )}
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input" sm="15" col="lg">
                    {(Translation.t("ADDRESS"), "Address")}
                  </CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    size="lg"
                    id="address-input"
                    name="address-input"
                    type="text"
                    autoComplete="given-address-name"
                    autoFocus={true}
                    required
                    placeholder="Enter Address Name"
                    onChange={(e) => setAddress(e.target.value)}
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
                    onChange={(e) => setChannelPartnerEmail(e.target.value)}
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
                    onChange={(e) => setChannelPartnerPhone(e.target.value)}
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="email-input" sm="15" col="lg">
                    {(Translation.t("ACCOUNT_ID"), "Account ID")}
                  </CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    size="lg"
                    id="account-id-input"
                    name="account-id-input"
                    placeholder="Enter Account ID"
                    onChange={(e) => setAccountId(e.target.value)}
                  />
                </CCol>
              </CFormGroup>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton color="primary" onClick={() => handleSmallSaveClick()}>
              Save
            </CButton>
            <CButton color="secondary" onClick={() => setSmall(!small)}>
              Cancel
            </CButton>
          </CModalFooter>
        </CModal>
      </CRow>
      {show ? <EmployeeTable id={id} companyId={companyId} /> : null}
      {!show ? (
        <CRow style={{ textAlign: "center" }}>
          <CCol>
            {/* <CCard>
              <CCardBody style={{ textAlign: "center" }}> */}
            <CDataTable
              items={regimanData[id].companies}
              fields={companyFields}
              itemsPerPage={5}
              // pagination
              striped
              hover
              border
              onRowClick={(item) => handleClick(item.CompanyId)}
              scopedSlots={{
                delete: (item) => (
                  <td>
                    <CButton onClick="" size="sm" shape="pill">
                      <CIcon name="cil-trash" alt="" />
                    </CButton>
                  </td>
                ),
                update: (item) => (
                  <td>
                    <CButton onClick="" size="sm" shape="pill">
                      <CIcon name="cil-pencil" alt="" />
                    </CButton>
                  </td>
                ),
              }}
            />
            {/* </CCardBody>
            </CCard> */}
          </CCol>
        </CRow>
      ) : null}
    </>
  );
};

export default CompanyTable;
