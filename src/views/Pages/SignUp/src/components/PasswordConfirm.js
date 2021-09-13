import React from "react";

function PasswordConfirm({ setPasswordOne, setPasswordTwo }) {
  return (
    <div className="cs-lr-input-wrap register-password-wrap">
      <div className="cs-lr-input-wrap regsiter-input">
        <label htmlFor="password-2" className="cs-lr-form-label">
          Create your Password
        </label>
        <div className="input-forgot-wrap">
          <input
            type="password"
            className="cc-auth-input-field w-input"
            maxLength={256}
            name="register_password-2"
            data-name="Register Password 2"
            placeholder="Must be 8 Characters long"
            id="register_password-2"
            required
            onChange={(e) => setPasswordOne(e.target.value)}
          />
          <a href="#" className="cc-auth-psh-link">
            
          </a>
        </div>
      </div>
      <div className="cs-lr-input-wrap regsiter-input">
        <label htmlFor="password-2" className="cs-lr-form-label">
          Re-type your Password
        </label>
        <div className="input-forgot-wrap">
          <input
            type="password"
            className="cc-auth-input-field w-input"
            maxLength={256}
            name="register_password-2"
            data-name="Register Password 2"
            placeholder="Re-enter password"
            id="register_password-2"
            required
            onChange={(e) => setPasswordTwo(e.target.value)}
          />
          <a href="#" className="cc-auth-psh-link">
            
          </a>
        </div>
      </div>
    </div>
  );
}

export default PasswordConfirm;
