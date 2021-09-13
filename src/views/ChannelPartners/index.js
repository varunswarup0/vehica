import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CBadge,
} from "@coreui/react";
import CompanyTable from "./CompanyTable";

const ChannelPartners = () => {
  const history = useHistory();
  const [manuNumber, setManuNumber] = useState(0);
  // const [distiNumber, setDistiNumber] = useState(0);
  // const [repNumber, setRepNumber] = useState(0);

  return (
    <CCard style={{ marginTop: "2rem" }}>
      <CCardBody style={{ textAlign: "center" }}>
        <CTabs activeTab="FOR_MANUFACTURER">
          <CNav variant="tabs">
            <CNavItem>
              <CNavLink
                data-tab="FOR_MANUFACTURER"
                onClick={() => history.push("/channelPartners/manufacturer")}
              >
                <CBadge className="mr-1" color="info">
                  {manuNumber}
                </CBadge>
                &nbsp;&nbsp;Manufacturer
              </CNavLink>
            </CNavItem>
            {/* <CNavItem>
              <CNavLink
                data-tab="FOR_DISTRIBTOR"
                onClick={() => history.push("/channelPartners/distribtor")}
              >
                <CBadge className="mr-1" color="info">
                  {distiNumber}
                </CBadge>
                &nbsp;&nbsp;{(Translation.t("DISTRIBUTOR"), "Distributor")}
              </CNavLink>
            </CNavItem> */}
            {/* <CNavItem>
              <CNavLink
                data-tab="FOR_SALES_REPRESNTATIVE"
                onClick={() =>
                  history.push("/channelPartners/salesRepresntative")
                }
              >
                <CBadge className="mr-1" color="info">
                  {repNumber}
                </CBadge>
                &nbsp;&nbsp;Sales Represntative
              </CNavLink>
            </CNavItem> */}
          </CNav>
          <CTabContent>
            <CTabPane data-tab="FOR_MANUFACTURER">
              <CompanyTable id={0} setManuNumber={setManuNumber} />
            </CTabPane>
            {/* <CTabPane data-tab="FOR_DISTRIBTOR">
              <CompanyTable id={1} setDistiNumber={setDistiNumber} />
            </CTabPane>
            <CTabPane data-tab="FOR_SALES_REPRESNTATIVE">
              <CompanyTable id={2} setRepNumber={setRepNumber} />
            </CTabPane> */}
          </CTabContent>
        </CTabs>
      </CCardBody>
    </CCard>
  );
};

export default ChannelPartners;
