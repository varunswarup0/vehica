import React from "react";
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs,
} from "@coreui/react";
import ContactsTable from "./ContactsTable";
import BranchesTable from "./BranchesTable";

const Settings = () => {
  return (
    <>
      <CTabs activeTab="CONTACTS">
        <CNav variant="tabs">
          <CNavItem>
            <CNavLink data-tab="CONTACTS" forId="0">
              Contacts
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink data-tab="BRANCHES" forId="1">
              Branches
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane data-tab="CONTACTS">
            <ContactsTable />
          </CTabPane>
          <CTabPane data-tab="BRANCHES">
            <BranchesTable />
          </CTabPane>
        </CTabContent>
      </CTabs>
    </>
  );
};

export default Settings;
