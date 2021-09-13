import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
  CCardHeader,
  CInvalidFeedback,
} from "@coreui/react";

import { CIcon } from "@coreui/icons-react";
import Translation from "../../../../app/Language/Translation";
// import DuplicateProjectStep4 from "./DuplicateProjectStep4";
// import Auto from "./utilities/Dropdown";

import { Formik } from "formik";
import * as Yup from "yup";
// import { api } from "../../../../app/Utilities/api";
import Dropdown from "./utilities/Dropdown";

const validationSchema = function () {
  return Yup.object().shape({
    name: Yup.string()
      .min(2, `Name has to be at least 2 characters`)
      .required("Name is required"),
    company: Yup.string().required("Company Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    password: Yup.string()
      .min(6, `Password has to be at least ${6} characters!`)
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
        "Password must contain: numbers, uppercase and lowercase letters\n"
      )
      .required("Password is required"),
    strength: Yup.string().required("Strength is required"),
    designation: Yup.string().required("Designation is required"),
  });
};

const validate = (getValidationSchema) => {
  return (values) => {
    const validationSchema = getValidationSchema(values);
    try {
      validationSchema.validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      return getErrorsFromValidationError(error);
    }
  };
};

const getErrorsFromValidationError = (validationError) => {
  const FIRST_ERROR = 0;
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    };
  }, {});
};

const initialValues = {
  name: "",
  email: "",
  password: "",
  company: "",
  strength: "",
  designation: "",
};

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    console.log("User has been successfully saved!", values);
    setSubmitting(false);
  }, 2000);
  let formBody = new FormData();
  formBody.append("name", values.name);
  formBody.append("email", values.email);
  formBody.append("password", values.password);
  formBody.append("company", values.company);
  formBody.append("strength", values.strength);
  formBody.append("designation", values.designation);
  // setFormFilled(formBody);
  // setLoading(true);
  // setTimeout(() => {
  //   history.push("/creditcarddetails");
  // }, 3000);
};

// const findFirstError = (formName, hasError) => {
//   const form = document.forms[formName];
//   for (let i = 0; i < form.length; i++) {
//     if (hasError(form[i].name)) {
//       form[i].focus();
//       break;
//     }
//   }
// };

// const validateForm = (errors) => {
//   findFirstError("simpleForm", (fieldName) => {
//     return Boolean(errors[fieldName]);
//   });
// };

// const touchAll = (setTouched, errors) => {
//   setTouched({
//     name: true,
//     email: true,
//     password: true,
//     company: true,
//     strength: true,
//     designation: true,
//   });
//   validateForm(errors);
// };

