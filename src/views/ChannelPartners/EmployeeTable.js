import React, { useEffect, useState } from "react";
import {
  // CCard,
  // CCardBody,
  // CCol,
  // CRow,
  CDataTable,
  CButton,
} from "@coreui/react";

// import Axios from "axios";
import { CIcon } from "@coreui/icons-react";
import Skeleton from "@material-ui/lab/Skeleton";

// import regimanData from "./RegimanData";
// import regimanData from "./RegimanData";

const employeeFields = ["name", "email", "phoneNumber", "update", "delete"];

const EmployeeTable = ({
  partnerCompany,
  reload,
  setReload,
  employeesLoading,
  setEmployeesLoading,
}) => {
  const [employeeData, setEmployeeData] = useState([]);
  // const [reload, setReload] = useState(false);

  // Delete Channel Partner Company
  const handleDeleteClick = async (email) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      companyName: partnerCompany,
      employeeEmail: email,
    });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include",
    };
    await fetch(
      "http://127.0.0.1:3002/api/channelpartners/employee",
      requestOptions
    )
      .then(() => {
        // setEmployeesLoading(true);
        setReload(!reload);
      })
      .catch((err) => console.log(err));
  };

  // Get Conatcts
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ partnerCompany: partnerCompany });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include",
    };
    fetch(
      `http://127.0.0.1:3002/api/channelpartners/my/employees`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setEmployeeData(result);
        console.log("Employees Data: ", result);
      })
      .then(() => setEmployeesLoading(false))
      .catch((err) => console.log(err));
  }, [reload, partnerCompany, setEmployeesLoading]);
  return (
    <div style={{ textAlign: "center" }}>
      {employeesLoading ? (
        <Skeleton variant="rect" width={1155} height={318} />
      ) : (
        <CDataTable
          items={employeeData}
          fields={employeeFields}
          itemsPerPage={5}
          border
          striped
          hover
          scopedSlots={{
            delete: (item) => (
              <td>
                <CButton
                  size="sm"
                  shape="pill"
                  onClick={() => handleDeleteClick(item.email)}
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
          // pagination
        />
      )}
    </div>
  );
};

export default EmployeeTable;
