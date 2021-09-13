import React, { useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
  CCardHeader,
  CRow,
  CDataTable,
  CLink,
} from "@coreui/react";

// import { billableDemandData } from "./InvoiceData";
import Translation from "../../app/Language/Translation.js";
import CardSetupFormSettings from "../../stripe/CardSetupFormSettings";
// import axios from "axios";

const seatFields = ["email", "date", "region", "designation"];
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const SettingsForm = () => {
  // const [Id, setId] = useState(null);
  const [show, setShow] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [billingName, setBillingName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [zip, setZip] = useState("");
  const [cardsOnAccount, setCardsOnAccount] = useState("......7890");
  const [followUpFrequency, setFollowUpFrequency] = useState("1st");
  const [followUpStartsObjectArray, setFollowUpStarts] = useState([]);
  const [regionsObjectArray, setRegions] = useState([]);
  const [upload, setUpload] = useState("");
  const [designations, setDesignations] = useState([]);

  // Update Company Settings
  const handleSettingsSubmit = async () => {
    var followUpStartsStringArray = followUpStartsObjectArray
      ? followUpStartsObjectArray.map((item) => item["value"])
      : [];
    var followUpStartsIntArray = followUpStartsStringArray.map((x) =>
      parseInt(x)
    );

    var regionsStringArray = regionsObjectArray
      ? regionsObjectArray.map((item) => item["name"])
      : [];

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      companyName: companyName.toLowerCase(),
      billingName: billingName.toLowerCase(),
      followUpStarts: followUpStartsIntArray,
      followUpFrequency: followUpFrequency,
      regions: regionsStringArray,
      address: {
        state: state.toLowerCase(),
        country: country.toLowerCase(),
        zip: zip.toLowerCase(),
        fullAddress: fullAddress.toLowerCase(),
      },
    });
    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include",
    };
    fetch(`http://127.0.0.1:3002/api/company`, requestOptions)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // Add Credit Card Submit
  const handleCreditCardSubmit = (e) => {
    e.preventDefault();
  };

  // Capitalize
  const capitalize = (str, lower = false) =>
    (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
      match.toUpperCase()
    );

  // Get Company Settings
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
      credentials: "include",
    };

    fetch("http://127.0.0.1:3002/api/company/settings", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCompanyName(capitalize(result.name));
        setBillingName(capitalize(result.billingName));
        setFollowUpStarts(result.followUpStarts);
        setFollowUpFrequency(result.followUpFrequency);
        // setRegions(result.regions);
        setState(capitalize(result.address.state));
        setCountry(capitalize(result.address.country));
        setZip(capitalize(result.address.zip));
        setFullAddress(capitalize(result.address.fullAddress));
        console.log("Company Settings: ", result);
        console.log("result.regions: ", result.regions);
        setRegions(result.regions.map((name) => ({ name })));
      })
      .catch((err) => console.log(err));
  }, []);

  const [userDesignation, setUserDesignation] = useState("");
  const [userRegion, setUserRegion] = useState("");

  // Reload
  const [reload, setReload] = useState(false);
  // Edit
  const [editId, setEditId] = useState(false);
  const [editDesignation, toggleEditDesignation] = useState(false);
  // const [loadDesignation, toggleLoadDesignation] = useState(true);
  const handleUpdateDesignationClick = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ designation: userDesignation });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`http://127.0.0.1:3002/api/user/${editId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log("handleUpdateDesignationClick", result))
      .then(() => {
        setEditId(null);
        toggleEditDesignation(!editDesignation);
        setReload(!reload);
      })
      .catch((error) => console.log("error", error));
  };
  // const [editRegions, toggleEditRegions] = useState(false);
  // const [loadRegions, toggleLoadRegions] = useState(true);

  const [editRegion, toggleEditRegion] = useState(false);
  const handleUpdateRegionClick = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ region: userRegion });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`http://127.0.0.1:3002/api/user/${editId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .then(() => setReload(!reload))
      .then(() => {
        toggleEditRegion(!editRegion);
        setEditId(null);
      })
      .then(() => setReload(!reload))
      .catch((error) => console.log("error", error));
  };

  // Get Designations for Dropdown
  const [userDesignations, setUserDesignations] = useState([]);
  useEffect(() => {
    // if(loadDesignation) return;
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      credentials: "include",
    };
    fetch("http://127.0.0.1:3002/api/public/designations", requestOptions)
      .then((response) => response.json())
      .then((result) => setUserDesignations(result))
      .catch((error) => console.log("error", error));
  }, []);

  // Get Regions for Dropdown
  const [userRegions, setUserRegions] = useState([]);
  useEffect(() => {
    // if(loadDesignation) return;

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      credentials: "include",
    };
    fetch("http://127.0.0.1:3002/api/company/regions", requestOptions)
      .then((response) => response.json())
      .then((result) => setUserRegions(result))
      .catch((error) => console.log("error", error));
  }, []);

  // Get Seat Users
  const [seatUsers, setSeatUsers] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      credentials: "include",
    };

    fetch("http://127.0.0.1:3002/api/seats", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setSeatUsers(result);
        console.log("Seat Users", result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <CCard style={{ margin: "0.5rem", placeItems: "center" }}>
        <CCardHeader
          className="h4"
          style={{
            color: "#17a2b8",
            display: "inline",
            marginTop: "2rem",
            fontSize: "xxx-large",
          }}
        >
          {(Translation.t("SETTINGS"), "Settings")}
        </CCardHeader>
        <CCardBody>
          <CForm
            action=""
            method="post"
            encType="multipart/form-data"
            className="form-horizontal"
          >
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input" sm="15">
                  {(Translation.t("COMPANY_NAME"), "Company Name")}
                </CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  id="text-input"
                  name="text-input"
                  type="text"
                  autoFocus={true}
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="email-input" sm="15">
                  {(Translation.t("BILLING_NAME"), "Billing Name")}
                </CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  id="text-input"
                  name="text-input"
                  type="text"
                  required
                  value={billingName}
                  onChange={(e) => setBillingName(e.target.value)}
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="password" sm="15">
                  {(Translation.t("COUNTRY"), "Country")}
                </CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  id="text-input"
                  name="text-input"
                  type="text"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </CCol>
            </CFormGroup>
          </CForm>
          <CForm>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="select" sm="15">
                  {(Translation.t("STATE"), "State")}
                </CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  id="text-input"
                  name="text-input"
                  type="text"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </CCol>
              <CCol xs="12" md="9"></CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel sm="15">{(Translation.t("ADDRESS"), "Address")}</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  id="text-input"
                  name="text-input"
                  type="text"
                  required
                  value={fullAddress}
                  onChange={(e) => setFullAddress(e.target.value)}
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel sm="15">{(Translation.t("ZIP"), "ZIP")}</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  id="text-input"
                  name="text-input"
                  type="text"
                  required
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel>
                  {(Translation.t("CARDS_ON_ACCOUNT"), "Cards On Account")}
                </CLabel>
              </CCol>
              <CCol md="5">
                <CInput
                  id="text-input"
                  name="text-input"
                  type="text"
                  required
                  value={zip}
                  onChange={(e) => setCardsOnAccount(e.target.value)}
                />
              </CCol>
              <CCol md="2">
                <CInput
                  id="text-input"
                  name="text-input"
                  type="text"
                  required
                  value={zip}
                  onChange={(e) => setCardsOnAccount(e.target.value)}
                />
              </CCol>
              <CCol md="2">
                <CButton
                  type="submit"
                  color="info"
                  onClick={handleCreditCardSubmit}
                >
                  {(Translation.t("UPDATE"), "Update")}
                </CButton>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel></CLabel>
              </CCol>
              <CCol md="5">
                <CInput
                  id="text-input"
                  name="text-input"
                  type="text"
                  required
                  value={zip}
                  onChange={(e) => setCardsOnAccount(e.target.value)}
                />
              </CCol>
              <CCol md="2">
                <CInput
                  id="text-input"
                  name="text-input"
                  type="text"
                  required
                  value={zip}
                  onChange={(e) => setCardsOnAccount(e.target.value)}
                />
              </CCol>
              <CCol md="2">
                <CButton
                  type="submit"
                  color="info"
                  onClick={handleCreditCardSubmit}
                >
                  {(Translation.t("UPDATE"), "Update")}
                </CButton>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel></CLabel>
              </CCol>
              <CCol md="9">
                <CButton color="dark" onClick={() => setShow(!show)}>
                  {!show ? "ADD CARD" : "SAVE"}
                </CButton>
                {show ? <CardSetupFormSettings /> : null}
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="4"></CCol>
              <CCol md="8">
                <div className="h6">
                  {
                    (Translation.t("TOTAL_SEATS_9_100_SEAT"),
                    "Total Seats: 9 @100$/seat")
                  }
                </div>
                <div className="h6">
                  {
                    (Translation.t("TOTAL_CHANNEL_PARTNERS_20_5_CP"),
                    "Total Channel Partners: 20 @5$/CP")
                  }
                </div>
                <div className="h6">
                  {
                    (Translation.t("UNLIMITED_REGISTRATION_FORM_FREE"),
                    "Unlimited Registration Form: Free")
                  }
                </div>
                <div className="h6">
                  {
                    (Translation.t("APX_MONTHLY_BILL_1000_MONTH"),
                    "Apx. Monthly Bill: 1000$/month")
                  }
                </div>
                <br />
                <CButton color="success">
                  {(Translation.t("VIEW_INVOICES"), "VIEW_INVOICES")}
                </CButton>
              </CCol>
            </CFormGroup>
          </CForm>
          <br />
          <br />
          <CCardHeader
            style={{
              color: "#17a2b8",
              fontSize: "xx-large",
            }}
          >
            {(Translation.t("BILLABLE"), "Billable")}
            &nbsp;&nbsp;
            <small>{(Translation.t("SEATS"), "Seats")}</small>
          </CCardHeader>
          <CRow>
            <CCol>
              <CDataTable
                items={seatUsers}
                fields={seatFields}
                itemsPerPage={5}
                striped
                border
                scopedSlots={{
                  designation: (item) => (
                    <td>
                      <small>
                        {editId === item._id && editDesignation ? (
                          <>
                            <Autocomplete
                              id="designations"
                              options={userDesignations}
                              getOptionLabel={(userDesignation) =>
                                userDesignation.name
                              }
                              onChange={(event, userDesignation) =>
                                setUserDesignation(userDesignation._id)
                              }
                              style={{ width: 300 }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="Select Designation"
                                  variant="outlined"
                                />
                              )}
                            />
                            <br />
                            <CLink
                              onClick={() => handleUpdateDesignationClick()}
                            >
                              Save
                            </CLink>
                            &nbsp;&nbsp;&nbsp;
                            <CLink
                              onClick={() => {
                                toggleEditDesignation(!editDesignation);
                                setEditId(null);
                              }}
                            >
                              Cancel
                            </CLink>
                          </>
                        ) : (
                          <>
                            {item.designation}
                            <br />
                            <CLink
                              onClick={() => {
                                toggleEditDesignation(!editDesignation);
                                setEditId(item._id);
                              }}
                            >
                              Edit
                            </CLink>
                          </>
                        )}
                      </small>
                    </td>
                  ),
                }}
              />
            </CCol>
          </CRow>
          <br />
          <br />
          <CCardHeader style={{ color: "#17a2b8", fontSize: "xx-large" }}>
            {(Translation.t("REGIONS"), "Regions")}
          </CCardHeader>
          <br />
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            limitTags={2}
            options={regionsObjectArray}
            disableCloseOnSelect
            getOptionLabel={(option) => option.name.toUpperCase()}
            renderOption={(option, { selected }) => (
              <>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.name.toUpperCase()}
              </>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Regions"
                placeholder="Select Regions"
              />
            )}
          />
          <br />
          <br />
          <CRow>
            <CCol md="6">
              <CCardHeader style={{ color: "#17a2b8", fontSize: "large" }}>
                {(Translation.t("FOLLOW_UP"), "Follow Up")}
                &nbsp;&nbsp;
                <small>{(Translation.t("SCHEDULE"), "Schedule")}</small>
              </CCardHeader>
              <CFormGroup
                row
                style={{
                  fontSize: "1.1rem",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                <CCol
                  md="12"
                  style={{
                    textAlign: "left",
                  }}
                >
                  <CFormGroup row>
                    <CCol xs="12" md="9">
                      <CSelect
                        size="lg"
                        custom
                        name="select"
                        id="select"
                        onChange={(e) => setFollowUpStarts(e.target.value)}
                      >
                        <option value="" label="Select Schedule" />
                        <option value="Weekly">Weekly</option>
                        <option value="Bimonthly">Bimonthly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Biweekly">Biweekly</option>
                      </CSelect>
                    </CCol>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
            </CCol>
          </CRow>
          {/* <CCard> */}
          <CRow>
            <CCol md="6">
              <CCardHeader style={{ color: "#17a2b8", fontSize: "large" }}>
                Start&nbsp;&nbsp;
                <small>Frequency</small>
              </CCardHeader>
              <CCardBody>
                <Autocomplete
                  multiple
                  id="checkboxes-tags-demo"
                  limitTags={2}
                  options={frequencies}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.value}
                  onChange={(event, frequency) => setFollowUpStarts(frequency)}
                  renderOption={(option, { selected }) => (
                    <>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.value}
                    </>
                  )}
                  style={{ width: 500 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Frequency"
                      placeholder="Select Frequency"
                    />
                  )}
                />
              </CCardBody>
            </CCol>
          </CRow>
          <br />

          <CRow>
            <CCol md="6">
              <CCardHeader style={{ color: "#17a2b8", fontSize: "xx-large" }}>
                Logo&nbsp;&nbsp;
                <small>Upload</small>
              </CCardHeader>
              <br />
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupFileAddon01">
                    Upload
                  </span>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="fileform"
                    aria-describedby="inputGroupFileAddon01"
                    onChange={(e) => setUpload(e.target.files[0])}
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="inputGroupFile01"
                  >
                    Choose file
                  </label>
                </div>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
        <br />
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <CButton
            type="submit"
            color="warning"
            size="lg"
            style={{
              // textAlign: "center",
              width: "20rem",
              padding: "1rem",
            }}
            onClick={() => handleSettingsSubmit()}
            block
          >
            <h3>SUBMIT</h3>
          </CButton>
        </div>
        <br />
        <br />
        <br />
      </CCard>
    </>
  );
};

export default SettingsForm;

const frequencies = [
  { value: "1st" },
  { value: "5th" },
  { value: "10th" },
  { value: "15th" },
  { value: "20th" },
  { value: "25th" },
];
