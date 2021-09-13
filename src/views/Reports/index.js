import React, { useState, useEffect } from "react";
import "./Reports.scoped.css";
import { manuProject, distiFeedback, repFeedback } from "./reportsData";
import Translation from "../../app/Language/Translation";
import {
  CCard,
  CCardBody,
  CRow,
  CForm,
  CLabel,
  CCol,
  CSelect,
  CInput,
  CButton,
  CInputGroupPrepend,
  CInputGroup,
  CCardHeader,
} from "@coreui/react";

import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { CIcon } from "@coreui/icons-react";
import { canUseDOM } from "@coreui/react/src/utils/helper";

import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const manuProjectStatusState = "PROTOTYPE";
const distiFeedbackStatusState = "PRE-PRODUCTION";
const repFeedbackStatusState = "DEAD - EOL";

const manufacturerProjectCommentState =
  "Whatever the manager wants to type here, do not keep history, it is not required, just let them type over as needed.";
const distiFeedbackCommentState =
  "Whatever the disti wants to type here, do not keep history, it is not required, just let them type over as needed.";
const repFeedbackCommentState =
  "Whatever the repo s/p wants to type here, do not keep history, it is not required, just let them type over as needed.";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Reports = (props) => {
  // const [manuFeedbackStatus, setManuFeedbackStatus] = useState(null);
  // const [manuFeedbackSMFQState, setManuFeedbackSMFQState] = useState(null);

  const [companyName, setCompanyName] = useState("");

  const [editManuComment, setEditManuComment] = useState(false);
  const [editRepoComment, setEditRepoComment] = useState(false);
  const [editDistiComment, setEditDistiComment] = useState(false);

  const [manuProjectStatus, setManuProjectStatus] = useState(
    props.status || manuProjectStatusState
  );
  const [distiFeedbackStatus, setDistiFeedbackStatus] = useState(
    props.status || distiFeedbackStatusState
  );
  const [repFeedbackStatus, setRepFeedbackStatus] = useState(
    props.status || repFeedbackStatusState
  );
  const [manufacturerProjectComment, setManufacturerProjectComment] = useState(
    props.comment || manufacturerProjectCommentState
  );
  const [distiFeedbackComment, setDistiFeedbackComment] = useState(
    props.feedbackComment || distiFeedbackCommentState
  );
  const [repFeedbackComment, setRepFeedbackComment] = useState(
    props.feedbackComment || repFeedbackCommentState
  );

  const handleClick = (status, forecast) => {
    // setManuFeedbackStatus(status);
    // setManuFeedbackSMFQState(forecast);
    return;
  };
  const print = (e) => {
    e.preventDefault();
    canUseDOM && window.print();
  };

  // const handleEditClick = () => {};

  // const handleApprovalClick = () => {
  //   setApproval(!approval);
  //   dispatch({
  //     type: "set",
  //     asideShow: !asideShow,
  //     payload: { type: "SET_COMMENTS", id: 0 },
  //   });
  // };

  // Filters
  const [projectStatusFilter, setProjectStatusFilter] = useState(null);
  const [projectRegionFilter, setProjectRegionFilter] = useState(null);
  const [
    projectManagerAssignedFilter,
    setProjectManagerAssignedFilter,
  ] = useState(null);
  const [
    projectChannelPartnerFilter,
    setProjectChannelPartnerFilter,
  ] = useState(null);
  const [projectClientFilter, setProjectClientFilter] = useState(null);

  useEffect(() => {
    // write query here
    const query = {
      type: "and",
      elements: [
        { type: "=", col: "status", values: "concept", cast: null },
        {
          type: "=",
          col: "manager_assigned",
          values: "volkswagengroup@example.com",
          cast: null,
        },
        { type: "=", col: "channel_partner", values: "whirpool", cast: null },
        {
          type: "=",
          col: "client",
          values: "nirogam india pvt ltd",
          cast: null,
        },
        {
          type: "or",
          elements: [
            { type: "=", col: "region", values: "new jersey", cast: null },
            { type: "=", col: "region", values: "georgia", cast: null },
          ],
        },
      ],
    };
  }, [
    projectStatusFilter,
    projectRegionFilter,
    projectManagerAssignedFilter,
    projectChannelPartnerFilter,
    projectClientFilter,
  ]);

  return (
    <div className="leftmenu">
      <CCard style={{ marginTop: "2rem" }}>
        <CCardHeader>
          {(Translation.t("MANUFACTURE_REPORT"), "Manufacture Report")}
          &nbsp;&nbsp;<strong>#90-98792</strong>
          <CButton
            className="mr-1 float-right"
            href=""
            tag="a"
            size="sm"
            color="secondary"
            onClick={print}
          >
            <FontAwesomeIcon icon={faFilePdf} />
            &nbsp;&nbsp; {(Translation.t("PRINT_AS_PDF"), "Print as PDF")}
          </CButton>
          <CButton
            className="mr-1 float-right"
            href=""
            tag="a"
            size="sm"
            color="info"
          >
            <CIcon name="cil-print" />
            &nbsp;&nbsp; {(Translation.t("PRINT_AS_EXCEL"), "Print as Excel")}
          </CButton>
        </CCardHeader>
        <CCardBody style={{ textAlign: "center" }}>
          <CRow>
            <CForm inline>
              <CCol>
                <CLabel htmlFor="select">
                  {(Translation.t("STATUS"), "Status")}
                </CLabel>
                <CSelect
                  custom
                  name="select"
                  id="select"
                  onChange={(e) => setProjectStatusFilter(e.target.value)}
                >
                  <option value="" label="Select" />
                  <option value="CONCEPT">
                    {(Translation.t("CONCEPT"), "CONCEPT")}
                  </option>
                  <option value="PROTOTYPE">
                    {(Translation.t("PROTOTYPE"), "PROTOTYPE")}
                  </option>
                  <option value="QUALIFICATION">
                    {(Translation.t("QUALIFICATION"), "QUALIFICATION")}
                  </option>
                  <option value="PRE-PRODUCTION">
                    {(Translation.t("PRE-PRODUCTION"), "PRE-PRODUCTION")}
                  </option>
                  <option value="PRODUCTION">
                    {(Translation.t("PRODUCTION"), "PRODUCTION")}
                  </option>
                  <option value="DEAD - EOL">
                    {(Translation.t("DEAD - EOL"), "DEAD - EOL")}
                  </option>
                  <option value="DEAD - LOST">
                    {(Translation.t("DEAD - LOST"), "DEAD - LOST")}
                  </option>
                  <option value="DEAD - DOA">
                    {(Translation.t("DEAD - DOA"), "DEAD - DOA")}
                  </option>
                </CSelect>
              </CCol>
              <CCol>
                <CLabel htmlFor="select">
                  {(Translation.t("REGIONS"), "Regions")}
                </CLabel>
                <Autocomplete
                  multiple
                  size="small"
                  id="checkboxes-tags-demo"
                  limitTags={2}
                  options={billingSeedsRegions}
                  onChange={(event, company) =>
                    setProjectRegionFilter(company.region)
                  }
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.name}
                  renderOption={(option, { selected }) => (
                    <>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 0 }}
                        checked={selected}
                      />
                      {option.name}
                    </>
                  )}
                  style={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      variant="outlined"
                      placeholder="Select"
                    />
                  )}
                />
              </CCol>
              <CCol>
                <CLabel htmlFor="select">
                  {(Translation.t("MANAGER_ASSIGNED"), "Manager Assigned")}
                </CLabel>
                <Autocomplete
                  id="managerAssigned"
                  size="small"
                  options={assignedTo}
                  getOptionLabel={(company) => company.name}
                  style={{ width: 150 }}
                  onChange={(event, company) =>
                    setProjectManagerAssignedFilter(company.name)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      placeholder="Select"
                      variant="outlined"
                    />
                  )}
                />
              </CCol>
              <CCol>
                <CLabel htmlFor="select">
                  {(Translation.t("CHANNEL_PARTNER"), "Channel Partner")}
                </CLabel>
                {/* </CCol>
            <CCol> */}
                <Autocomplete
                  id="channelPartner"
                  size="small"
                  options={companies}
                  getOptionLabel={(company) => company.name}
                  style={{ width: 150 }}
                  onChange={(event, company) =>
                    setProjectChannelPartnerFilter(company.name)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      // label="Select Company"
                      // label="Select"
                      placeholder="Select"
                      variant="outlined"
                    />
                  )}
                />
              </CCol>
              <CCol>
                <CLabel htmlFor="select">
                  {(Translation.t("CLIENT"), "Client")}
                </CLabel>
                <Autocomplete
                  id="checkboxes-tags-demo"
                  size="small"
                  limitTags={2}
                  options={clients}
                  disableCloseOnSelect
                  onChange={(event, company) =>
                    setProjectClientFilter(company.name)
                  }
                  getOptionLabel={(option) => option.name}
                  renderOption={(option, { selected }) => (
                    <>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 0 }}
                        checked={selected}
                      />
                      {option.name}
                    </>
                  )}
                  style={{ width: 150 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      size="small"
                      placeholder="Select"
                    />
                  )}
                />
              </CCol>
              <CCol>
                <CInputGroup>
                  <CInputGroupPrepend>
                    <CButton type="button" color="dark">
                      <CIcon name="cil-magnifying-glass" />
                    </CButton>
                  </CInputGroupPrepend>
                  <CInput
                    id="input1-group2"
                    name="input1-group2"
                    placeholder="Search"
                  />
                </CInputGroup>
              </CCol>
            </CForm>
          </CRow>
          <br />
          <br />
          <br />
          <table
            width="100%"
            cellPadding="7px"
            cellSpacing="0"
            style={{ padding: "3rem" }}
          >
            <tr valign="bottom" style={{ borderBottom: "2px solid #000000" }}>
              <th
                align="left"
                style={{
                  borderBottom: "2px solid #000000",
                  borderTop: "2px solid #000000",
                  borderLeft: "2px solid #000000",
                }}
              >
                <span className="customer">
                  {(Translation.t("END_CUSTOMER"), "END CUSTOMER")}
                </span>
                <br />
                <span className="project">
                  {(Translation.t("PROJECT_NAME"), "PROJECT NAME")}
                </span>
                <br />
                <span className="status">
                  {(Translation.t("STATUS"), "STATUS")}
                </span>
                <br />
                <span className="protodate">
                  {(Translation.t("PROTO_DATE"), "Proto Date")}
                </span>
                <br />
                <span style={{ color: "blue" }}>
                  {(Translation.t("MANU_EMAIL"), "Manu Email")}
                </span>
              </th>
              <th
                style={{
                  borderBottom: "2px solid #000000",
                  borderTop: "2px solid #000000",
                  align: "left",
                }}
              >
                {(Translation.t("PARTS"), "PARTS")}
              </th>
              <th
                style={{
                  borderBottom: "2px solid #000000",
                  borderTop: "2px solid #000000",
                  align: "center",
                }}
              >
                {(Translation.t("QTY_PER"), "Qty per")}
                <br />
                {(Translation.t("SYSTEM"), "System")}
              </th>
              <th
                style={{
                  borderBottom: "2px solid #000000",
                  borderTop: "2px solid #000000",
                  align: "center",
                }}
              >
                {(Translation.t("RESALE"), "Resale")}
              </th>
              <th
                style={{
                  borderBottom: "2px solid #000000",
                  borderTop: "2px solid #000000",
                  align: "center",
                }}
              >
                <span class="eau" />
                <span class="customer">{(Translation.t("EAU"), "EAU")}</span>
                <br />
                <span class="value">{(Translation.t("VALUE"), "Value")}</span>
              </th>
              <th
                style={{
                  borderBottom: "2px solid #000000",
                  borderTop: "2px solid #000000",
                  align: "center",
                }}
              >
                <span className="customer">
                  {(Translation.t("6_MONTH"), "6 Month")}
                  <br />
                  {(Translation.t("FORECAST"), "Forecast")}
                  <br />
                  {(Translation.t("QUANTITIES"), "Quantities")}
                </span>
                <br />
                {(Translation.t("VALUE"), "Value")}
              </th>
              <th
                style={{
                  borderBottom: "2px solid #000000",
                  borderTop: "2px solid #000000",
                  align: "left",
                }}
              >
                Manager
                <br />
                Comments
              </th>
              <th
                style={{
                  borderBottom: "2px solid #000000",
                  borderTop: "2px solid #000000",
                  align: "left",
                }}
                className="disti"
              >
                <span style={{ color: "blue" }}>
                  {(Translation.t("DISTI_EMAIL"), "Disti Email")}
                </span>
                <br />
                <span className="status">
                  {(Translation.t("STATUS"), "STATUS")}
                </span>
                <br />
                {(Translation.t("LAST_UPDATED"), "Last Updated")}
              </th>
              <th
                style={{
                  borderBottom: "2px solid #000000",
                  borderTop: "2px solid #000000",
                  align: "center",
                }}
                className="disti"
              >
                <span className="customer">
                  {(Translation.t("6_MONTH"), "6 Month")}
                  <br />
                  {(Translation.t("FORECAST"), "Forecast")}
                  <br />
                  {(Translation.t("QUANTITIES"), "Quantities")}
                </span>
                <br />
                {(Translation.t("VALUE"), "Value")}
              </th>
              <th
                style={{
                  borderBottom: "2px solid #000000",
                  borderTop: "2px solid #000000",
                  align: "left",
                }}
                className="disti"
              >
                {(Translation.t("DISTI_COMMENTS"), "Disti Comments")}
              </th>
              <th
                style={{
                  borderBottom: "2px solid #000000",
                  borderTop: "2px solid #000000",
                  align: "left",
                }}
                className="rep"
              >
                <span style={{ color: "blue" }}>
                  {(Translation.t("DISTI_EMAIL"), "Disti Email")}
                </span>
                <br />
                <span className="status">
                  {(Translation.t("STATUS"), "STATUS")}
                </span>
                <br />
                {(Translation.t("LAST_UPDATED"), "Last Updated")}
              </th>
              <th
                style={{
                  borderBottom: "2px solid #000000",
                  borderTop: "2px solid #000000",
                  align: "center",
                }}
                className="rep"
              >
                <span className="customer">
                  {(Translation.t("6_MONTH"), "6 Month")}
                  <br />
                  {(Translation.t("FORECAST"), "Forecast")}
                  <br />
                  {(Translation.t("QUANTITIES"), "Quantities")}
                </span>
                <br />
                {(Translation.t("VALUE"), "Value")}
              </th>
              <th
                style={{
                  borderBottom: "2px solid #000000",
                  borderTop: "2px solid #000000",
                  borderRight: "2px solid #000000",
                  align: "left",
                }}
                className="rep"
              >
                Rep Comments
              </th>
            </tr>

            <tr valign="top">
              <td
                style={{
                  borderBottom: "1px solid rgb(107, 107, 107)",
                  borderLeft: "1px solid rgb(107, 107, 107)",
                }}
              >
                <span className="customer">
                  {manuProject[0].EPP.endCustomer}
                </span>
                <br />
                <span className="project">
                  {manuProject[0].EPP.projectName}
                </span>
                <br />
                <select
                  name="STATUS"
                  id="STATUS"
                  style={{ fontSize: "12px", backgroundColor: "yellow" }}
                  onChange={(e) => setManuProjectStatus(e.target.value)}
                >
                  <option value={manuProjectStatus} selected disabled hidden>
                    {manuProjectStatus}
                  </option>
                  <option value="CONCEPT">
                    {(Translation.t("CONCEPT"), "CONCEPT")}
                  </option>
                  <option value="PROTOTYPE">
                    {(Translation.t("PROTOTYPE"), "PROTOTYPE")}
                  </option>
                  <option value="QUALIFICATION">
                    {(Translation.t("QUALIFICATION"), "QUALIFICATION")}
                  </option>
                  <option value="PRE-PRODUCTION">
                    {(Translation.t("PRE-PRODUCTION"), "PRE-PRODUCTION")}
                  </option>
                  <option value="PRODUCTION">
                    {(Translation.t("PRODUCTION"), "PRODUCTION")}
                  </option>
                  <option value="DEAD - EOL">
                    {(Translation.t("DEAD - EOL"), "DEAD - EOL")}
                  </option>
                  <option value="DEAD - LOST">
                    {(Translation.t("DEAD - LOST"), "DEAD - LOST")}
                  </option>
                  <option value="DEAD - DOA">
                    {(Translation.t("DEAD - DOA"), "DEAD - DOA")}
                  </option>
                </select>
                <br />
                {manuProject[0].EPP.protoDate}
                <br />
                <a href={`mailto:${manuProject[0].EPP.manuEmail}`}>
                  {manuProject[0].EPP.manuEmail}
                </a>
              </td>
              <td
                style={{
                  borderBottom: "1px solid rgb(107, 107, 107)",
                  align: "left",
                }}
              >
                {manuProject[0].parts.map((item) => {
                  return (
                    <>
                      {item.name}
                      <br />
                    </>
                  );
                })}
                etc. . . .
              </td>
              <td
                style={{
                  borderBottom: "1px solid rgb(107, 107, 107)",
                  align: "center",
                }}
              >
                {manuProject[0].parts.map((item) => {
                  return (
                    <>
                      {item.qtyPerSystem}
                      <br />
                    </>
                  );
                })}
              </td>
              <td
                style={{
                  borderBottom: "1px solid rgb(107, 107, 107)",
                  align: "center",
                }}
              >
                {manuProject[0].parts.map((item) => {
                  return (
                    <>
                      {item.resale}
                      <br />
                    </>
                  );
                })}
              </td>
              <td
                style={{
                  borderBottom: "1px solid rgb(107, 107, 107)",
                  align: "center",
                }}
              >
                <span className="customer">{manuProject[0].eauValue.eau}</span>
                <br />
                {manuProject[0].eauValue.value}
              </td>
              <td
                style={{
                  borderBottom: "1px solid rgb(107, 107, 107)",
                  align: "center",
                }}
              >
                <span className="customer">{manuProject[0].sMFQV.value}</span>
                <br />
                {manuProject[0].sMFQV.value}
              </td>
              <td
                style={{
                  borderBottom: "1px solid rgb(107, 107, 107)",
                  align: "left",
                  width: "200px",
                }}
              >
                {editManuComment ? (
                  <textarea
                    onChange={(e) => {
                      setManufacturerProjectComment(e.target.value);
                    }}
                    style={{ height: "-webkit-fill-available" }}
                  >
                    {manufacturerProjectComment}
                  </textarea>
                ) : (
                  manufacturerProjectComment
                )}

                <br />
                <small
                  style={{
                    fontSize: "0.8rem",
                    textDecoration: "underline",
                  }}
                  onClick={() => setEditManuComment(!editManuComment)}
                >
                  {!editManuComment ? "Edit" : "Save"}
                </small>
              </td>

              <td
                style={{
                  borderBottom: "1px solid rgb(107, 107, 107)",
                }}
                align="left"
                className="disti"
              >
                <a href={`mailto:${distiFeedback[0].DL.distiEmail}`}>
                  {distiFeedback[0].DL.distiEmail}
                </a>
                <br />
                <select
                  name="STATUS"
                  id="STATUS"
                  style={{ fontsize: "12px", backgroundColor: "yellow" }}
                  onChange={(e) => setDistiFeedbackStatus(e.target.value)}
                >
                  <option
                    value={{ distiFeedbackStatus }}
                    selected
                    disabled
                    hidden
                  >
                    {distiFeedbackStatus}
                  </option>
                  <option value="CONCEPT">
                    {(Translation.t("CONCEPT"), "CONCEPT")}
                  </option>
                  <option value="PROTOTYPE">
                    {(Translation.t("PROTOTYPE"), "PROTOTYPE")}
                  </option>
                  <option value="QUALIFICATION">
                    {(Translation.t("QUALIFICATION"), "QUALIFICATION")}
                  </option>
                  <option value="PRE-PRODUCTION">
                    {(Translation.t("PRE-PRODUCTION"), "PRE-PRODUCTION")}
                  </option>
                  <option value="PRODUCTION">
                    {(Translation.t("PRODUCTION"), "PRODUCTION")}
                  </option>
                  <option value="DEAD - EOL">
                    {(Translation.t("DEAD - EOL"), "DEAD - EOL")}
                  </option>
                  <option value="DEAD - LOST">
                    {(Translation.t("DEAD - LOST"), "DEAD - LOST")}
                  </option>
                  <option value="DEAD - DOA">
                    {(Translation.t("DEAD - DOA"), "DEAD - DOA")}
                  </option>
                </select>
                <br />
                {distiFeedback[0].DL.lastUpdated}
                <br />
                <input
                  type="button"
                  value=" ROLL "
                  onClick={handleClick(
                    distiFeedbackStatus,
                    distiFeedback[0].sMFQV.sMFQ
                  )}
                />
              </td>
              <td
                style={{
                  borderBottom: "1px solid rgb(107, 107, 107)",
                  align: "center",
                }}
                className="disti"
              >
                <span className="customer">{distiFeedback[0].sMFQV.sMFQ}</span>
                <br />
                {distiFeedback[0].sMFQV.value}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #6b6b6b",
                  // borderRight: "1px solid #6b6b6b",
                  align: "left",
                  width: "200px",
                }}
                className="disti"
              >
                {editDistiComment ? (
                  <textarea
                    onChange={(e) => {
                      setDistiFeedbackComment(e.target.value);
                    }}
                    style={{ height: "-webkit-fill-available" }}
                  >
                    {distiFeedbackComment}
                  </textarea>
                ) : (
                  distiFeedbackComment
                )}
                <br />
                <small
                  style={{
                    fontSize: "0.8rem",
                    textDecoration: "underline",
                  }}
                  onClick={() => setEditDistiComment(!editDistiComment)}
                >
                  {!editDistiComment ? "Edit" : "Save"}
                </small>
              </td>
              <td
                style={{
                  borderBottom: "1px solid rgb(107, 107, 107)",
                  align: "left",
                }}
                className="rep"
              >
                <a href={`mailto:${repFeedback[0].RL.repEmail}`}>
                  {repFeedback[0].RL.repEmail}
                </a>
                <br />
                <select
                  name="STATUS"
                  id="STATUS"
                  style={{ fontSize: "12px", backgroundColor: "yellow" }}
                  onChange={(e) => setRepFeedbackStatus(e.target.value)}
                >
                  <option value={repFeedbackStatus} selected disabled hidden>
                    {repFeedbackStatus}
                  </option>
                  <option value="CONCEPT">
                    {(Translation.t("CONCEPT"), "CONCEPT")}
                  </option>
                  <option value="PROTOTYPE">
                    {(Translation.t("PROTOTYPE"), "PROTOTYPE")}
                  </option>
                  <option value="QUALIFICATION">
                    {(Translation.t("QUALIFICATION"), "QUALIFICATION")}
                  </option>
                  <option value="PRE-PRODUCTION">
                    {(Translation.t("PRE-PRODUCTION"), "PRE-PRODUCTION")}
                  </option>
                  <option value="PRODUCTION">
                    {(Translation.t("PRODUCTION"), "PRODUCTION")}
                  </option>
                  <option value="DEAD - EOL">
                    {(Translation.t("DEAD - EOL"), "DEAD - EOL")}
                  </option>
                  <option value="DEAD - LOST">
                    {(Translation.t("DEAD - LOST"), "DEAD - LOST")}
                  </option>
                  <option value="DEAD - DOA">
                    {(Translation.t("DEAD - DOA"), "DEAD - DOA")}
                  </option>
                </select>
                <br />
                {repFeedback[0].RL.lastUpdated}
                <br />
                <input
                  type="button"
                  value=" ROLL "
                  onClick={handleClick(
                    repFeedbackStatus,
                    repFeedback[0].sMFQV.sMFQ
                  )}
                />
              </td>
              <td
                style={{
                  borderBottom: "1px solid rgb(107, 107, 107)",
                }}
                align="center"
                className="rep"
              >
                <span className="customer">{repFeedback[0].sMFQV.sMFQ}</span>
                <br />
                {repFeedback[0].sMFQV.value}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #6b6b6b",
                  borderRight: "1px solid #6b6b6b",
                  align: "left",
                  width: "200px",
                  backgroundColor: "#efefef",
                }}
                className="repo"
              >
                {editRepoComment ? (
                  <textarea
                    onChange={(e) => {
                      setRepFeedbackComment(e.target.value);
                    }}
                    style={{ height: "-webkit-fill-available" }}
                  >
                    {repFeedbackComment}
                  </textarea>
                ) : (
                  repFeedbackComment
                )}
                <br />
                <small
                  style={{
                    fontSize: "0.8rem",
                    textDecoration: "underline",
                  }}
                  onClick={() => setEditRepoComment(!editRepoComment)}
                >
                  {!editRepoComment ? "Edit" : "Save"}
                </small>
              </td>
            </tr>
          </table>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default Reports;

// billingSeeds Regions
const billingSeedsRegions = [
  { name: "New Jersey" },
  { name: "Georgia" },
  { name: "Massachusetts" },
  { name: "South Carolina" },
  { name: "New Hampshire" },
];
// assignedTo
const assignedTo = [
  { name: "volkswagengroup@example.com" },
  { name: "toyotagroup@example.com" },
  { name: "apple@example.com" },
  { name: "samsungelectronics@example.com" },
  { name: "daimler@example.com" },
];
// Clients
const clients = [
  { name: "Nirogam India Pvt Ltd" },
  { name: "Toreto Retail Pvt Ltd" },
  { name: "Prakria Marketing Services Pvt Ltd" },
  { name: "Life Circle Health Services Pvt Ltd" },
  { name: "Finetechww Global India Pvt Ltd" },
];

// companies
const companies = [
  { _id: "0", name: "Kreator 3d" },
  { _id: "1", name: "LG" },
  { _id: "2", name: "Whirpool" },
  { _id: "3", name: "ACIS" },
];
