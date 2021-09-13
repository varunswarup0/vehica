import React from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CButton,
} from "@coreui/react";

import branchData from "./BranchesData";
import { CIcon } from "@coreui/icons-react";

const invoiceFields = ["branchName", "address", "phone", "map"];
const InvoiceTable = () => {
  return (
    <CCard style={{ marginTop: "2rem" }}>
      <CCardBody style={{ textAlign: "center" }}>
        <CRow>
          <CCol>
            <CDataTable
              items={branchData}
              fields={invoiceFields}
              itemsPerPage={5}
              // pagination
              border
              striped
              hover
              outlined
              scopedSlots={{
                map: (item) => (
                  <td>
                    <CButton onClick="">
                      <CIcon name="cil-map" alt="" />
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

export default InvoiceTable;
