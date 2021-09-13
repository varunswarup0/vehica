import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
  CButton,
} from "@coreui/react";
import { CIcon } from "@coreui/icons-react";

// routes config
import routes from "../../routes";

import {
  DefaultHeaderDropdown,
  DefaultHeaderDropdownMssg,
  DefaultHeaderDropdownNotif,
  DefaultHeaderDropdownTasks,
} from "./index";
import logo from "../../assets/img/brand/coreui-pro-base.svg";

const DefaultHeader = () => {
  const dispatch = useDispatch();
  const asideShow = useSelector((state) => state.asideShow);
  const darkMode = useSelector((state) => state.darkMode);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const history = useHistory();
  const handleLogoutClick = () => {
    var myHeaders = new Headers();

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
      credentials: "include",
    };

    fetch("http://127.0.0.1:3001/auth/logout", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then(history.push("/login"))
      .catch((error) => console.log("error", error));
  };

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon src={logo} height="48" alt="Logo" />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        {/* <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem> */}
        {/* <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/users">Users</CHeaderNavLink>
        </CHeaderNavItem> */}
        {/* <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Settings</CHeaderNavLink>
        </CHeaderNavItem> */}
      </CHeaderNav>

      <CHeaderNav className="px-3">
        {/* <CToggler
          inHeader
          className="ml-3 d-md-down-none"
          onClick={() => dispatch({ type: "set", darkMode: !darkMode })}
          title="Toggle Light/Dark Mode"
        >
          <CIcon
            name="cil-moon"
            className="c-d-dark-none"
            alt="CoreUI Icons Moon"
          />
          <CIcon
            name="cil-sun"
            className="c-d-default-none"
            alt="CoreUI Icons Sun"
          />
        </CToggler> */}
        <CButton onClick={() => handleLogoutClick()} color={"info"}>
          Logout
        </CButton>
        <DefaultHeaderDropdownNotif />
        {/* <DefaultHeaderDropdownTasks /> */}
        {/* <DefaultHeaderDropdownMssg /> */}
        {/* <DefaultHeaderDropdown /> */}
        <CToggler
          inHeader
          className="d-md-down-none"
          onClick={() => dispatch({ type: "set", asideShow: !asideShow })}
        >
          <CIcon className="mr-2" size="lg" name="cil-applications-settings" />
        </CToggler>
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
        <div className="d-md-down-none mfe-2 c-subheader-nav">
          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-speech" alt="Settings" />
          </CLink>
          <CLink
            className="c-subheader-nav-link"
            aria-current="page"
            to="/dashboard"
          >
            <CIcon name="cil-graph" alt="Dashboard" />
            &nbsp;Dashboard
          </CLink>
          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-settings" alt="Settings" />
            &nbsp;Settings
          </CLink>
        </div>
      </CSubheader>
    </CHeader>
  );
};

export default DefaultHeader;