const Onboarding = (props) => {
  // const history = useHistory();
  // const [planChosen] = useState(props.location.state);

  // read all registrations

  props.location.state !== undefined &&
    localStorage.setItem("planChosen", JSON.stringify(props.location.state));
  let planChosen = JSON.parse(localStorage.getItem("planChosen"));
  // const [name, setName] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  // const [company, setCompany] = useState(null);
  // const [strength, setStrength] = useState(null);
  // const [designation, setDesignation] = useState(null);
  // const [formFilled, setFormFilled] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let formBody = new FormData();
  //   formBody.append("name", name);
  //   formBody.append("email", email);
  //   formBody.append("password", password);
  //   formBody.append("company", company);
  //   formBody.append("strength", strength);
  //   formBody.append("designation", designation);
  //   setFormFilled(formBody);
  //   setLoading(true);
  //   setTimeout(() => {
  //     history.push("/creditcarddetails");
  //   }, 3000);
  // };

  // return Dropdown;
  return (
    <>
      {/* {loading ? <DuplicateProjectStep4 /> : null} */}
      {/* {loading ? <Error /> : null} */}
      <Formik
        initialValues={initialValues}
        validate={validate(validationSchema)}
        onSubmit={onSubmit}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <CCard style={{ margin: "5rem", placeItems: "center" }}>
            <Dropdown
              options={[
                "Papaya",
                "Persimmon",
                "Paw Paw",
                "Prickly Pear",
                "Peach",
                "Pomegranate",
                "Pineapple",
              ]}
            />
            <CCol col="2" className="mt-3">
              <CButton
                variant="ghost"
                color="success"
                onClick={() => props.history.goBack()}
                shape="square"
                size="sm"
              >
                <CIcon name="cil-arrow-left" />
                &nbsp;&nbsp;&nbsp;
                {(Translation.t("PREVIOUS"), "Previous")}
              </CButton>
            </CCol>
            <CCardHeader
              className="h4"
              style={{ color: "#17a2b8", display: "inline" }}
            >
              {planChosen}
            </CCardHeader>
            <CCardBody>
              <CForm
                action=""
                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
                onSubmit={handleSubmit}
                noValidate
                name="simpleForm"
              >
                <CCardHeader style={{ color: "#17a2b8" }}>
                  Personal&nbsp;&nbsp;
                  <small>Info</small>
                </CCardHeader>
                <br />
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input" sm="15" col="lg">
                      {(Translation.t("NAME"), "Name")}
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      size="lg"
                      placeholder="Enter Name"
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoFocus={true}
                      value={values.name}
                      required
                      invalid={touched.name && !!errors.name}
                      valid={!errors.name}
                      // onChange={(e) => setName(e.target.value)}
                      // required
                    />
                    <CInvalidFeedback>{errors.name}</CInvalidFeedback>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input" sm="15" col="lg">
                      {(Translation.t("EMAIL"), "Email")}
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      size="lg"
                      placeholder="Enter Email"
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      valid={!errors.email}
                      invalid={touched.email && !!errors.email}
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <CInvalidFeedback>{errors.email}</CInvalidFeedback>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="password" sm="15" col="lg">
                      Password
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      size="lg"
                      autoComplete="password"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      valid={!errors.password}
                      invalid={touched.password && !!errors.password}
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <CInvalidFeedback>{errors.password}</CInvalidFeedback>
                  </CCol>
                </CFormGroup>
              </CForm>
              <CCardHeader style={{ color: "#17a2b8" }}>
                Company&nbsp;&nbsp;
                <small>Info</small>
              </CCardHeader>
              <br />
              <CForm>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select" sm="15" col="lg">
                      {(Translation.t("COMPANY"), "Company")}
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect
                      size="lg"
                      custom
                      name="company"
                      id="company"
                      value={values.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      invalid={touched.company && !!errors.company}
                      valid={!errors.company}
                    >
                      <option value="" label="true">
                        {(Translation.t("PLEASE_SELECT"), "Select Company")}
                      </option>
                      <option value="0">
                        {
                          (Translation.t("TEXAS_INSTRUMENTS_INC"),
                          "Texas Instruments Inc.")
                        }
                      </option>
                      <option value="1">
                        {
                          (Translation.t("WESTERN_DIGITAL_CORP"),
                          "Western Digital Corp.")
                        }
                      </option>
                      <option value="2">
                        {
                          (Translation.t("JABIL_CIRCUIT_INC"),
                          "Jabil Circuit Inc.")
                        }
                      </option>
                    </CSelect>
                    <CInvalidFeedback>{errors.company}</CInvalidFeedback>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select" sm="15" col="lg">
                      {(Translation.t("STRENGTH"), "Strength")}
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect
                      size="lg"
                      custom
                      name="strength"
                      id="strength"
                      value={values.strength}
                      // value={values.strength}
                      // onChange={(e) => setStrength(e.target.value)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      invalid={touched.strength && !!errors.strength}
                      valid={!errors.strength}
                    >
                      <option value="" label="Select Strength" />
                      <option value="0">1-5</option>
                      <option value="1">6-10</option>
                      <option value="2">11-15</option>
                      <option value="3">15-20</option>
                      <option value="4">21-25</option>
                      <option value="5">26-30</option>
                      <option value="6">31-35</option>
                      <option value="7">36-40</option>
                      <option value="8">41-45</option>
                      <option value="9">46-50</option>
                    </CSelect>
                    <CInvalidFeedback>{errors.strength}</CInvalidFeedback>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select" sm="15" col="lg">
                      {(Translation.t("YOUR_DESIGNATION"), "Your Designation")}
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect
                      size="lg"
                      custom
                      name="designation"
                      id="designation"
                      value={values.designation}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                      invalid={touched.designation && !!errors.designation}
                      valid={!errors.designation}
                    >
                      <option value="" label="Select Designation">
                        {
                          (Translation.t("SELECT_DESIGNATION"),
                          "Select Designation")
                        }
                      </option>
                      <option value="0">
                        {
                          (Translation.t("CHIEF_EXECUTIVE_OFFICER"),
                          "Chief Executive Officer")
                        }
                      </option>
                      <option value="1">
                        {
                          (Translation.t("CHIEF_OPERATING_OFFICER"),
                          "Chief Operating Officer")
                        }
                      </option>
                      <option value="2">
                        {
                          (Translation.t("CHIEF_FINANCIAL_OFFICER"),
                          "Chief Financial Officer")
                        }
                      </option>
                    </CSelect>
                    <CInvalidFeedback>{errors.designation}</CInvalidFeedback>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter style={{ textAlign: "center" }}>
              <CButton
                type="submit"
                color="warning"
                size="lg"
                style={{ width: "20rem" }}
                onClick={handleSubmit}
                // disabled={isSubmitting || !isValid}
              >
                {/* {(Translation.t("LAUNCH"), "Launch")} */}
                {isSubmitting ? "Wait..." : "Launch"}
              </CButton>
            </CCardFooter>
          </CCard>
        )}
      />
    </>
  );
};

export default Onboarding;
