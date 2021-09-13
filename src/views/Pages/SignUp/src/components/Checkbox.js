import React from "react";

function Checkbox({ label }) {
  return (
    <label className="w-checkbox cc-auth-signup-consent cc-auth-consent-middle">
      <div className="w-checkbox-input w-checkbox-input--inputType-custom cc-auth-checkbox w--redirected-checked" />
      <input
        type="checkbox"
        id="checkbox-2"
        name="checkbox-2"
        data-name="Checkbox 2"
        defaultChecked
        required
        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
      />
      <span className="cc-auth-checkbox-label w-form-label">
        {label}
      </span>
    </label>
  );
}

export default Checkbox;
