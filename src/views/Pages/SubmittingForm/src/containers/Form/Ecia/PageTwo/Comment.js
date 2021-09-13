// Core imports
import React from "react";
// Default exports of main functional component
export default function Comment(props) {
  return (
    <>
      <div className="form-row bottom-border-none">
        <div className="form-td">
          <div className="field-label right-border width-68-px">Comment:</div>
          <div className="field-input width-97">
            <input
              className="form-input width-100"
              type="text"
              value={props.comment}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = e.target.value;
                props.setComment(data);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
