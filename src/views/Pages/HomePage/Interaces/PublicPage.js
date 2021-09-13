import React from "react";
import { useHistory } from "react-router-dom";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";

import Translation from "../../../../app/Language/Translation";

const PublicPage = () => {
  const history = useHistory();

  const handleClick = (companyType) => {
    history.push({
      pathname: "/onboarding",
      state: companyType,
    });
  };
  return (
    <div>
      <CRow style={{ margin: "5rem", placeItems: "center" }}>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              {(Translation.t("FOR_MANUFACTURER"), "For Manufacturer")}
            </CCardHeader>

            <CCardBody>
              <CCard color="success" className="text-white text-center">
                <CCardBody>
                  <blockquote className="card-bodyquote">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <FontAwesomeIcon icon={faCheckCircle} />
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <FontAwesomeIcon icon={faCheckCircle} />
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <FontAwesomeIcon icon={faCheckCircle} />
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <FontAwesomeIcon icon={faCheckCircle} />
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <FontAwesomeIcon icon={faCheckCircle} />
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    <br />
                  </blockquote>
                </CCardBody>
              </CCard>
              {
                (Translation.t("100_PER_SEAT_PER_MONTH"),
                "100$ per seat per month")
              }
              <br />
              {
                (Translation.t("5_CHANNEL_PARTNERS_INCLUDED"),
                "5 Channel Partners included")
              }
              <br />
              {
                (Translation.t("UNLIMITED_REGISTRATION_PREMIUM"),
                "Unlimited registration premium")
              }
              <br />
              {
                (Translation.t("NO_LONG_TERM_CONTRACT"),
                "No Long term Contract")
              }
              <br />
              <br />
              <br />
              <CButton
                color="warning"
                size="lg"
                block
                onClick={() => handleClick("manufacturer")}
              >
                {(Translation.t("14_DAY_FREE_TRIAL"), "14 day free trial")}
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              {(Translation.t("FOR_DISTRIBUTOR"), "For Distributor")}
            </CCardHeader>
            <CCardBody>
              <CCard color="success" className="text-white text-center">
                <CCardBody>
                  <blockquote className="card-bodyquote">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <FontAwesomeIcon icon={faCheckCircle} />
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <FontAwesomeIcon icon={faCheckCircle} />
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <FontAwesomeIcon icon={faCheckCircle} />
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <FontAwesomeIcon icon={faCheckCircle} />
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <FontAwesomeIcon icon={faCheckCircle} />
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    <br />
                  </blockquote>
                </CCardBody>
              </CCard>
              {
                (Translation.t("100_PER_SEAT_PER_MONTH"),
                "100$ per seat per month")
              }
              <br />
              {
                (Translation.t("5_CHANNEL_PARTNERS_INCLUDED"),
                "5 Channel Partners included")
              }
              <br />
              {
                (Translation.t("UNLIMITED_REGISTRATION_PREMIUM"),
                "Unlimited registration premium")
              }
              <br />
              {
                (Translation.t("NO_LONG_TERM_CONTRACT"),
                "No Long term Contract")
              }
              <br />
              <br />
              <br />
              <CButton
                color="warning"
                size="lg"
                block
                onClick={() => handleClick("distributor")}
              >
                {(Translation.t("14_DAY_FREE_TRIAL"), "14 day free trial")}
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              {
                (Translation.t("FOR_SALES_REPRESNTATIVE"),
                "For Sales Representative")
              }
            </CCardHeader>
            <CCardBody>
              <CCard color="success" className="text-white text-center">
                <CCardBody>
                  <blockquote className="card-bodyquote">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <FontAwesomeIcon icon={faCheckCircle} />
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <FontAwesomeIcon icon={faCheckCircle} />
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <FontAwesomeIcon icon={faCheckCircle} />
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <FontAwesomeIcon icon={faCheckCircle} />
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <FontAwesomeIcon icon={faCheckCircle} />
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    <br />
                  </blockquote>
                </CCardBody>
              </CCard>
              {
                (Translation.t("100_PER_SEAT_PER_MONTH"),
                "100$ per seat per month")
              }
              <br />
              {
                (Translation.t("5_CHANNEL_PARTNERS_INCLUDED"),
                "5 Channel Partners included")
              }
              <br />
              {
                (Translation.t("UNLIMITED_REGISTRATION_PREMIUM"),
                "Unlimited registration premium")
              }
              <br />
              {
                (Translation.t("NO_LONG_TERM_CONTRACT"),
                "No Long term Contract")
              }
              <br />
              <br />
              <br />
              <CButton
                color="warning"
                size="lg"
                block
                onClick={() => handleClick("salesrepresentative")}
              >
                {(Translation.t("14_DAY_FREE_TRIAL"), "14 day free trial")}
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default PublicPage;
