import React from "react";
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs,
} from "@coreui/react";
import SettingsForm from "./SettingsForm";
import InvoiceTable from "./InvoiceTable";
import Translation from "../../app/Language/Translation";

const Settings = () => {
  return (
    <>
      <CTabs activeTab="SETTINGS">
        <CNav variant="tabs">
          <CNavItem>
            <CNavLink data-tab="SETTINGS" forid="0">
              {(Translation.t("SETTINGS"), "Settings")}
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink data-tab="INVOICES" forid="1">
              {(Translation.t("INVOICES"), "Invoices")}
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane data-tab="SETTINGS">
            <SettingsForm />
          </CTabPane>
          <CTabPane data-tab="INVOICES">
            <InvoiceTable />
          </CTabPane>
        </CTabContent>
      </CTabs>
    </>
  );
};

export default Settings;
