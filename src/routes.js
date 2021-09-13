import React from "react";

// Interfaces
const Dashboard = React.lazy(() => import("./views/Dashboard"));
const ChannelPartners = React.lazy(() =>
  import("./views/ChannelPartners/index")
);
const Registrations = React.lazy(() => import("./views/Registrations/index"));
const Reports = React.lazy(() => import("./views/Reports/index"));
const FollowUps = React.lazy(() => import("./views/FollowUps/index"));
const Settings = React.lazy(() => import("./views/Settings/index"));
const ManageCompany = React.lazy(() => import("./views/ManageCompany/index"));
const Form = React.lazy(() => import("./views/Form/index"));
const SubmittingForm = React.lazy(() =>
  import("./views/Pages/SubmittingForm/SubmittingForm")
);
const CompanyTable = React.lazy(() =>
  import("./views/ChannelPartners/CompanyTable")
);

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  {
    path: "/channelPartners",
    name: "Channel Partners",
    component: ChannelPartners,
    // exact: true,
  },
  {
    path: "/channelPartners/manufacturer",
    name: "Manufacturer",
    component: CompanyTable,
    // exact: true,
  },
  {
    path: "/channelPartners/distribtor",
    name: "Distribtor",
    component: CompanyTable,
    // exact: true,
  },
  {
    path: "/channelPartners/salesRepresntative",
    name: "Sales Represntative",
    component: CompanyTable,
    // exact: true,
  },
  {
    path: "/registrations",
    name: "Registrations",
    component: Registrations,
    // exact: true,
  },
  {
    path: "/submittingForm",
    name: "Submitting Form",
    component: SubmittingForm,
    // exact: true,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    // exact: true,
  },
  {
    path: "/manageCompany",
    name: "Manage Company",
    component: ManageCompany,
    // exact: true,
  },
  {
    path: "/reports",
    name: "Reports",
    component: Reports,
    // exact: true,
  },
  {
    path: "/followUps",
    name: "Follow Ups",
    component: FollowUps,
    // exact: true,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
    // exact: true,
  },
];

export default routes;
