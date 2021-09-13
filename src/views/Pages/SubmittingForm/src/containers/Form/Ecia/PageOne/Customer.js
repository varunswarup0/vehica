// Core imports
import React from "react";
// Default export for main functional component
export default function Customer({ head, information, setInformation }) {
  // JSX
  return (
    <>
      <div className="form-th">
        <h4 className="bold no-margin text-center">
          {head} Customer Information
        </h4>
      </div>
      <div className="left-section top-border">
        <div className="form-td">
          <div className="field-label field-label-min-width right-border">
            Name
          </div>
          <div className="field-input width-97 right-border">
            <input
              className="form-input width-100"
              type="text"
              value={information.name}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = { ...information, name: e.target.value };
                setInformation(data);
              }}
            />
          </div>
        </div>
      </div>
      <div className="right-section top-border">
        <div className="form-td">
          <div className="field-label mw-width-125 right-border">
            Account Number
          </div>
          <div className="field-input width-97">
            <input
              className="form-input width-100"
              type="text"
              value={information.accountNumber}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = { ...information, accountNumber: e.target.value };
                setInformation(data);
              }}
            />
          </div>
        </div>
      </div>
      <div className="form-td">
        <div className="field-label field-label-min-width right-border">
          Address
        </div>
        <div className="field-input width-265 display-table">
          <input
            className="form-input width-100"
            type="text"
            value={information.address.location}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              let data = { ...information };
              const addr = { ...data.address };
              addr.location = e.target.value;
              data.address = addr;
              setInformation(data);
            }}
          />
        </div>
        <div className="field-label left-border right-border">City</div>
        <div className="field-input width-280">
          <input
            className="form-input width-100"
            type="text"
            value={information.address.city}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              let data = { ...information };
              const addr = { ...data.address };
              addr.city = e.target.value;
              data.address = addr;
              setInformation(data);
            }}
          />
        </div>
        <div className="field-label left-border right-border">State</div>
        <div className="field-input width-40">
          <input
            className="form-input width-74"
            type="text"
            value={information.address.state}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              let data = { ...information };
              const addr = { ...data.address };
              addr.state = e.target.value;
              data.address = addr;
              setInformation(data);
            }}
          />
        </div>
        <div className="field-label left-border right-border">Zip</div>
        <div className="field-input">
          <input
            className="form-input width-100"
            type="text"
            value={information.address.zip}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              let data = { ...information };
              const addr = { ...data.address };
              addr.zip = e.target.value;
              data.address = addr;
              setInformation(data);
            }}
          />
        </div>
      </div>
      <div className="form-td">
        <div className="field-label field-label-min-width right-border">
          Country
        </div>
        <div className="field-input width-97">
          <input
            className="form-input width-100"
            type="text"
            value={information.country}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              let data = { ...information, country: e.target.value };
              setInformation(data);
            }}
          />
        </div>
      </div>
      <div className="form-td">
        <div className="field-label-2-1 right-border">
          Mfg. Rep. Sales Person
        </div>
        <div className="field-input">
          <input
            className="form-input width-245"
            type="text"
            value={information.mfgrep.name}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              let data = { ...information };
              const mfgrep = { ...data.mfgrep };
              mfgrep.name = e.target.value;
              data.mfgrep = mfgrep;
              setInformation(data);
            }}
          />
        </div>
        <div className="field-label left-border right-border">Phone</div>
        <div className="field-input mw-width-125">
          <input
            className="form-input width-100"
            type="text"
            value={information.mfgrep.phone}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              let data = { ...information };
              const mfgrep = { ...data.mfgrep };
              mfgrep.phone = e.target.value;
              data.mfgrep = mfgrep;
              setInformation(data);
            }}
          />
        </div>
        <div className="field-label left-border right-border">Email</div>
        <div className="field-input width-97">
          <input
            className="form-input width-100"
            type="text"
            value={information.mfgrep.email}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              let data = { ...information };
              const mfgrep = { ...data.mfgrep };
              mfgrep.email = e.target.value;
              data.mfgrep = mfgrep;
              setInformation(data);
            }}
          />
        </div>
      </div>
      <div className="form-td">
        <div className="field-label-2-1 right-border">Supplier Contact</div>
        <div className="field-input">
          <input
            className="form-input width-245"
            type="text"
            value={information.supplier.name}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              let data = { ...information };
              const supp = { ...data.supplier };
              supp.name = e.target.value;
              data.supplier = supp;
              setInformation(data);
            }}
          />
        </div>
        <div className="field-label left-border right-border">Phone</div>
        <div className="field-input mw-width-125">
          <input
            className="form-input width-100"
            type="text"
            value={information.supplier.phone}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              let data = { ...information };
              const supp = { ...data.supplier };
              supp.phone = e.target.value;
              data.supplier = supp;
              setInformation(data);
            }}
          />
        </div>
        <div className="field-label left-border right-border">Email</div>
        <div className="field-input width-97">
          <input
            className="form-input width-100"
            type="text"
            value={information.supplier.email}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              let data = { ...information };
              const supp = { ...data.supplier };
              supp.email = e.target.value;
              data.supplier = supp;
              setInformation(data);
            }}
          />
        </div>
      </div>
    </>
  );
}
