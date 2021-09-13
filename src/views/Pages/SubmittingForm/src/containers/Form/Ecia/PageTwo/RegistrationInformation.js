// Core imports
import React from "react";
// Default exports of main functional component
export default function RegistrationInformation(props) {
  return (
    <>
      <div className="form-row bottom-border-none">
        <div className="row-title  form-th bottom-border">
          <h4 className="bold text-center no-margin">
            Registration Information – To be completed by the manufacturer{" "}
          </h4>
        </div>
        <div className="form-td">
          <div className="field-label right-border width-63-px">Accepted</div>
          <div className="field-label-2 right-border div-checkbox width-35-px">
            <label className="chk-container">
              <input
                type="checkbox"
                checked={
                  props.registrationInformation.accepted !== null &&
                  props.registrationInformation.accepted
                    ? true
                    : false
                }
                onChange={(e) => {
                  const data = {
                    ...props.registrationInformation,
                    accepted: e.target.checked ? true : null,
                  };
                  props.setRegistrationInformation(data);
                }}
              />
              <span className="checkmark accecpeted-chk"></span>
            </label>
          </div>
          <div className="field-label right-border width-50">Rejected</div>
          <div className="field-label-2 right-border div-checkbox width-25-px">
            <label className="chk-container">
              <input
                type="checkbox"
                checked={
                  props.registrationInformation.accepted !== null
                    ? props.registrationInformation.accepted
                      ? false
                      : true
                    : false
                }
                onChange={(e) => {
                  const data = {
                    ...props.registrationInformation,
                    accepted: e.target.checked ? false : null,
                  };
                  props.setRegistrationInformation(data);
                }}
              />
              <span className="checkmark rejected-chk"></span>
            </label>
          </div>
          <div className="field-label right-border">Date</div>
          <div className="field-input right-border width-144">
            <input
              className="form-input width-100"
              type="text"
              value={props.registrationInformation.date}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = {
                  ...props.registrationInformation,
                  date: e.target.value,
                };
                props.setRegistrationInformation(data);
              }}
            />
          </div>
          <div className="field-label right-border">Registration #</div>
          <div className="field-input width-356">
            <input
              className="form-input width-100"
              type="text"
              value={props.registrationInformation.regNo}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = {
                  ...props.registrationInformation,
                  regNo: e.target.value,
                };
                props.setRegistrationInformation(data);
              }}
            />
          </div>
        </div>
        <div className="form-td">
          <div className="field-label right-border width-64-px">Reason</div>
          <div className="field-input right-border width-526">
            <input
              className="form-input width-100"
              type="text"
              value={props.registrationInformation.reason}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = {
                  ...props.registrationInformation,
                  reason: e.target.value,
                };
                props.setRegistrationInformation(data);
              }}
            />
          </div>
          <div className="field-label-2 right-border">Expires/Renewal date</div>
          <div className="field-input">
            <input
              className="form-input width-100"
              type="text"
              value={props.registrationInformation.expiryDate}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = {
                  ...props.registrationInformation,
                  expiryDate: e.target.value,
                };
                props.setRegistrationInformation(data);
              }}
            />
          </div>
        </div>
        <div className="form-td">
          <div className="field-label right-border width-166">
            Distributor Account Number
          </div>
          <div className="field-input width-336">
            <input
              className="form-input width-100"
              type="text"
              value={props.registrationInformation.distributorAccNo}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = {
                  ...props.registrationInformation,
                  distributorAccNo: e.target.value,
                };
                props.setRegistrationInformation(data);
              }}
            />
          </div>
          <div className="field-label left-border right-border">
            Distributor Branch ID
          </div>
          <div className="field-input width-200">
            <input
              className="form-input width-100"
              type="text"
              value={props.registrationInformation.distributorBranchId}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = {
                  ...props.registrationInformation,
                  distributorBranchId: e.target.value,
                };
                props.setRegistrationInformation(data);
              }}
            />
          </div>
        </div>
        <div className="form-td">
          <div className="field-label right-border width-68-px">Comment</div>
          <div className="field-input width-97">
            <input
              className="form-input width-100"
              type="text"
              value={props.registrationInformation.comment}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = {
                  ...props.registrationInformation,
                  comment: e.target.value,
                };
                props.setRegistrationInformation(data);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
