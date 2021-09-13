import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import "./2-Card-DetailedSettings.css";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {},
      "::placeholder": {
        color: "black",
      },
    },
    invalid: {},
  },
};
const CardField = ({ onChange }) => (
  <div className="FormRow">
    <CardElement options={CARD_OPTIONS} onChange={onChange} />
  </div>
);

const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) => (
  <div className="FormRow" style={{ fontSize: "1.09375rem" }}>
    <label htmlFor={id} className="FormRowLabel">
      {label}
    </label>
    <input
      className="FormRowInput"
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      style={{
        height: "calc(1.5em + 1rem + 2px)",
        padding: "0.5rem 1rem",
        fontSize: "1.09375rem",
        lineHeight: "1.5",
        borderRadius: "0.3rem",
        border: "1px solid",
        borderColor: "rgb(228, 231, 234)",
      }}
    />
  </div>
);

const SubmitButton = ({ processing, error, children, disabled }) => (
  <button
    className={`SubmitButton ${error ? "SubmitButton--error" : ""}`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? "Processing..." : children}
  </button>
);

const ErrorMessage = ({ children }) => (
  <div className="ErrorMessage" role="alert">
    <FontAwesomeIcon
      icon={faExclamationCircle}
      name="cil-exclamation-circle"
      style={{ color: "red", width: "1rem", height: "1rem" }}
    />
    {children}
  </div>
);

const ResetButton = ({ onClick }) => (
  <button type="button" className="ResetButton" onClick={onClick}>
    <svg width="32px" height="32px" viewBox="0 0 32 32">
      <path
        fill="#FFF"
        d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"
      />
    </svg>
  </button>
);

const CardSetupFormSettings = () => {
  const dispatch = useDispatch();
  const emailRedux = useSelector((state) => state.email);
  const passwordRedux = useSelector((state) => state.password);
  const idRedux = useSelector((state) => state.id);
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [billingDetails, setBillingDetails] = useState({
    // email: "",
    // phone: "",
    name: "",
  });

  useEffect(() => {
    console.log("idRedux", idRedux);
  }, []);

  const handleSubmit = async (event) => {
    console.log(emailRedux, passwordRedux, idRedux);
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    if (error) {
      elements.getElement("card").focus();
      return;
    }

    if (cardComplete) {
      setProcessing(true);
    }
    const stripe_response = await axios.post(
      "http://127.0.0.1:4000/onboard/billing/create",
      { _id: idRedux }
    );
    console.log(stripe_response.data);
    const result = await stripe.confirmCardSetup(
      stripe_response.data.client_secret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          // billing_details: {
          //   name: "",
          // },
        },
      }
    );

    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log(result);
    }

    // const payload = await stripePromise.createPaymentMethod({
    //   type: "card",
    //   card: elements.getElement(CardElement),
    //   billing_details: billingDetails,
    // });

    // setProcessing(false);

    // if (payload.error) {
    //   setError(payload.error);
    // } else {
    //   setPaymentMethod(payload.paymentMethod);
    // }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    // myHeaders.append(
    //   "Cookie",
    //   "connect.sid=s%3Ag6u-4mE_Et8XVuNG-4JZwsF8J4Io8Kx_.Amidfw%2BRZzp166WUbNS0Fn5KzkrTIuBQIrh8tZpfvrQ"
    // );

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", emailRedux);
    urlencoded.append("password", passwordRedux);
    urlencoded.append("mode", "email");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:3001/auth/login/coot/start", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error))
      .then(
        dispatch({
          type: "destroySignUpDetails",
        })
      )
      .then(history.push("/dashboard"));
  };

  const reset = () => {
    setError(null);
    setProcessing(false);
    setPaymentMethod(null);
    setBillingDetails({
      // email: "",
      // phone: "",
      name: "",
    });
  };

  return paymentMethod ? (
    <div className="Result">
      <div className="ResultTitle" role="alert">
        Payment successful
      </div>
      <div className="ResultMessage">
        Thanks for trying Stripe Elements. No money was charged, but we
        generated a PaymentMethod: {paymentMethod.id}
      </div>
      <ResetButton onClick={reset} />
    </div>
  ) : (
    <form className="Form" onSubmit={handleSubmit}>
      <fieldset className="FormGroup">
        {/* <Field
          label="Name"
          id="name"
          type="text"
          placeholder="Enter Name"
          required
          autoComplete="name"
          value={billingDetails.name}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, name: e.target.value });
          }}
        /> */}
      </fieldset>
      <fieldset className="FormGroup">
        <CardField
          onChange={(e) => {
            setError(e.error);
            setCardComplete(e.complete);
          }}
        />
      </fieldset>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      <SubmitButton processing={processing} error={error} disabled={!stripe}>
        ADD CARD
      </SubmitButton>
    </form>
  );
};

// const ELEMENTS_OPTIONS = {
//   fonts: [
//     {
//       cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
//     },
//   ],
// };

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51GqwO8CPlMN2Vv622bSuzRKBc23zKhv9uJ44e14wNk0C3uyUsTcevu1iaI6nTMTbJqfWxr5XvCgJ7Ir5nQ60F6zC00A1mWUosz"
);

const App = () => {
  return (
    <div className="AppWrapper">
      <Elements
        stripe={stripePromise}
        // options={ELEMENTS_OPTIONS}
      >
        <CardSetupFormSettings />
      </Elements>
    </div>
  );
};

export default App;
