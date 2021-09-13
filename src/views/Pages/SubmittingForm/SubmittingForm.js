import React, { useState } from "react";
import Ecia from "./src/containers/Form/Ecia/index";
import axios from "axios";
// import ReCaptcha from "./reCaptcha";
import { uuid } from "uuidv4";

// import "./src/containers/Submit.css";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CRow,
  CCardFooter,
} from "@coreui/react";
import Translation from "../../../app/Language/Translation";

const Login = (props) => {
  let Id = null;
  const [formId, setFormId] = useState(null);
  const [upload, setUpload] = useState(null);
  const [proceed, setProceed] = useState(false);
  const [initstate, setInitState] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    const form = new FormData();
    Id = uuid();
    console.log(Id);
    setFormId(Id);
    form.append("ecia", upload);
    axios
      .post(`http://localhost:3002/api/public/upload/${Id}`, form)
      .then((res) => {
        console.log(res.data.data);
        setInitState(res.data.data);
        setProceed(true);
      })
      .catch(() => setProceed("error"));
  };

  return (
    <div style={{ marginTop: 0 }}>
      {proceed ? (
        <Ecia {...initstate} Id={formId} />
      ) : (
        <div
          className=" flex-row align-items-center"
          style={{ marginTop: "3rem" }}
        >
          <CContainer style={{ marginTop: 0 }}>
            <CRow style={{ marginTop: 0 }}>
              <CCol>
                <CCardGroup style={{ marginTop: 0 }}>
                  <CCard className="">
                    <CCardBody style={{ textAlign: "center", marginTop: 0 }}>
                      <CForm
                        encType="multipart/form-data"
                        style={{ marginTop: 0 }}
                      >
                        <h1>{(Translation.t("UPLOAD_PDF"), "Upload PDF")}</h1>
                        <p className="text-muted">Ecia PDF</p>
                        <br />
                        <br />
                        <CRow>
                          <CCol xs="12">
                            <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                <span
                                  class="input-group-text"
                                  id="inputGroupFileAddon01"
                                >
                                  Upload
                                </span>
                              </div>
                              <div class="custom-file">
                                <input
                                  type="file"
                                  class="custom-file-input"
                                  id="fileform"
                                  aria-describedby="inputGroupFileAddon01"
                                  onChange={(e) => setUpload(e.target.files[0])}
                                />
                                <label
                                  class="custom-file-label"
                                  for="inputGroupFile01"
                                >
                                  Choose
                                  file&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </label>
                              </div>
                            </div>
                          </CCol>
                          <br />
                          <br />

                          <CCardFooter
                            style={{
                              textAlign: "center",
                              marginBlockStart: "5rem",
                              marginLeft: "3rem",
                            }}
                          >
                            <CCol>
                              {/* <ReCaptcha /> */}
                              <CButton
                                type="submit"
                                color="warning"
                                size="lg"
                                style={{
                                  width: "20rem",
                                  margin: "2rem",
                                }}
                                onClick={submitHandler}
                              >
                                Submit
                              </CButton>
                            </CCol>
                          </CCardFooter>
                        </CRow>
                      </CForm>
                    </CCardBody>
                  </CCard>
                  <CCard
                    className="text-white bg-primary py-5 d-md-down-none"
                    // style={{ marginLeft: "11rem" }}
                  >
                    <CCardBody className="text-center">
                      <div>
                        <h2>Fill it online</h2>
                        <p>Ecia</p>
                        <CButton
                          color="primary"
                          className="mt-3"
                          active
                          tabIndex={-1}
                          onClick={() => props.history.push("/ecia")}
                          style={{
                            backgroundColor: "#fff",
                            color: "#321fdb",
                            fontSize: "2rem",
                            padding: "1rem",
                            width: "15rem",
                          }}
                        >
                          Start
                        </CButton>
                      </div>
                    </CCardBody>
                  </CCard>
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      )}
      {proceed === "error" ? "An error occured" : ""}
    </div>
  );
};

export default Login;
