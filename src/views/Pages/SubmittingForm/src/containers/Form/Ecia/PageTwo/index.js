// Core imports
import React from "react";
// Component imports
import Header from "../Header";
import Footer from "../Footer";
import Part from "./Part";
import RegisterInformation from "./RegistrationInformation";
import Comment from "./Comment";
// Default export for main functional component
export default function index(props) {
  // JSX
  return (
    <>
      <div className="wrapper">
        <div className="form-wrap">
          <Header />
          <section>
            <div className="form-th">
              <h4 className="bold text-center"></h4>
            </div>
            <Part head={true} {...props.part_one} />
            <Part head={false} {...props.part_two} />
            <Part head={false} {...props.part_three} />
            <Part head={false} {...props.part_four} />
            <RegisterInformation {...props.registration} />
            <Comment {...props.additional_comments} />
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
}
