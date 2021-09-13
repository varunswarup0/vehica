import React, { useState } from "react";
import PublicPage from "./Interaces/PublicPage.js";
import Onboarding from "./Interaces/Onboarding";
import CreditCardDetails from "./Interaces/CreditCardDetails";
// import DuplicateProjectStep4 from "./Interaces/DuplicateProjectStep4";

import { Route } from "react-router-dom";

//PublicPage Interface props
const planChosenState = null;
//CreditCardDetails Interface props

//DuplicateProjectStep4 Interface props
const creditCardFormFilledState = {
  name: "null",
  creditCardNumber: null,
  month: null,
  year: null,
  cvv: null,
};

const HomePage = (props) => {
  const [interfaces, setInterfaces] = useState(1);
  const [planChosen, setPlanChosen] = useState(
    props.planChosen || planChosenState
  );
  const [formFilled, setFormFilled] = useState(
    props.formFilled || formFilledState
  );
  const [creditCardFormFilled, setCreditCardFormFilled] = useState(
    props.creditCardFormFilled || creditCardFormFilledState
  );
  const DefaultLayout = React.lazy(() =>
    import("../../../containers/DefaultLayout")
  );
  switch (interfaces) {
    case 1:
      return (
        <PublicPage
          setPlanChosen={(planChosen) => setPlanChosen(planChosen)}
          setInterfaces={(interfaces) => setInterfaces(interfaces)}
        />
      );
    case 2:
      return (
        <Onboarding
          setFormFilled={(formFilled) => setFormFilled(formFilled)}
          setInterfaces={(interfaces) => setInterfaces(interfaces)}
          planChosen={planChosen}
        />
      );
    case 3:
      return (
        <CreditCardDetails
          setCreditCardFormFilled={(creditCardformFilled) =>
            setCreditCardFormFilled(creditCardformFilled)
          }
          setInterfaces={(interfaces) => setInterfaces(interfaces)}
          formFilled={formFilled}
        />
      );
    case 4:
      return <DefaultLayout {...props} />;

    default:
      return (
        <PublicPage setPlanChosen={(planChosen) => setPlanChosen(planChosen)} />
      );
  }
};

export default HomePage;
