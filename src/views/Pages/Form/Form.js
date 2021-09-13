import React, { useMemo, useState } from "react";

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CInvalidFeedback,
  CRow,
  CSelect,
} from "@coreui/react";

import {
  faBuilding,
  faCalendarAlt,
  faCarBattery,
  faChair,
  faCogs,
  faGasPump,
  faRoad,
  faTachometerAlt,
  faUserFriends,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Formik } from "formik";
import * as Yup from "yup";
import "react-select/dist/react-select.min.css";

const validationSchema = (values) => {
  return Yup.object().shape({
    kilometersDriven: Yup.number("Please provide kilometers driven")
      .typeError("Kilometers Driven must be a number")
      .min(0, "Must be more than 0")
      .max(1000000, "Must be less than 10 lakhs")
      .required("Kilometers Driven is required"),
    seatingCapacity: Yup.number("Please provide seating capacity")
      .typeError("Seating Capacity must be a number")
      .min(1, "Must be more than 1")
      .max(10, "Must be less than 10")
      .required("Seating Capacity is required"),
    mileage: Yup.number("Please provide mileage")
      .typeError("Mileage must be a number")
      .min(0, "Must be more than 0")
      .max(100, "Must be less than hundred")
      .required("Mileage is required"),
    engineCapacity: Yup.number("Please provide engine capacity")
      .typeError("Engine Capacity must be a number")
      .min(0, "Must be more than 0")
      .max(5000, "Must be less than 5000")
      .required("Engine Capacity is required"),
    ratedPower: Yup.number("Please provide rated power")
      .typeError("Rated Power must be a number")
      .min(0, "Must be more than 0")
      .max(5000, "Must be less than 5000")
      .required("Rated Power is required"),
  });
};

