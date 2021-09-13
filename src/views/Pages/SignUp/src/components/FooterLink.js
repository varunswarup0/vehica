import React from "react";
import { Link } from "react-router-dom";

function FooterLink({ text, link, history }) {
  return (
    <div class="cc-auth-bottom">
      <Link to={link} className="cc-auth-bottom-link">
        {text}
      </Link>
    </div>
  );
}

export default FooterLink;
