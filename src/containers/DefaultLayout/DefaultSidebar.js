import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  // CNavItem,
  // CProgress,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from "@coreui/react";

// import { CIcon } from "@coreui/icons-react";

//logo
// import logo from "../../assets/img/brand/coreui-react-pro-neg.svg";
// import sygnet from "../../assets/img/brand/coreui-signet-white.svg";

// sidebar nav config
import navigation from "../../_nav";

const DefaultSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      show={show}
      unfoldable
      onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}
      dropdownMode="closeInactive"
    >
      <CSidebarBrand
        className="d-md-down-none"
        to="/"
        style={{
          backgroundColor: "#fff",
          color: "#3c4b64",
          width: "16rem",
          height: "6.5rem",
        }}
      >
        <img
          // src={require("../../../../../src/assets/images/REGIMAN-DARK.png")}
          src={require("../../../src/assets/images/REGIMAN LOGO.svg")}
          alt={""}
          style={{
            objectFit: "cover",
            width: "30rem",
            padding: "0rem",
            height: "16rem",
            margin: "-115px -137px -61px -120px",
            overflow: "auto",
          }}
          // style={{ width: "20rem", padding: "1rem" }}
          // style={{ width: "20rem", padding: "1rem" }}
          // height={118}
          // width={46}
        />

        {/* <CIcon className="c-sidebar-brand-full" src={logo} height={35} />
        <CIcon className="c-sidebar-brand-minimized" src={sygnet} height={35} /> */}

        {/* <div
          className="display-4"
          style={{
            fontSize: "2.5rem",
            fontWeight: "900",
            lineHeight: "3",
            textDecoration: "underline",
          }}
        >

          REGIMAN
        </div> */}
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />

        <CSidebarNavDivider />
        {/* <CSidebarNavTitle>System Utilization</CSidebarNavTitle> */}
        {/* <CNavItem className="px-3 d-compact-none c-d-minimized-none">
          <div className="text-uppercase mb-1"><small><b>CPU Usage</b></small></div>
          <CProgress size="xs" value={25} color="info" />
          <small className="text-muted">348 Processes. 1/4 Cores.</small>
        </CNavItem> */}
        {/* <CNavItem className="px-3 d-compact-none c-d-minimized-none">
          <div className="text-uppercase mb-1"><small><b>Memory Usage</b></small></div>
          <CProgress size="xs" value={70} color="warning" />
          <small className="text-muted">11444GB/16384MB</small>
        </CNavItem> */}
        {/* <CNavItem className="px-3 mb-3 d-compact-none c-d-minimized-none">
          <div className="text-uppercase mb-1"><small><b>SSD 1 Usage</b></small></div>
          <CProgress size="xs" value={95} color="danger" />
          <small className="text-muted">243GB/256GB</small>
        </CNavItem> */}
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(DefaultSidebar);