const validate = (getValidationSchema) => {
  return (values) => {
    const schema = getValidationSchema(values);
    try {
      schema.validateSync(values, { abortEarly: false });
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
  kilometersDriven: "",
  seatingCapacity: "",
  mileage: "",
  engineCapacity: "",
  ratedPower: "",
};

const Form = () => {
  const [year, setYear] = useState(null);
  const [previousOwners, setpPreviousOwners] = useState(null);
  const [fuelType, setFuelType] = useState(null);
  const [sellerType, setSellerType] = useState(null);
  const [transmissionType, setTransmissionType] = useState(null);

  const onSubmit = (values, { setSubmitting, setErrors }) => {
    values.year = year;
    values.previousOwners = previousOwners;
    values.fuelType = fuelType;
    values.sellerType = sellerType;
    values.transmissionType = transmissionType;

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      console.log("User has been successfully saved!", values);
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <Formik
                  enableReinitialize={true}
                  validateOnMount={false}
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
                    isValid,
                  }) => (
                    <CForm onSubmit={handleSubmit} noValidate name="simpleForm">
                      <h1>Vehica</h1>
                      <p className="text-muted">
                        Get a fair market price for your car
                      </p>

                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <FontAwesomeIcon icon={faRoad} />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="text"
                          placeholder="Kilometers Driven"
                          name="kilometersDriven"
                          id="kilometersDriven"
                          valid={!errors.kilometersDriven}
                          invalid={
                            touched.kilometersDriven &&
                            !!errors.kilometersDriven
                          }
                          required
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.kilometersDriven}
                        />
                        <CInvalidFeedback>
                          {errors.kilometersDriven}
                        </CInvalidFeedback>
                      </CInputGroup>

                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <FontAwesomeIcon icon={faChair} />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="text"
                          placeholder="Seating Capacity"
                          name="seatingCapacity"
                          id="seatingCapacity"
                          valid={!errors.seatingCapacity}
                          invalid={
                            touched.seatingCapacity && !!errors.seatingCapacity
                          }
                          required
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.seatingCapacity}
                        />
                        <CInvalidFeedback>
                          {errors.seatingCapacity}
                        </CInvalidFeedback>
                      </CInputGroup>

                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <FontAwesomeIcon icon={faTachometerAlt} />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="text"
                          placeholder="Mileage"
                          name="mileage"
                          id="mileage"
                          valid={!errors.mileage}
                          invalid={touched.mileage && !!errors.mileage}
                          required
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.mileage}
                        />
                        <CInvalidFeedback>{errors.mileage}</CInvalidFeedback>
                      </CInputGroup>

                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <FontAwesomeIcon icon={faCogs} />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="text"
                          placeholder="Engine Capacity (cc)"
                          name="engineCapacity"
                          id="engineCapacity"
                          valid={!errors.engineCapacity}
                          invalid={
                            touched.engineCapacity && !!errors.engineCapacity
                          }
                          required
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.engineCapacity}
                        />
                        <CInvalidFeedback>
                          {errors.engineCapacity}
                        </CInvalidFeedback>
                      </CInputGroup>

                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <FontAwesomeIcon icon={faCarBattery} />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="text"
                          placeholder="Rated Power (hp)"
                          name="ratedPower"
                          id="ratedPower"
                          valid={!errors.ratedPower}
                          invalid={touched.ratedPower && !!errors.ratedPower}
                          required
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.ratedPower}
                        />
                        <CInvalidFeedback>{errors.ratedPower}</CInvalidFeedback>
                      </CInputGroup>

                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CSelect
                          custom
                          onChange={(e) => setYear(e.target.value)}
                          name="year"
                          id="year"
                        >
                          <option value="">Year</option>
                          <option value="2013">2013</option>
                          <option value="2014">2014</option>
                          <option value="2015">2015</option>
                          <option value="2016">2016</option>
                          <option value="2017">2017</option>
                          <option value="2018">2018</option>
                          <option value="2019">2019</option>
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                        </CSelect>
                      </CInputGroup>

                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <FontAwesomeIcon icon={faUserFriends} />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CSelect
                          custom
                          name="previousOwners"
                          id="previousOwners"
                          onChange={(e) => setpPreviousOwners(e.target.value)}
                        >
                          <option>Number of Previous Owners</option>
                          <option value="One">One</option>
                          <option value="Two">Two</option>
                          <option value="Three">Three</option>
                          <option value="Four">Four</option>
                          <option value="More than Four (Test Drive Vehichle)">
                            More than Four (Test Drive Vehichle)
                          </option>
                        </CSelect>
                      </CInputGroup>

                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <FontAwesomeIcon icon={faGasPump} />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CSelect
                          custom
                          name="fuelType"
                          id="fuelType"
                          onChange={(e) => setFuelType(e.target.value)}
                        >
                          <option value="">Fuel Type</option>
                          <option value="Petrol">Petrol</option>
                          <option value="Diesel">Diesel</option>
                          <option value="CNG">CNG</option>
                          <option value="LPG">LPG</option>
                        </CSelect>
                      </CInputGroup>

                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <FontAwesomeIcon icon={faBuilding} />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CSelect
                          custom
                          name="sellerType"
                          id="sellerType"
                          onChange={(e) => setSellerType(e.target.value)}
                        >
                          <option value="">Seller Type</option>
                          <option value="Dealership">Dealership</option>
                          <option value="Private Owner">Private Owner</option>
                          <option value="Trustmark Dealer">
                            Trustmark Dealer
                          </option>
                        </CSelect>
                      </CInputGroup>

                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <FontAwesomeIcon icon={faWrench} />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CSelect
                          custom
                          name="transmissionType"
                          id="transmissionType"
                          onChange={(e) => setTransmissionType(e.target.value)}
                        >
                          <option>Transmission Type</option>
                          <option value="Manual">Manual</option>
                          <option value="Automatic">Automatic</option>
                        </CSelect>
                      </CInputGroup>

                      <CButton
                        type="submit"
                        color="primary"
                        block
                        className="mr-1"
                        disabled={isSubmitting || !isValid}
                      >
                        {isSubmitting ? "Wait..." : "Calculate Selling Price"}
                      </CButton>
                    </CForm>
                  )}
                />
              </CCardBody>
              <CCardFooter className="p-4">
                <h3 className="display-1" style={{ fontSize: "1rem" }}>
                  Predicted Value: <mark>$ 10,000/- </mark>
                </h3>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Form;
