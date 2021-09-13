import React, { useState } from "react";
import Container from "../components/Container";
import EmailPhoneInput from "../components/EmailPhoneInput";
import PrimaryButton from "../components/PrimaryButton";
import FooterLink from "../components/FooterLink";
import { Link } from "react-router-dom";

function ResetPassword() {
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [selectedTab, setSelectedTab] = useState("phone");

  return (
    <Container label="Reset your password">
      <EmailPhoneInput
        setEmail={(data) => setEmail(data)}
        setPhone={(data) => setPhone(data)}
        setSelectedTab={(tabName) => setSelectedTab(tabName)}
      />
      <PrimaryButton text="Reset password" />
      <FooterLink link="/login" text="Back to login" />
    </Container>
  );
}

export default ResetPassword;
