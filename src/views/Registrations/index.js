import React from "react";
import { useHistory } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CButton,
  CDataTable,
  CRow,
  CForm,
  CCol,
  CLabel,
  CSelect,
  CInput,
} from "@coreui/react";
import registrationsData from "./RegistrationsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

const Registrations = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const asideShow = useSelector((state) => state.asideShow);
  // const showRejectForm = useSelector((state) => state.showRejectForm);
  // const showPendingForm = useSelector((state) => state.showPendingForm);

  const handleViewFormClick = (emailId) => {
    history.push({
      pathname: "/form",
      state: emailId,
    });
  };
  const handleActionFormClick = (id, action) => {
    dispatch({
      type: "action",
      formId: id,
      showForm: action,
      showPendingForm: true,
      asideShow: !asideShow,
    });
  };

  const fields = [
    { key: "channelPartner", _style: { width: "15%" } },
    { key: "emailId", _style: { width: "15%" } },
    "clientName",
    "date",
    "viewRegistration",
    { key: "action", _style: { width: "15%" } },
  ];

  const getBadge = (action) => {
    switch (action) {
      case "PENDING":
        return "warning";
      case "REJECT":
        return "danger";
      default:
        return "warning";
    }
  };

  return (
    <CCard style={{ marginTop: "2rem" }}>
      <CCardBody style={{ textAlign: "center" }}>
        <CRow>
          <CForm inline>
            <CCol>
              <CLabel htmlFor="select">Filter</CLabel>
            </CCol>
            <CCol>
              <CSelect custom name="select" id="select">
                <option value="0">Seat</option>
                <option value="1">No Seat</option>
                <option value="2">All Seats</option>
              </CSelect>
            </CCol>
          </CForm>
          <CForm inline>
            <CCol>
              <CInput className="mr-sm-2" placeholder="Search" size="sm" />
              <CButton color="light" className="my-2 my-sm-0" type="submit">
                Search
              </CButton>
            </CCol>
          </CForm>
        </CRow>
        <br />
        <br />
        <br />
        <CRow>
          <CCol>
            <CDataTable
              items={registrationsData}
              fields={fields}
              itemsPerPage={5}
              hover
              // pagination
              border={true}
              striped
              scopedSlots={{
                action: (item) => (
                  <td>
                    <CButton
                      color={getBadge(item.action)}
                      onClick={() =>
                        handleActionFormClick(item.id, item.action)
                      }
                      shape="square"
                    >
                      <h6>{item.action ? item.action : "Pending"}</h6>
                    </CButton>
                  </td>
                ),
                viewRegistration: (item) => (
                  <td>
                    <CButton
                      // color={"primary"}
                      shape="pill"
                    >
                      <FontAwesomeIcon
                        icon={faSearch}
                        onClick={() => handleViewFormClick(item.channelPartner)}
                      />
                    </CButton>
                  </td>
                ),
              }}
            />
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default Registrations;
