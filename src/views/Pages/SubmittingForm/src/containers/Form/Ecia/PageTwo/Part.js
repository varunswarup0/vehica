// Core imports
import React from "react";
// Default exports of main functional component
export default function Part(props) {
  return (
    <>
      <div className="form-row bottom-border-none">
        <div className="width-100 bottom-border height-15"></div>
        <div className="row-title  form-th bottom-border">
          {props.head ? (
            <h4 className="bold text-center no-margin">
              Part Numbers For Registration
            </h4>
          ) : (
            ""
          )}
        </div>
        <div className="form-td">
          <div className="field-label right-border width-68-px">Name</div>
          <div className="field-input width-265 right-border">
            <input
              className="form-input width-100"
              type="text"
              value={props.part.name}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = { ...props.part, name: e.target.value };
                props.setPart(data);
              }}
            />
          </div>
          <div className="field-label-2 right-border">
            R=Registerable A=Associated
          </div>
          <div className="field-input width-40 right-border">
            <input
              className="form-input width-100"
              type="text"
              value={props.part.RA}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = { ...props.part, RA: e.target.value };
                props.setPart(data);
              }}
            />
          </div>
          <div className="field-label right-border width-54-px">Dist. Cost</div>
          <div className="field-input right-border width-94-px">
            <input
              className="form-input width-100"
              type="text"
              value={props.part.distCost}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = { ...props.part, distCost: e.target.value };
                props.setPart(data);
              }}
            />
          </div>
          <div className="field-label right-border">Target Resale</div>
          <div className="field-input width-99-px">
            <input
              className="form-input width-100"
              type="text"
              value={props.part.targetResale}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = { ...props.part, targetResale: e.target.value };
                props.setPart(data);
              }}
            />
          </div>
        </div>
        <div className="form-td">
          <div className="field-label right-border width-68-px">
            Description
          </div>
          <div className="field-input width-409 right-border">
            <input
              className="form-input width-100"
              type="text"
              value={props.part.description}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = { ...props.part, description: e.target.value };
                props.setPart(data);
              }}
            />
          </div>
          <div className="field-label-2 right-border width-56-px">
            Total Part Qty
          </div>
          <div className="field-input right-border width-94-px">
            <input
              className="form-input width-100"
              type="text"
              value={props.part.totalPartQty}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = { ...props.part, totalPartQty: e.target.value };
                props.setPart(data);
              }}
            />
          </div>
          <div className="field-label-2 right-border width-77-px">
            Value 1<sup>st</sup> year prod.
          </div>
          <div className="field-input width-99-px">
            <input
              className="form-input width-100"
              type="text"
              value={props.part.val}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = { ...props.part, val: e.target.value };
                props.setPart(data);
              }}
            />
          </div>
        </div>
        <div className="form-td">
          <div className="field-label right-border">Registration Level</div>
          <div className="field-label-2 right-border width-20">Dist. Only</div>
          <div className="field-label-2 right-border div-checkbox">
            <label className="chk-container">
              <input
                type="checkbox"
                checked={
                  props.part.registrationLevel === "distonly" ? true : false
                }
                onChange={(e) => {
                  const data = {
                    ...props.part,
                    registrationLevel: e.target.checked ? "distonly" : "",
                  };
                  props.setPart(data);
                }}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="field-label right-border">Joint</div>
          <div className="field-label-2 right-border div-checkbox">
            <label className="chk-container">
              <input
                type="checkbox"
                checked={
                  props.part.registrationLevel === "joint" ? true : false
                }
                onChange={(e) => {
                  const data = {
                    ...props.part,
                    registrationLevel: e.target.checked ? "joint" : "",
                  };
                  props.setPart(data);
                }}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="field-label right-border">Fulfillment</div>
          <div className="field-label-2 right-border div-checkbox">
            <label className="chk-container">
              <input
                type="checkbox"
                checked={
                  props.part.registrationLevel === "fullfillment" ? true : false
                }
                onChange={(e) => {
                  const data = {
                    ...props.part,
                    registrationLevel: e.target.checked ? "fullfillment" : "",
                  };
                  props.setPart(data);
                }}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="field-label right-border width-119">
            Customer Part #
          </div>

          <div className="field-input width-365">
            <input
              className="form-input width-100"
              type="text"
              value={props.part.customerPartno}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = { ...props.part, customerPartno: e.target.value };
                props.setPart(data);
              }}
            />
          </div>
        </div>
        <div className="form-td">
          <div className="field-label right-border width-100-px">
            COMPETITION
          </div>
          <div className="field-label right-border width-24">Mfg</div>
          <div className="field-input width-228 right-border">
            <input
              className="form-input width-100"
              type="text"
              value={props.part.competition.mfg}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                let data = { ...props.part };
                let competition = { ...data.competition };
                competition["mfg"] = e.target.value;
                data.competition = competition;
                props.setPart(data);
              }}
            />
          </div>
          <div className="field-label right-border">Part #</div>
          <div className="field-input right-border width-271">
            <input
              className="form-input width-100"
              type="text"
              value={props.part.competition.partno}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                let data = { ...props.part };
                let competition = { ...data.competition };
                competition["partno"] = e.target.value;
                data.competition = competition;
                props.setPart(data);
              }}
            />
          </div>
          <div className="field-label right-border">Resale</div>
          <div className="field-input width-86-px">
            <input
              className="form-input width-100"
              type="text"
              value={props.part.competition.resale}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                let data = { ...props.part };
                let competition = { ...data.competition };
                competition["resale"] = e.target.value;
                data.competition = competition;
                props.setPart(data);
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
              value={props.part.comment}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = { ...props.part, comment: e.target.value };
                props.setPart(data);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
