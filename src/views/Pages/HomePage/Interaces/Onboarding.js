import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
  CCardHeader,
  CLink,
} from "@coreui/react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { CIcon } from "@coreui/icons-react";
import Translation from "../../../../app/Language/Translation";
// import DuplicateProjectStep4 from "./DuplicateProjectStep4";

const Onboarding = (props) => {
  let [companies, setCompanies] = useState([]);
  let [companyName, setCompanyName] = useState("");
  let [companyId, setCompanyId] = useState("");
  let [designations, setDesignations] = useState([]);
  let [designation, setDesignation] = useState("");
  const history = useHistory();
  const [companyType, setCompanyType] = useState("all");

  useEffect(() => {
    props.location.state !== undefined &&
      localStorage.setItem("companyType", JSON.stringify(props.location.state));
    let companyType = JSON.parse(localStorage.getItem("companyType"));

    setCompanyType(companyType);
    axios
      .get(`http://127.0.0.1:3002/api/public/company/${companyType}`)
      .then((res) => setCompanies(res.data));
    // .then((res) => console.log(res.data));
    axios
      .get("http://127.0.0.1:3002/api/public/designations/")
      .then((res) => setDesignations(res.data));
    // .then((res) => console.log(res.data));
  }, [props.location.state]);

  const dispatch = useDispatch();
  // const emailRedux = useSelector((state) => state.email);
  // const passwordRedux = useSelector((state) => state.password);
  // const idRedux = useSelector((state) => state.id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  // Add New Company
  const [addCompany, toggleAddCompany] = useState(false);
  // const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:3002/api/signup", {
        company: {
          name: companyName.toLowerCase(),
          companyType: companyType,
          // companyType: "manufacturer",
          strength: strength,
        },
        user: {
          email: email.toLowerCase(),
          type: "admin",
          designation: designation,
          name: name.toLowerCase(),
          password: password,
        },
      })
      // .then((res) => console.log(res))
      // .catch((err) => console.log(err))
      .then((res) =>
        dispatch({
          type: "setSignUpDetails",
          payload: {
            email: email,
            password: password,
            id: res.data._id,
            companyId: companyId,
          },
        })
      )
      .then(history.push("/creditCardDetails"));
  };

  return (
    <>
      {/* {loading ? <DuplicateProjectStep4 /> : null} */}
      <CCard style={{ margin: "3rem", placeItems: "center" }}>
        <CCol col="2" className="mt-3">
          <CButton
            variant="ghost"
            color="success"
            onClick={() => props.history.goBack()}
            shape="square"
            size="sm"
          >
            <CIcon name="cil-arrow-left" />
            &nbsp;&nbsp;&nbsp;
            {(Translation.t("PREVIOUS"), "Previous")}
          </CButton>
        </CCol>
        <CCardHeader
          className="h4"
          style={{ color: "#17a2b8", display: "inline" }}
        >
          {companyType === "manufacturer" ? (
            <>For Manufacturer</>
          ) : companyType === "distributor" ? (
            <>For Distributor</>
          ) : (
            <>For Sales Representative</>
          )}
        </CCardHeader>
        <CCardBody>
          <CForm
            action=""
            method="post"
            encType="multipart/form-data"
            className="form-horizontal"
          >
            <CCardHeader style={{ color: "#17a2b8" }}>
              {(Translation.t("PERSONAL"), "Personal")}&nbsp;&nbsp;
              <small>{(Translation.t("INFO"), "Info")}</small>
            </CCardHeader>
            <br />
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
                <CLabel htmlFor="password" sm="15" col="lg">
                  {(Translation.t("PASSWORD"), "Password")}
                </CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  size="lg"
                  placeholder="Enter Password"
                  type="password"
                  id="password-input"
                  name="password-input"
                  autoComplete="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </CCol>
            </CFormGroup>
          </CForm>
          <CCardHeader style={{ color: "#17a2b8" }}>
            {(Translation.t("COMPANY"), "Company")}
            &nbsp;&nbsp;
            <small>{(Translation.t("INFO"), "Info")}</small>
          </CCardHeader>
          <br />
          <CForm>
            <CFormGroup row>
              <CCol md="4">
                <CLabel htmlFor="select" sm="15" col="lg">
                  {(Translation.t("COMPANY"), "Company")}
                </CLabel>
              </CCol>
              <CCol xs="12" md="8">
                {!addCompany ? (
                  <Autocomplete
                    id="companies"
                    options={companies}
                    getOptionLabel={(company) => company.name}
                    style={{ width: 300 }}
                    onChange={(event, company) => {
                      setCompanyName(company.name);
                      setCompanyId(company._id);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Company"
                        variant="outlined"
                      />
                    )}
                  />
                ) : (
                  <CInput
                    size="lg"
                    type="company-name"
                    id="company-name-input"
                    name="company-name-input"
                    placeholder="Enter Company Name"
                    autoComplete="company-name"
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                )}
                <CCol>
                  <CLink
                    onClick={() => toggleAddCompany(!addCompany)}
                    style={{ marginLeft: "2rem" }}
                  >
                    {!addCompany
                      ? "Add New Company"
                      : "Select From Existing Companies"}
                  </CLink>
                </CCol>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="select" sm="15" col="lg">
                  {(Translation.t("STRENGTH"), "Strength")}
                </CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CSelect
                  size="lg"
                  custom
                  name="select"
                  id="select"
                  onChange={(e) => setStrength(e.target.value)}
                >
                  <option value="" label="Select Strength" />
                  <option value="1-5">1-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11-15">11-15</option>
                  <option value="15-20">15-20</option>
                  <option value="21-25">21-25</option>
                  <option value="26-30">26-30</option>
                  <option value="31-35">31-35</option>
                  <option value="36-40">36-40</option>
                  <option value="41-45">41-45</option>
                  <option value="46-50">46-50</option>
                </CSelect>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="4">
                <CLabel htmlFor="select" sm="15" col="lg">
                  {(Translation.t("YOUR_DESIGNATION"), "Your Designation")}
                </CLabel>
              </CCol>
              <CCol xs="12" md="8">
                <Autocomplete
                  id="designations"
                  options={designations}
                  getOptionLabel={(designation) => designation.name}
                  style={{ width: 300 }}
                  onChange={(event, designation) =>
                    setDesignation(designation._id)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Designation"
                      variant="outlined"
                    />
                  )}
                />
              </CCol>
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter style={{ textAlign: "center" }}>
          <CButton
            type="submit"
            color="warning"
            size="lg"
            style={{ width: "20rem" }}
            onClick={handleSubmit}
          >
            {(Translation.t("LAUNCH"), "Launch")}
          </CButton>
        </CCardFooter>
        <CLink onClick={() => history.push("/login")}>
          Already have an account? Log in
        </CLink>
        <br />
        <br />
      </CCard>
    </>
  );
};

export default Onboarding;
