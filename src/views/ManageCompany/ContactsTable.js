import React, { useState, useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CDropdown,
  CDropdownMenu,
  CDropdownToggle,
  CSwitch,
  CDropdownItem,
  CButton,
  CLabel,
  CSelect,
  CForm,
  CInput,
  CToast,
  CToastHeader,
  CToastBody,
  CToaster,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CFormGroup,
  CModalFooter,
  CLink,
} from "@coreui/react";

// import toastr from "toastr";
import { CIcon } from "@coreui/icons-react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
const userFields = [
  "name",
  "email",
  "contact",
  "region",
  "designation",
  "hasSeat",
  "resetPassword",
  "registrations",
];

const ContactsTable = () => {
  // Reload
  const [reload, setReload] = useState(false);
  const [toaster, setToaster] = useState(null);
  const [addUserModal, toggleAddUserModal] = useState(false);

  //Search
  const [searchTerm, setSearchTerm] = useState(null);

  const handleCheckedChange = (c, name) => {
    c === true
      ? setToaster(
          <CToaster position="top-center">
            <CToast show={true}>
              <CToastHeader
                style={{ backgroundColor: "#2eb85c", color: "#fff" }}
              >
                Preferences Updated
              </CToastHeader>
              <CToastBody>Seat has been allotted to {name}</CToastBody>
            </CToast>
          </CToaster>
        )
      : setToaster(
          <CToaster position="top-center">
            <CToast show={true}>
              <CToastHeader
                style={{ backgroundColor: "#e55353", color: "#fff" }}
              >
                Preferences Updated
              </CToastHeader>
              <CToastBody>Seat has been withholden from {name}</CToastBody>
            </CToast>
          </CToaster>
        );
    setTimeout(() => {
      setToaster(null);
    }, 3000);
  };
  // Users Table
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userRegion, setUserRegion] = useState("");
  const [userRegions, setUserRegions] = useState("");
  const [userBranch, setUserBranch] = useState("");
  const [userDesignation, setUserDesignation] = useState("");
  const [userDesignations, setUserDesignations] = useState("");

  // Edit
  const [editId, setEditId] = useState(false);
  const [editDesignation, toggleEditDesignation] = useState(false);
  const [editRegion, toggleEditRegion] = useState(false);
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
      credentials: "include",
    };

    fetch(`http://127.0.0.1:3002/api/user/${editId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .then(() => setReload(!reload))
      .then(() => {
        toggleEditDesignation(!editDesignation);
        setEditId(null);
      })
      .then(() => setReload(!reload))
      .catch((error) => console.log("error", error));
  };
  // const [editRegions, toggleEditRegions] = useState(false);
  // const [loadRegions, toggleLoadRegions] = useState(true);
  const handleUpdateRegionClick = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ region: userRegion });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include",
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

  /// Get Designations
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

  // Get Users
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
      credentials: "include",
    };

    fetch("http://127.0.0.1:3002/api/user/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("Users", result);
        setUsers(result);
      })
      .catch((err) => console.log(err));
  }, [reload]);

  //Search
  const handleSearchClick = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      type: "text",
      value: searchTerm,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include",
    };

    await fetch(`http://127.0.0.1:3002/api/user/search`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  // Add User
  const handleAddUserClick = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      user: {
        name: userName,
        email: userEmail,
        phone: userPhone,
        region: userRegions,
        branch: userBranch,
        designation: userDesignation,
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include",
    };

    await fetch(`http://127.0.0.1:3002/api/user/${userType}`, requestOptions)
      .then((response) => response.json())
      .then(() => setReload(!reload))
      .then(() => toggleAddUserModal(!addUserModal))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      {toaster}
      <CCard style={{ marginTop: "2rem" }}>
        <CCardBody style={{ textAlign: "center" }}>
          <CRow>
            <CForm inline>
              <CButton
                color="warning"
                onClick={() => toggleAddUserModal(!addUserModal)}
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
                <CInput
                  className="mr-sm-2"
                  placeholder="Search"
                  size="sm"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <CButton
                  color="light"
                  className="my-2 my-sm-0"
                  type="submit"
                  onClick={() => handleSearchClick()}
                >
                  Search
                </CButton>
              </CCol>
            </CForm>
            <CModal
              show={addUserModal}
              onClose={() => toggleAddUserModal(!addUserModal)}
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle>
                  ADD&nbsp;&nbsp;
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
                        User Type
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CSelect
                        size="lg"
                        custom
                        id="user-type-input"
                        name="user-type-input"
                        onChange={(e) => setUserType(e.target.value)}
                      >
                        <option value="" label="Select User Type" />
                        <option value="seat">Seat</option>
                        <option value="nonseat">Non-Seat</option>
                      </CSelect>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input" sm="15" col="lg">
                        Name
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        size="lg"
                        id="name-input"
                        name="name-input"
                        placeholder="Enter Name"
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="email-input" sm="15" col="lg">
                        Email
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        size="lg"
                        id="email-input"
                        name="email-input"
                        placeholder="Enter Email "
                        onChange={(e) => setUserEmail(e.target.value)}
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="email-input" sm="15" col="lg">
                        Phone Number
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        size="lg"
                        id="phone-input"
                        name="phone-input"
                        placeholder="Enter Phone Number"
                        onChange={(e) => setUserPhone(e.target.value)}
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="email-input" sm="15" col="lg">
                        Region
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        size="lg"
                        id="region-input"
                        name="region-input"
                        placeholder="Enter Region "
                        onChange={(e) => setUserRegions(e.target.value)}
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="email-input" sm="15" col="lg">
                        Branch
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        size="lg"
                        id="branch-input"
                        name="branch-input"
                        placeholder="Enter Branch "
                        onChange={(e) => setUserBranch(e.target.value)}
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="email-input" sm="15" col="lg">
                        Designation
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
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
                      </>
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={() => handleAddUserClick()}>
                  Save
                </CButton>
                <CButton
                  color="secondary"
                  onClick={() => toggleAddUserModal(!addUserModal)}
                >
                  Cancel
                </CButton>
              </CModalFooter>
            </CModal>
          </CRow>
          <br />
          <br />
          <br />
          <CRow>
            <CCol>
              <CDataTable
                items={users}
                fields={userFields}
                itemsPerPage={5}
                // pagination
                border
                striped
                hover
                outlined
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
                  region: (item) => (
                    <td>
                      <small>
                        {editId === item.id && editRegion ? (
                          <>
                            <Autocomplete
                              id="regions"
                              options={userRegions}
                              getOptionLabel={(userRegion) => userRegion.name}
                              onChange={(event, userRegion) =>
                                setUserRegion(userRegion._id)
                              }
                              style={{ width: 300 }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="Select Regions"
                                  variant="outlined"
                                />
                              )}
                            />
                            <br />
                            <CLink onClick={() => handleUpdateRegionClick()}>
                              Save
                            </CLink>
                            &nbsp;&nbsp;&nbsp;
                            <CLink
                              onClick={() => {
                                toggleEditRegion(!editRegion);
                                setEditId(null);
                              }}
                            >
                              Cancel
                            </CLink>
                          </>
                        ) : (
                          <>
                            {item.region}
                            <br />
                            <CLink
                              onClick={() => {
                                toggleEditRegion(!editRegion);
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
                  hasSeat: (item) => (
                    <td>
                      {item.invited ? (
                        <CSwitch
                          className={"mx-1"}
                          shape={"pill"}
                          color={"success"}
                          checked
                          onCheckedChange={(c) =>
                            handleCheckedChange(c, item.name)
                          }
                        />
                      ) : (
                        <CButton shape="square" color="warning">
                          Invite
                        </CButton>
                      )}
                    </td>
                  ),
                  resetPassword: (item) => (
                    <td>
                      <CButton color="danger" shape="pill">
                        Reset
                      </CButton>
                    </td>
                  ),
                }}
              />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default ContactsTable;

const designations = [
  { name: "Chief Executive Officer" },
  { name: "Chief Operating Officer" },
  { name: "Chief Financial Officer" },
];
