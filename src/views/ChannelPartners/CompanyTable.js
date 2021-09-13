import React, { useState, useEffect } from "react";
import { isUuid } from "uuidv4";
import {
  CCol,
  CDataTable,
  CRow,
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
  CLink,
  CBadge,
} from "@coreui/react";
import { CIcon } from "@coreui/icons-react";
// import Axios from "axios";
import { useSelector } from "react-redux";

import EmployeeTable from "./EmployeeTable";
import Translation from "../../app/Language/Translation";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const companyFields = [
  "companyName",
  "companyType",
  "contacts",
  "activeRegistrations",
  "totalRegistrations",
  "update",
  "delete",
];

const CompanyTable = ({ setManuNumber }) => {
  // Load Channel Partner Companies Data
  const [companyData, setCompanyData] = useState([]);
  const [reload, setReload] = useState(false);
  const [companyLoading, setCompanyLoading] = useState(true);
  const [employeesLoading, setEmployeesLoading] = useState(true);

  // Add Channel Partner
  const [addCompanyModal, toggleAddCompanyModal] = useState(false);
  const [companyType, setCompanyType] = useState("Manufacture");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyAccountId, setCompanyAccountId] = useState("");
  // Add Channel Partner Contact
  const [addEmployeeModal, toggleAddEmployeeModal] = useState(false);
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeePhone, setEmployeePhone] = useState("");
  // Channel Partner Dropdown
  const [channelPartnerEmployees, setChannelPartnerEmployees] = useState([]);
  const [channelPartnerCompanies, setChannelPartnerCompanies] = useState([]);

  // Redux Company States
  const companyNameRedux = useSelector((state) => state.companyName);
  const companyTypeRedux = useSelector((state) => state.companyType);
  const [addCompanyForm, toggleAddCompanyForm] = useState(false);

  const [show, setShow] = useState(false);
  const [companyTableName, setCompanyTableName] = useState(null);

  // Delete Channel Partner Company
  const handleDeleteChannelPartnerClick = async (name) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      companyName: name,
    });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include",
    };
    await fetch(
      "http://127.0.0.1:3002/api/channelpartners/company",
      requestOptions
    )
      .then(() => setReload(!reload))
      .catch((err) => console.log(err));
  };

  // Get Channel Partners
  useEffect(() => {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
      credentials: "include",
    };

    fetch(
      "http://127.0.0.1:3002/api/channelpartners/my/company",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setCompanyData(result);
        console.log("Company Data: ", result);
      })
      .then(() => setCompanyLoading(false))
      .catch((error) => console.log("error", error));
  }, [reload]);

  // Get Channel Partner Companies DropDown
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      companyId: "5ee9c6dece1f8b1b7cc5492b",
      companyName: "whirpool",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include",
    };
    const fetchCompany = async () => {
      await fetch(
        "http://127.0.0.1:3002/api/channelpartners/company",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setChannelPartnerCompanies(result))
        .catch((err) => console.log(err));
    };
    const fetchEmployees = async () => {
      await fetch(
        "http://127.0.0.1:3002/api/channelpartners/employees",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setChannelPartnerEmployees(result))
        .catch((err) => console.log(err));
    };
    fetchCompany();
    fetchEmployees();
  }, [companyNameRedux]);

  // Add Channel Partner Employee
  const handleAddEmployeeClick = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      employee: {
        type: isUuid(employeeId) === true ? "seat" : "nonseat",
        id: employeeId,
        //To be Added in the Backend
        name: employeeName,
        email: employeeEmail,
        phone: employeePhone,
      },
      companyType: companyType,
      companyName: companyName,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include",
    };
    await fetch("http://127.0.0.1:3002/api/channelpartners/", requestOptions)
      .then(() => {
        setReload(!reload);
        // setEmployeesLoading(true);
      })
      .then(() => toggleAddEmployeeModal(!addEmployeeModal))
      .catch((err) => console.log(err));
    // console.log(employeeName, employeeEmail, employeePhone);
  };

  // Add Channel Partner Company
  const handleCompanySaveClick = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      company: companyName,
      companyType,
      companyAddress,
      companyEmail,
      companyPhone,
      companyAccountId,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include",
    };
    await fetch("http://127.0.0.1:3002/api/channelpartners/", requestOptions)
      .then(() => setReload(!reload))
      .then(() => toggleAddCompanyModal(!addCompanyModal))
      .catch((err) => console.log(err));
  };

  const handleClickBack = () => {
    setCompanyTableName(null);
    setShow(false);
  };
  const handleCompanyClick = (companyTableName) => {
    setCompanyTableName(companyTableName);
    setShow(true);
    return;
  };
  return (
    <>
      <br />
      <br />
      <CRow>
        <CForm inline>
          <CButton
            color="warning"
            onClick={() =>
              !show
                ? toggleAddCompanyModal(!addCompanyModal)
                : toggleAddEmployeeModal(!addEmployeeModal)
            }
            style={{ marginRight: "5rem", marginLeft: "5rem" }}
            className="h5"
            shape="square"
          >
            <CIcon
              name="cil-plus"
              style={{
                backgroundColor: "#4f5d73",
                borderColor: "#4f5d73",
                color: "#f9b115",
                borderRadius: "50%",
              }}
            />
            &nbsp;&nbsp;ADD
          </CButton>
          {show ? (
            <CButton
              color="success"
              onClick={() => handleClickBack()}
              shape="square"
              style={{ marginRight: "5rem" }}
              className="h5"
              size="sm"
            >
              <CIcon
                name="cil-chevron-circle-left-alt"
                style={{
                  backgroundColor: "#fff",
                  color: "#2eb85c",
                  borderColor: "#fff",
                  borderRadius: "50%",
                }}
              />
              &nbsp; BACK
            </CButton>
          ) : null}
        </CForm>
        <br />
        <br />
        {/* Employee Modal */}
        <CModal
          show={addEmployeeModal}
          onClose={() => toggleAddEmployeeModal(!addEmployeeModal)}
          size="lg"
        >
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
                  <Autocomplete
                    id="companies"
                    options={channelPartnerEmployees}
                    getOptionLabel={(employee) => employee.name}
                    style={{ width: 300 }}
                    onChange={(event, employee) => {
                      setEmployeeName(employee.name);
                      setEmployeeId(employee._id);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Enter Name"
                        variant="outlined"
                      />
                    )}
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
                  <Autocomplete
                    id="companies"
                    options={channelPartnerEmployees}
                    getOptionLabel={(employee) => employee.email}
                    style={{ width: 300 }}
                    onChange={(event, employee) => {
                      setEmployeeEmail(employee.email);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Enter Email"
                        variant="outlined"
                      />
                    )}
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
                    onChange={(e) => setEmployeePhone(e.target.value)}
                  />
                </CCol>
              </CFormGroup>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton color="primary" onClick={() => handleAddEmployeeClick()}>
              Save
            </CButton>
            <CButton
              color="secondary"
              onClick={() => toggleAddEmployeeModal(!addEmployeeModal)}
            >
              Cancel
            </CButton>
          </CModalFooter>
        </CModal>
        <CModal
          show={addCompanyModal}
          onClose={() => toggleAddCompanyModal(!addCompanyModal)}
          size="lg"
        >
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
              {!addCompanyForm ? (
                <>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="company-name-input" sm="15" col="lg">
                        Company Name
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <Autocomplete
                        id="companies"
                        options={channelPartnerCompanies}
                        getOptionLabel={(company) => company.name}
                        style={{ width: 300 }}
                        onChange={(event, company) => {
                          if (company !== null) {
                            setCompanyName(company.name);
                            console.log(company);
                            // setCompanyType(company.type);
                          } else setCompanyName(null);
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
                    <CCol>
                      <div style={{ marginLeft: "12rem" }}>
                        <small>Company Type: </small>
                        <CBadge color="success">
                          {companyType === "manufacturer" ? (
                            <>Manufacturer</>
                          ) : companyType === "distributor" ? (
                            <>Distributor</>
                          ) : companyType === "salesrep" ? (
                            <>Sales Representative</>
                          ) : null}
                          Manufacturer
                        </CBadge>
                        <br />
                      </div>
                    </CCol>
                    <CCol>
                      <CLink
                        onClick={() => toggleAddCompanyForm(!addCompanyForm)}
                      >
                        {!addCompanyForm
                          ? "Add New Company"
                          : "Select From Existing Companies"}
                      </CLink>
                    </CCol>
                  </CFormGroup>
                </>
              ) : (
                <>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input" sm="15" col="lg">
                        Company Type
                      </CLabel>
                    </CCol>
                    <CCol md="9" style={{ marginLeft: "2rem" }}>
                      <CSelect
                        size="lg"
                        custom
                        name="select"
                        id="select"
                        onChange={(e) => setCompanyType(e.target.value)}
                      >
                        <option value="" label="Select Company Type" />
                        {companyTypeRedux !== "manufacturer" && (
                          <option value="manufacturer">Manufacturer</option>
                        )}
                        {companyTypeRedux !== "distributor" && (
                          <option value="distributor">Distributor</option>
                        )}
                        {companyTypeRedux !== "salesrep" && (
                          <option value="salesrep">Sales Representative</option>
                        )}
                      </CSelect>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input" sm="15" col="lg">
                        Company Name
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9" style={{ marginLeft: "2rem" }}>
                      <CInput
                        size="lg"
                        id="company-name-input"
                        name="company-name-input-input"
                        type="text"
                        autoComplete="given-company-name-input-name"
                        autoFocus={true}
                        required
                        placeholder="Enter Company Name"
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </CCol>
                  </CFormGroup>
                  <CLink onClick={() => toggleAddCompanyForm(!addCompanyForm)}>
                    {!addCompanyForm
                      ? "Add New Company"
                      : "Select From Existing Companies"}
                  </CLink>
                  <br />
                  <br />
                </>
              )}
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
                    onChange={(e) => setCompanyAddress(e.target.value)}
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
                    onChange={(e) => setCompanyEmail(e.target.value)}
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
                    onChange={(e) => setCompanyPhone(e.target.value)}
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
                    onChange={(e) => setCompanyAccountId(e.target.value)}
                  />
                </CCol>
              </CFormGroup>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton color="primary" onClick={() => handleCompanySaveClick()}>
              Save
            </CButton>
            <CButton
              color="secondary"
              onClick={() => toggleAddCompanyModal(!addCompanyModal)}
            >
              Cancel
            </CButton>
          </CModalFooter>
        </CModal>
      </CRow>
      <br />
      {show ? (
        <EmployeeTable
          reload={reload}
          setReload={(reload) => setReload(reload)}
          employeesLoading={employeesLoading}
          setEmployeesLoading={(employeesLoading) =>
            setEmployeesLoading(employeesLoading)
          }
          partnerCompany={companyTableName}
        />
      ) : null}
      {!show ? (
        <CRow style={{ textAlign: "center" }}>
          <CCol>
            {companyLoading ? (
              <Skeleton variant="rect" width={1155} height={318} />
            ) : (
              <CDataTable
                items={companyData}
                fields={companyFields}
                itemsPerPage={5}
                striped
                hover
                border
                scopedSlots={{
                  companyName: (item) => (
                    <td>
                      <CLink
                        onClick={() => handleCompanyClick(item.companyName)}
                        style={{ textTransform: "uppercase" }}
                      >
                        {item.companyName}
                      </CLink>
                    </td>
                  ),
                  delete: (item) => (
                    <td>
                      <CButton
                        size="sm"
                        shape="pill"
                        onClick={() =>
                          handleDeleteChannelPartnerClick(item.name)
                        }
                      >
                        <CIcon name="cil-trash" alt="" />
                      </CButton>
                    </td>
                  ),
                  update: () => (
                    <td>
                      <CButton size="sm" shape="pill">
                        <CIcon name="cil-pencil" alt="" />
                      </CButton>
                    </td>
                  ),
                }}
              />
            )}
          </CCol>
        </CRow>
      ) : null}
    </>
  );
};

export default CompanyTable;
