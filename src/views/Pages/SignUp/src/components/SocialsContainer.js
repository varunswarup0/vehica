import React from "react";

function SocialsContainer(props) {
  return (
    <div className="cs-lr-social-wrap">
      <div className="cc-auth-small-title">{props.text}</div>
      <div className="cs-lr-scta-wrap">{props.children}</div>
    </div>
  );
}

export default SocialsContainer;
