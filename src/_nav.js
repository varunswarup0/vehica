// import { useSelector } from "react-redux";
// const companyName = useSelector((state) => state.companyName);

export default [
  {
    _tag: "CSidebarNavItem",
  },

  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: "cil-speedometer",
  },
  {
    _tag: "CSidebarNavItem",
    name: "New Registration",
    to: "/submittingForm",
    icon: "cil-star",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Registrations",
    to: "/registrations",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Reports",
    to: "/reports",
    icon: "cil-bell",
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Channel Partners",
    // to: "/channelpartners",
    icon: "cil-code",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Manufacturer",
        to: "/channelPartners/manufacturer",
        // _children: [
        //   {
        //     _tag: "CSidebarNavItem",
        //     name: `${companyName}`,
        //     to: `/channelpartners/manufacturer/${companyName}`,
        //   },
        // ],
      },
      {
        _tag: "CSidebarNavItem",
        name: "Distribtor",
        to: "/channelPartners/distribtor",
        // _children: [
        //   {
        //     _tag: "CSidebarNavItem",
        //     name: `${companyName}`,
        //     to: `/channelpartners/distribtor/${companyName}`,
        //   },
        // ],
      },
      {
        _tag: "CSidebarNavItem",
        name: "Sales Represntative",
        to: "/channelPartners/salesRepresntative",
        // _children: [
        //   {
        //     _tag: "CSidebarNavItem",
        //     name: `${companyName}`,
        //     to: `/channelpartners/salesrepresntative/${companyName}`,
        //   },
        // ],
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Follow Ups",
    to: "/followUps",
    icon: "cil-chart-pie",
  },
  //Bottom start

  {
    _tag: "CSidebarNavItem",
  },
  {
    _tag: "CSidebarNavItem",
  },
  {
    _tag: "CSidebarNavItem",
  },
  {
    _tag: "CSidebarNavItem",
  },
  {
    _tag: "CSidebarNavItem",
  },
  //Bottom end
  {
    _tag: "CSidebarNavItem",
    name: "Manage Company",
    to: "/manageCompany",
    icon: "cil-calculator",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Settings",
    to: "/settings",
    icon: "cil-pencil",
  },
];
