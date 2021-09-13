import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  // CFormGroup,
  // CInput,
  // CLabel,
  // CSelect,
  // CInputGroup,
  // CCardFooter,
  // CInputGroupPrepend,
  // CInputGroupText,
  // CFormText,
} from "@coreui/react";
import { CIcon } from "@coreui/icons-react";
import Translation from "../../../../app/Language/Translation";
// import WanderingCubes from "./WanderingCubes";
// import { TextMask, InputAdapter } from "react-text-mask-hoc";

// import Error from "./Error";

import CardSetupForm from "../../../../stripe/CardSetupForm";

const CreditCardDetails = (props) => {
  // const history = useHistory();
  // const [creditCardFormFilled, setCreditCardFormFilled] = useState(null);
  // const [name, setName] = useState("");
  // const [creditCardNumber, setCreditCardNumber] = useState(null);
  // const [month, setMonth] = useState(null);
  // const [year, setYear] = useState(null);
  // const [cvv, setCVV] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // return <CardSetupForm />;
  return (
    <>
      <CCard style={{ margin: "5rem", placeItems: "center" }}>
        <CCol col="2" className="mt-3">
          <CButton
            variant="ghost"
            color="success"
            onClick={() => props.history.goBack()}
            shape="square"
            size="sm"
            style={{ textAlign: "left" }}
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
          {(Translation.t("SETUP_YOUR_BILLINGS"), "Setup your billings")}
        </CCardHeader>
        <center>
          <CCol className="h6" style={{ color: "#17a2b8" }}>
            {
              (Translation.t("WE_DO_NOT_CHARGE_THIS_CARD_FOR_NEXT_14_DAYS"),
              "We do not charge this card for next 14 days.")
            }
            &nbsp;
            <div style={{ textDecoration: "underline", color: "#23282c" }}>
              {(Translation.t("CANCEL_ANYTIME"), "Cancel anytime.")}
            </div>
          </CCol>
        </center>
        <CCardHeader>
          {(Translation.t("CREDIT_CARD"), "Credit Card")}&nbsp;&nbsp;
          <small>{(Translation.t("FORM"), "Form")}</small>
        </CCardHeader>
        <CCardBody>
          <CForm
            action=""
            method="post"
            encType="multipart/form-data"
            className="form-horizontal"
          >
            <CRow>
              <CCol xs="12">
                <CardSetupForm />
                {/* <CFormGroup>
                  <CLabel htmlFor="name">
                    {(Translation.t("NAME"), "Name")}
                  </CLabel>
                  <CInput
                    id="name"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12">
                {/* <CFormGroup>
                  <CLabel htmlFor="ccnumber">
                    {
                      (Translation.t("CREDIT_CARD_NUMBER"),
                      "Credit Card Number")
                    }
                  </CLabel>
                  <CInput
                    id="ccnumber"
                    placeholder="0000 0000 0000 0000"
                    required
                    onChange={(e) => setCreditCardNumber(e.target.value)}
                  />
                </CFormGroup> */}
                {/*<CFormGroup>
                  <CLabel>Credit Card Number</CLabel>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText
                        onChange={(e) => setCreditCardNumber(e.target.value)}
                      >
                        <CIcon name="cil-credit-card" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <TextMask
                      mask={[
                        /\d/,
                        /\d/,
                        /\d/,
                        /\d/,
                        " ",
                        /\d/,
                        /\d/,
                        /\d/,
                        /\d/,
                        " ",
                        /\d/,
                        /\d/,
                        /\d/,
                        /\d/,
                        " ",
                        /\d/,
                        /\d/,
                        /\d/,
                        /\d/,
                      ]}
                      Component={InputAdapter}
                      className="form-control"
                    />
                  </CInputGroup>
                  <CFormText color="muted">ex. 9999 9999 9999 9999</CFormText>
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="ccmonth">
                    {(Translation.t("MONTH"), "Month")}
                  </CLabel>
                  <CSelect
                    custom
                    name="ccmonth"
                    id="ccmonth"
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="ccyear">
                    {(Translation.t("YEAR"), "Year")}
                  </CLabel>
                  <CSelect
                    custom
                    name="ccyear"
                    id="ccyear"
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="cvv">
                    {(Translation.t("CVV/CVC"), "CVV/CVC")}
                  </CLabel>
                  <CInput
                    id="cvv"
                    placeholder="123"
                    required
                    onChange={(e) => setCVV(e.target.value)}
                  />
                </CFormGroup> */}
              </CCol>
            </CRow>
          </CForm>
        </CCardBody>
        {/* <CCardFooter style={{ textAlign: "center" }}>
          <CButton
            type="submit"
            color="warning"
            size="lg"
            style={{ width: "20rem", margin: "2rem" }}
            onClick={handleSubmit}
          >
            {(Translation.t("Launch"), "Launch")}
          </CButton>
        </CCardFooter> */}
      </CCard>
    </>
  );
};

export default CreditCardDetails;
