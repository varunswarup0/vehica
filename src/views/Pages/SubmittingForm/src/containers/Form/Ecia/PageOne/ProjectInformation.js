// Core imports
import React from "react";
// Default exports of main functional component
export default function ProjectInformation({ information, setInformation }) {
  // JSX
  return (
    <>
      <div className="form-th">
        <h4 className="bold no-margin text-center">Project Information</h4>
      </div>
      <div className="form-td top-border">
        <div className="field-label right-border">Status</div>
        <div className="field-label right-border" style={{ padding: "10px 0" }}>
          Concept
        </div>
        <div className="field-label-2 right-border div-checkbox">
          <label className="chk-container">
            <input
              type="checkbox"
              checked={information.status === "concept" ? true : false}
              onChange={(e) => {
                const data = {
                  ...information,
                  status: e.target.checked ? "concept" : null,
                };
                setInformation(data);
              }}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="field-label right-border">Prototype</div>
        <div className="field-label-2 right-border div-checkbox">
          <label className="chk-container">
            <input
              type="checkbox"
              checked={information.status === "prototype" ? true : false}
              onChange={(e) => {
                const data = {
                  ...information,
                  status: e.target.checked ? "prototype" : null,
                };
                setInformation(data);
              }}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="field-label right-border width-73-px">Design Win</div>
        <div className="field-label-2 right-border div-checkbox">
          <label className="chk-container">
            <input
              type="checkbox"
              checked={information.status === "designwin" ? true : false}
              onChange={(e) => {
                const data = {
                  ...information,
                  status: e.target.checked ? "designwin" : null,
                };
                setInformation(data);
              }}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="field-label right-border width-100-px">
          Production Win
        </div>
        <div className="field-label-2 right-border div-checkbox">
          <label className="chk-container">
            <input
              type="checkbox"
              checked={information.status === "productwin" ? true : false}
              onChange={(e) => {
                const data = {
                  ...information,
                  status: e.target.checked ? "productionwin" : null,
                };
                setInformation(data);
              }}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="field-label-2-1 right-border">Prototype Date</div>
        <div className="field-input right-border width-80">
          <input
            className="form-input width-100"
            type="text"
            value={information.prototypeDate}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              const data = { ...information, prototypeDate: e.target.value };
              setInformation(data);
            }}
          />
        </div>
        <div className="field-label-2-2 right-border">EST Production Date</div>
        <div className="field-input">
          <input
            className="form-input width-100"
            type="text"
            value={information.EPD}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              const data = { ...information, EPD: e.target.value };
              setInformation(data);
            }}
          />
        </div>
      </div>
      <div className="form-td">
        <div className="field-label right-border">Project Name</div>
        <div className="field-input right-border width-456">
          <input
            className="form-input width-100"
            type="text"
            value={information.projectName}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              const data = { ...information, projectName: e.target.value };
              setInformation(data);
            }}
          />
        </div>
        <div className="field-label right-border">EAU</div>
        <div className="field-input width-265">
          <input
            className="form-input width-100"
            type="text"
            value={information.EAU}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              const data = { ...information, EAU: e.target.value };
              setInformation(data);
            }}
          />
        </div>
      </div>
      <div className="form-td">
        <div className="td-left right-border">
          <div className="field-label-8">
            Application
            <br />
            Description
          </div>
        </div>
        <div className="td-right width-row-100">
          <div className="field-input bottom-border width-row-100">
            <input
              className="form-input width-99"
              type="text"
              value={information.application}
              title="Manufacturer"
              data-field-name="Manufacturer"
              onChange={(e) => {
                const data = { ...information, application: e.target.value };
                setInformation(data);
              }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <div className="field-input width-330 right-border">
              <input
                className="form-input width-100"
                type="text"
                value={information.description}
                title="Manufacturer"
                data-field-name="Manufacturer"
                onChange={(e) => {
                  const data = { ...information, description: e.target.value };
                  setInformation(data);
                }}
              />
            </div>
            <div className="field-label right-border">Board Name</div>
            <div className="field-input width-344">
              <input
                className="form-input width-100"
                type="text"
                value={information.boardName}
                title="Manufacturer"
                data-field-name="Manufacturer"
                onChange={(e) => {
                  const data = { ...information, boardName: e.target.value };
                  setInformation(data);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="form-td">
        <div className="field-label right-border width-115">
          Project Engineer
        </div>
        <div className="field-input right-border width-235">
          <input
            className="form-input width-100"
            type="text"
            value={information.projectEngineer.name}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              const data = { ...information };
              const engg = { ...data.projectEngineer };
              engg.name = e.target.value;
              data.projectEngineer = engg;
              setInformation(data);
            }}
          />
        </div>
        <div className="field-label right-border">Phone</div>
        <div className="field-input right-border">
          <input
            className="form-input width-100"
            type="text"
            value={information.projectEngineer.phone}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              const data = { ...information };
              const engg = { ...data.projectEngineer };
              engg.phone = e.target.value;
              data.projectEngineer = engg;
              setInformation(data);
            }}
          />
        </div>
        <div className="field-label right-border">Email</div>
        <div className="field-input width-242">
          <input
            className="form-input width-100"
            type="text"
            value={information.projectEngineer.email}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              const data = { ...information };
              const engg = { ...data.projectEngineer };
              engg.email = e.target.value;
              data.projectEngineer = engg;
              setInformation(data);
            }}
          />
        </div>
      </div>
      <div className="form-td">
        <div className="field-label right-border width-115">
          Additional Engineer
        </div>
        <div className="field-input right-border width-235">
          <input
            className="form-input width-100"
            type="text"
            value={information.AEO.name}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              const data = { ...information };
              const aeo = { ...data.AEO };
              aeo.name = e.target.value;
              data.AEO = aeo;
              setInformation(data);
            }}
          />
        </div>
        <div className="field-label right-border">Phone</div>
        <div className="field-input right-border">
          <input
            className="form-input width-100"
            type="text"
            value={information.AEO.phone}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              const data = { ...information };
              const aeo = { ...data.AEO };
              aeo.phone = e.target.value;
              data.AEO = aeo;
              setInformation(data);
            }}
          />
        </div>
        <div className="field-label right-border">Email</div>
        <div className="field-input width-242">
          <input
            className="form-input width-100"
            type="text"
            value={information.AEO.email}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              const data = { ...information };
              const aeo = { ...data.AEO };
              aeo.email = e.target.value;
              data.AEO = aeo;
              setInformation(data);
            }}
          />
        </div>
      </div>
      <div className="form-td">
        <div className="field-label right-border width-115">
          Additional Engineer
        </div>
        <div className="field-input right-border width-235">
          <input
            className="form-input width-100"
            type="text"
            value={information.AET.name}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              const data = { ...information };
              const aet = { ...data.AET };
              aet.name = e.target.value;
              data.AET = aet;
              setInformation(data);
            }}
          />
        </div>
        <div className="field-label right-border">Phone</div>
        <div className="field-input right-border">
          <input
            className="form-input width-100"
            type="text"
            value={information.AET.phone}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              const data = { ...information };
              const aet = { ...data.AET };
              aet.phone = e.target.value;
              data.AET = aet;
              setInformation(data);
            }}
          />
        </div>
        <div className="field-label right-border">Email</div>
        <div className="field-input width-242">
          <input
            className="form-input width-100"
            type="text"
            value={information.AET.email}
            title="Manufacturer"
            data-field-name="Manufacturer"
            onChange={(e) => {
              const data = { ...information };
              const aet = { ...data.AET };
              aet.email = e.target.value;
              data.AET = aet;
              setInformation(data);
            }}
          />
        </div>
      </div>
    </>
  );
}
