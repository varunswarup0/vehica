import React from "react";

function PrimaryButton({ text }) {
  return (
    <input
      type="submit"
      value={text}
      data-wait="Please wait..."
      className="cc-auth-sumbit-btn cs-lr-active w-button"
    />
  );
}

export default PrimaryButton;
