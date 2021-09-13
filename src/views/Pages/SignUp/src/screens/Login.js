import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import EmailPhoneInput from "../components/EmailPhoneInput";
import PasswordInput from "../components/PasswordInput";
import PrimaryButton from "../components/PrimaryButton";
import GoogleButton from "../components/GoogleButton";
// import FacebookButton from "../components/FacebookButton";
// import AppleButton from "../components/AppleButton";
import FooterLink from "../components/FooterLink";
import Container from "../components/Container";
import SocialsContainer from "../components/SocialsContainer";

import "../index.css";
import "../assets/css/webflow.css";
import "../assets/css/normalize.css";
import "../assets/css/coot-login-auth.webflow.css";
import {
  CCard,
  CButton,
  CForm,
  CFormGroup,
  CCol,
  CLabel,
  CInput,
} from "@coreui/react";

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // const [phone, setPhone] = useState(null);
  // const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleLoginClick = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("password", password);
    urlencoded.append("mode", "email");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    await fetch("http://127.0.0.1:3002/api/login", requestOptions)
      .then((response) => console.log(response))
      .catch((error) => console.log("error", error));

    history.push({
      pathname: "/otp",
      state: email,
    });
    // console.log(email);
  };

  return (
    <div style={{ marginTop: "5rem", backgroundColor: "#ced2d8" }}>
      <CCard
        style={{
          backgroundColor: "#ced2d8",
          placeItems: "center",
        }}
      >
        <Container label="Login">
          {/* <EmailPhoneInput
            setEmail={(data) => setEmail(data)}
            // setPhone={(data) => setPhone(data)}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            setPassword={(data) => setPassword(data)}
            // onChange={(e) => setEmail(e.target.value)}
            // keepLoggedIn={keepLoggedIn}
            // setKeepLoggedIn={(bool) => setKeepLoggedIn(bool)}
            // goToOtp={() => props.history.push("/otp", { phone: phone })}
          /> */}
          {/* <PrimaryButton text="Log In" onCLick={() => handleLoginClick()} /> */}
          {/* <input
            type="submit"
            value={"Log In"}
            data-wait="Please wait..."
            className="cc-auth-sumbit-btn cs-lr-active w-button"
            onClick={() => handleLoginClick()}
          /> */}
          <CForm>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="email-input" sm="15" col="lg">
                  Email
                </CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  size="lg"
                  type="email"
                  id="email-input"
                  name="email-input"
                  placeholder="Enter Email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="password" sm="15" col="lg">
                  Password
                </CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  size="lg"
                  placeholder="Enter Password"
                  type="password"
                  id="password-input"
                  name="password-input"
                  autoComplete="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </CCol>
            </CFormGroup>
          </CForm>
          <CButton
            onClick={handleLoginClick}
            className="cc-auth-sumbit-btn cs-lr-active w-button"
          >
            Log In
          </CButton>
          <SocialsContainer text="Sign-in using Google">
            <GoogleButton />
            {/* <FacebookButton /> */}
            {/* <AppleButton /> */}
          </SocialsContainer>
          <FooterLink
            // history={props.history}
            link="/publicPage"
            text="Don't have an account? Create one"
          />
        </Container>
      </CCard>
    </div>
  );
};

export default Login;
