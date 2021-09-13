import React from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CBadge,
  CButton,
} from "@coreui/react";
import {
  faEye,
  // faDownload,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import invoiceData from "./InvoiceData";

const invoiceFields = [
  "invoiceNumber",
  "date",
  "status",
  "view", //icon
  "download", // PDF
];

const getBadge = (status) => {
  switch (status) {
    case "Paid":
      return "success";
    case "Unpaid":
      return "danger";
    default:
      return "primary";
  }
};

const InvoiceTable = () => {
  return (
    <CCard style={{ margin: "5rem" }}>
      <CRow>
        <CCol>
          <CCardBody style={{ textAlign: "center" }}>
            <CDataTable
              items={invoiceData}
              fields={invoiceFields}
              border={true}
              itemsPerPage={5}
              striped
              // style={{ border: "1px solid #d8dbe0" }}
              // pagination
              // bordered={{ border: "1px solid #d8dbe0" }}
              scopedSlots={{
                status: (item) => (
                  <td>
                    <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                  </td>
                ),
                view: () => (
                  <td>
                    <CButton shape="pill">
                      <FontAwesomeIcon icon={faEye} />
                    </CButton>
                  </td>
                ),
                download: () => {
                  return (
                    <td className="py-2">
                      <CButton shape="pill">
                        <FontAwesomeIcon icon={faFilePdf} />
                      </CButton>
                    </td>
                  );
                },
              }}
            />
          </CCardBody>
        </CCol>
      </CRow>
    </CCard>
  );
};

export default InvoiceTable;
