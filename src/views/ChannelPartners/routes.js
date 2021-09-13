import React from "react";

const CompanyTable = React.lazy(() => import("./CompanyTable"));
const EmployeeTable = React.lazy(() => import("./EmployeeTable"));
// const Breadcrumbs = React.lazy(() => import("./views/Base/Breadcrumbs"));

const routes = [
  // { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  {
    path: "/ChannelPartners/CompanyTable",
    name: "Breadcrumbs",
    component: CompanyTable,
  },
  {
    path: "/ChannelPartners/EmployeeTable",
    name: "Breadcrumbs",
    component: EmployeeTable,
  },
];

export default routes;
