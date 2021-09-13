import React from "react";
import { Link } from "react-router-dom";

function PasswordInput({
  setPassword,
  setKeepLoggedIn,
  keepLoggedIn,
  goToOtp,
}) {
  return (
    <>
      <div className="cs-lr-input-wrap">
        <label htmlFor="password" className="cs-lr-form-label">
          Password
        </label>
        <div className="input-forgot-wrap">
          <input
            type="password"
            className="cc-auth-input-field mb0 w-input"
            maxLength="256"
            name="password"
            data-name="password"
            placeholder="Password"
            id="password"
            required=""
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <Link
            to={undefined}
            onClick={() => goToOtp()}
            class="reqotp_link_login w-inline-block"
          >
            <div class="cc-auth-reqotp">Request OTP</div>{" "}
          </Link> */}
          <a href="#" class="cc-auth-psh-link">
            
          </a>
        </div>
      </div>
      <label class="w-checkbox cc-auth-signup-consent">
        {/* <div class="w-checkbox-input w-checkbox-input--inputType-custom cc-auth-checkbox"></div> */}
        {/* <input
          type="checkbox"
          id="checkbox-3"
          name="checkbox-3"
          data-name="Checkbox 3"
          required=""
          style={{ opacity: "0", position: "absolute", zIndex: "-1" }}
          checked={keepLoggedIn}
          onChange={(e) => setKeepLoggedIn(e.target.checked)}
        /> */}
        {/* <span class="cc-auth-checkbox-label w-form-label">
          Keep me logged in on this device.
        </span> */}
      </label>
      {/* <Link to="/reset-password" class="cc-auth-forgotpassword-link">
        Forgot? Reset your Password
      </Link> */}
    </>
  );
}

export default PasswordInput;
