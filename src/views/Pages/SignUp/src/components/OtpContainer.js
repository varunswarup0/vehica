import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Checkbox from "./Checkbox";
import FooterLink from "./FooterLink";
import { CInput, CButton, CCardFooter } from "@coreui/react";

// Prop desc
// label ::: Title of the container
// isTwoFactor ::: True / false - whether to show options which are to be shown when setting up two-factor auth

const OtpContainer = ({ email, label, isTwoFactor }) => {
  const [otp, setOtp] = useState(null);
  const history = useHistory();
  const handleLoginClick = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      otp: otp,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include",
    };

    console.log(raw);
    await fetch(`http://127.0.0.1:3002/api/login/otp/`, requestOptions)
      .then((response) => {
        console.log(response);
        return response.json();
        // return response;
      })
      .then((result) => console.log(result))
      .then(history.push("/dashboard"))
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="cc-auth-form cslr-register-form">
      <div className="cc-auth-form-inner cs-otp-form">
        <img
          src="/images/sms.png"
          srcset="images/sms-p-500.png 500w, images/sms.png 512w"
          alt=""
          className="cc-auth-otp-img"
        />
        <div className="otp-titlewrap">
          <h3 className="cc-auth-title-big mb0">{label}</h3>
        </div>
        <div className="cs-lr-social-wrap cs-otpform">
          <h4 className="cc-auth-otp-headingsmall">
            A text message with your code has been sent to:{" "}
            <strong>{email}</strong>
            <a href="#" className="otp-change" />
          </h4>
          <div className="cs-lr-form-form w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              className="otpform"
            >
              <div className="cs-lr-input-wrap cs-otpinputwrap">
                <label htmlFor="email-5" className="cs-lr-form-label">
                  Enter OTP
                </label>
                <div className="otp-fieldwrap">
                  <CInput
                    size="lg"
                    placeholder="Enter OTP"
                    type="OTP"
                    id="OTP-input"
                    name="OTP-input"
                    autoComplete="OTP"
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <CCardFooter>
                    <CButton
                      onClick={handleLoginClick}
                      className="cc-auth-sumbit-btn cs-lr-active w-button"
                    >
                      Submit
                    </CButton>
                  </CCardFooter>
                  {/* <input
                    type="text"
                    className="otp01 cs-lr-form-input otp-field cc-auth-input-field w-input"
                    autofocus={true}
                    maxLength={256}
                    name="field-5"
                    data-name="Field 5"
                    placeholder="X"
                    id="field-5"
                    required
                  />
                  <input
                    type="text"
                    className="otp01 cs-lr-form-input otp-field cc-auth-input-field w-input"
                    autofocus={true}
                    maxLength={256}
                    name="field-4"
                    data-name="Field 4"
                    id="field-4"
                    required
                  />
                  <input
                    type="text"
                    className="otp01 cs-lr-form-input otp-field cc-auth-input-field w-input"
                    autofocus={true}
                    maxLength={256}
                    name="field-3"
                    data-name="Field 3"
                    id="field-3"
                    required
                  />
                  <input
                    type="text"
                    className="otp01 cs-lr-form-input otp-field cc-auth-input-field w-input"
                    autofocus={true}
                    maxLength={256}
                    name="field-2"
                    data-name="Field 2"
                    id="field-2"
                    required
                  />
                  <input
                    type="text"
                    className="otp01 cs-lr-form-input otp-field cc-auth-input-field w-input"
                    autofocus={true}
                    maxLength={256}
                    name="field-2"
                    data-name="Field 2"
                    id="field-2"
                    required
                  />
                  <input
                    type="text"
                    className="otp01 cs-lr-form-input otp-field cc-auth-input-field w-input"
                    autofocus={true}
                    maxLength={256}
                    name="field-2"
                    data-name="Field 2"
                    id="field-2"
                    required
                  /> */}
                </div>
              </div>
              {isTwoFactor ? (
                <Checkbox label="Disable Two-factor for this device" />
              ) : null}
            </form>
          </div>
          {isTwoFactor ? (
            <a href="#" className="cc-auth-learn-2factor w-inline-block">
              <div>Learn more about Two Factor</div>
            </a>
          ) : null}
        </div>
        <FooterLink text="Problem receiving your code?" />
      </div>
    </div>
  );
};

export default OtpContainer;
