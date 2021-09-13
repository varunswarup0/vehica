import React from "react";

function EmailPhoneInput({ setEmail, setPhone }) {
  return (
    <div
      data-duration-in="300"
      data-duration-out="100"
      data-easing="ease-in-cubic"
      className="cc-auth-tab w-tabs"
    >
      <div className="cc-auth-tabs-wrap w-tab-menu">
        <a
          data-w-tab="Tab 1"
          className="cc-auth-tab-header w-inline-block w-tab-link  w--current"
        >
          <div className="cc-auth-tab-text">E-Mail</div>
        </a>
        {/* <a
          data-w-tab="Tab 2"
          className="cc-auth-tab-header w-inline-block w-tab-link  w--current"
        >
          <div className="cc-auth-tab-text">Use Phone Number</div>
        </a> */}
      </div>
      <div className="cc-auth-tab-content w-tab-content">
        <div data-w-tab="Tab 1" className="cc-auth-tab-pane w-tab-pane">
          <div className="cs-lr-input-wrap">
            <div className="cc-auth-inputwrap">
              <input
                type="text"
                className="cc-auth-input-field w-input"
                autoFocus={true}
                maxLength="256"
                name="email"
                data-name="email"
                placeholder="Username or E-Mail Address"
                id="email"
                required=""
                // onChange={(e) => setEmail(e.target.value)}
              />
              <a href="#" className="cc-auth-psh-link">
                
              </a>
            </div>
          </div>
        </div>
        <div
          data-w-tab="Tab 2"
          className="cc-auth-tab-pane w-tab-pane w--tab-active"
        >
          <div className="cs-lr-input-wrap">
            <div className="cc-auth-inputwrap">
              <input
                type="text"
                className="cc-auth-input-field w-input"
                autoFocus={true}
                maxLength="256"
                name="email-5"
                data-name="Email 5"
                placeholder="Enter your Email"
                id="phone"
                required=""
                // onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailPhoneInput;
