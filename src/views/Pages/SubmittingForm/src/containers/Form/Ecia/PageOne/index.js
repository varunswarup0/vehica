// Core Imports
import React from "react";

//Component Imports
import Header from "../Header";
import FirstRow from "./FirstRow";
import DistributorInfo from "./DistributorInformation/Index";
import Customer from "./Customer";
import ProjectInformation from "./ProjectInformation";
import Footer from "../Footer";
// Default function which is exported
export default function Index(props) {
  // JSX
  return (
    <div>
      <div className="wrapper">
        <div className="form-wrap">
          <Header />
          <section>
            <div className="form-th">
              <h4 className="bold text-center">
                ECIA Design Registration Reporting Form
              </h4>
            </div>
            <FirstRow {...props.manufacturer} />
            <div className="form-row bottom-border-none">
              <DistributorInfo {...props.distributor} />
              <Customer head="End" {...props.endCustomer} />
              <Customer head="Purchasing" {...props.purchasingCustomer} />
              <Customer head="Design" {...props.designCustomer} />
              <ProjectInformation {...props.project} />
              <Footer />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
