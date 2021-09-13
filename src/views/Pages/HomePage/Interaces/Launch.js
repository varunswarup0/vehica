import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CButton, CCard, CCardFooter } from "@coreui/react";

const Launch = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", "varunswarup0@gmail.com");
    urlencoded.append("password", "1234");
    urlencoded.append("mode", "email");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
      credentials: "include",
    };

    const payload = {
      email: "varunswarup0@gmail.com",
      password: "1234",
      // companyId: "5ee9c6dbce1f8b1b7cc5492a",
      companyName: "whirpool",
      companyType: "salesrep",
    };

    console.log("payload: ", payload);
    await fetch("http://127.0.0.1:3001/auth/login/coot/start", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log("result: ", result))
      .catch((error) => console.log("error: ", error))
      .then(() =>
        dispatch({
          type: "setSignUpDetails",
          payload: payload,
        })
      )
      .then(history.push("/dashboard"));
  };

  return (
    <>
      <CCard style={{ margin: "3rem", placeItems: "center" }}>
        <CCardFooter style={{ textAlign: "center" }}>
          <CButton
            type="submit"
            color="warning"
            size="lg"
            style={{ width: "20rem" }}
            onClick={handleSubmit}
          >
            LAUNCH
          </CButton>
        </CCardFooter>
      </CCard>
    </>
  );
};

export default Launch;
