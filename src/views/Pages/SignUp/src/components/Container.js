import React from "react";

function Container(props) {
  return (
    <div className="cc-auth-form">
      <div className="cc-auth-form-inner">
        <h3 className="cc-auth-title-big">{props.label}</h3>
        <div className="cs-lr-social-wrap">
          <div className="cs-lr-form-form w-form">
            <form id="email-form" name="email-form" data-name="Email Form">
              {props.children}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
