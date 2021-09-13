// Core imports
import React, { useState } from "react";
// Main Component imports
import PageOne from "./PageOne/index";
import PageTwo from "./PageTwo/index";
//Css
// import "../../../../src/App.css";
import classes from "../../../../src/AppOriginal.css";
import { CButton } from "@coreui/react";
// import "../../../../src/index.css";
// Initial states for page one
const contactState = {
  name: "",
  phone: "",
  email: "",
};
const manufacturerDetailsState = {
  name: "",
  submittedBy: "",
  email: "",
  dateSubmitted: "",
  PLC: null, //Product liability concern
  jointVisitDate: "",
};
const distributorInformationState = {
  name: "",
  branchLocation: "",
  DTN: "", //Distributor Tracking Number
  salesPerson: contactState,
  FAE: contactState,
};
const CustomerInformationState = {
  name: "",
  accountNumber: "",
  address: {
    location: "",
    city: "",
    state: "",
    zip: "",
  },
  country: "",
  mfgrep: contactState,
  supplier: contactState,
};
const projectInformationState = {
  status: null,
  prottypeDate: "",
  EPD: "", //Estimated production date
  projectName: "",
  EAU: "",
  application: "",
  description: "",
  boardName: "",
  projectEngineer: contactState,
  AEO: contactState, //Additional engineer one
  AET: contactState, //Additional engineer two
};
// Initial states for page two
const partState = {
  name: null,
  RA: null,
  distCost: null,
  targetResale: null,
  description: null,
  totalPartQty: null,
  val: null, //Value first year prod
  registrationLevel: null,
  customerPartno: null,
  competition: {
    mfg: null,
    partno: null,
    resale: null,
  },
  comment: null,
};
const registrationInformationState = {
  accepted: null,
  date: null,
  regNo: null, //Registration Number
  reason: null,
  expiryDate: null,
  distributorAccNo: null,
  distributorBranchId: null,
  comment: null,
};
const commentState = null;
// Default export of functional component
export default function Index(props) {
  // Page One states
  const [manufacturerDetails, setManufacturerDetails] = useState(
    props.manufacturerDetails || manufacturerDetailsState
  );
  const [distributorInformation, setDistributorInformation] = useState(
    props.distributorInformation || distributorInformationState
  );
  const [endCustomerInformation, setEndCustomerInformation] = useState(
    props.endCustomerInformation || CustomerInformationState
  );
  const [
    purchasingCustomerInformation,
    setPurchasingCustomerInformation,
  ] = useState(props.purchasingCustomerInformation || CustomerInformationState);
  const [designCustomerInformation, setDesignCustomerInformation] = useState(
    props.designCustomerInformation || CustomerInformationState
  );
  const [projectInformation, setProjectInformation] = useState(
    props.projectInformation || projectInformationState
  );
  // Page Two states
  const [partOne, setPartOne] = useState(props.partOne || partState);
  const [partTwo, setPartTwo] = useState(props.partTwo || partState);
  const [partThree, setPartThree] = useState(props.partThree || partState);
  const [partFour, setPartFour] = useState(props.partFour || partState);
  const [registrationInformation, setRegistrationInformation] = useState(
    props.registerationInformation || registrationInformationState
  );
  const [comment, setComment] = useState(props.comment || commentState);
  // Props object for page one
  const pageOneProps = {
    manufacturer: {
      information: manufacturerDetails,
      setInformation: setManufacturerDetails,
    },
    distributor: {
      information: distributorInformation,
      setInformation: setDistributorInformation,
    },
    endCustomer: {
      information: endCustomerInformation,
      setInformation: setEndCustomerInformation,
    },
    purchasingCustomer: {
      information: purchasingCustomerInformation,
      setInformation: setPurchasingCustomerInformation,
    },
    designCustomer: {
      information: designCustomerInformation,
      setInformation: setDesignCustomerInformation,
    },
    project: {
      information: projectInformation,
      setInformation: setProjectInformation,
    },
  };
  // Props object for page two
  const pageTwoProps = {
    part_one: {
      part: partOne,
      setPart: setPartOne,
    },
    part_two: {
      part: partTwo,
      setPart: setPartTwo,
    },
    part_three: {
      part: partThree,
      setPart: setPartThree,
    },
    part_four: {
      part: partFour,
      setPart: setPartFour,
    },
    registration: {
      registrationInformation,
      setRegistrationInformation,
    },
    additional_comments: {
      comment,
      setComment,
    },
  };
  // JSX
  console.log("Id: ", props.Id);
  const handleFormSubmit = () => {
    console.log(pageOneProps);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      data: { ...pageOneProps, ...pageTwoProps },
      fileName: props.Id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:3002/api/public/submit/upload", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    // <div className="leftmenu">
    <div className={classes.leftmenu}>
      <PageOne {...pageOneProps} />
      <PageTwo {...pageTwoProps} />
      <br />
      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        <CButton
          type="submit"
          color="warning"
          size="lg"
          style={{
            // textAlign: "center",
            width: "20rem",
            padding: "1rem",
          }}
          onClick={() => handleFormSubmit()}
          block
        >
          <h3>SUBMIT</h3>
        </CButton>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
