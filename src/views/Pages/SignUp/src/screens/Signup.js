import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import PasswordConfirm from "../components/PasswordConfirm";
import EmailPhoneInput from "../components/EmailPhoneInput";
import PrimaryButton from "../components/PrimaryButton";
import SocialsContainer from "../components/SocialsContainer";
import GoogleButton from "../components/GoogleButton";
import FacebookButton from "../components/FacebookButton";
import AppleButton from "../components/AppleButton";
import FooterLink from "../components/FooterLink";

import "../index.css";
import "../assets/css/webflow.css";
import "../assets/css/normalize.css";
import "../assets/css/coot-login-auth.webflow.css";
import { CCard } from "@coreui/react";

function Signup() {
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [pwdOne, setPwdOne] = useState(null);
  const [pwdTwo, setPwdTwo] = useState(null);
  const [pwdMatch, setPwdMatch] = useState(null);

  useEffect(() => {
    if (pwdOne === pwdTwo) {
      setPwdMatch(true);
    } else {
      setPwdMatch(false);
    }
  }, [pwdOne, pwdTwo]);

  return (
    <div
      style={{
        marginTop: "5rem",
        backgroundColor: "#ced2d8",
      }}
    >
      <CCard
        style={{
          backgroundColor: "#ced2d8",
          placeItems: "center",
        }}
      >
        <Container label="Sign Up">
          <EmailPhoneInput
            setEmail={(data) => setEmail(data)}
            setPhone={(data) => setPhone(data)}
          />
          <PasswordConfirm
            setPasswordOne={(data) => setPwdOne(data)}
            setPasswordTwo={(data) => setPwdTwo(data)}
          />
          <PrimaryButton text="Create An Account" />
          <SocialsContainer text="Sign up using Google">
            <GoogleButton />
            {/* <FacebookButton />
            <AppleButton /> */}
          </SocialsContainer>
          <FooterLink link="/login" text="Already have an account? Log in" />
        </Container>
      </CCard>
    </div>
  );
}

export default Signup;
