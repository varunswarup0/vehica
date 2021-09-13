import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";

const loading = (
  <div
    className="sk-wandering-cubes"
    style={{ fontSize: "200rem", marginTop: "20rem", placeItems: "center" }}
  >
    <div className="sk-cube sk-cube1"></div>
    <div className="sk-cube sk-cube2"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
// const Login = React.lazy(() => import("./views/Pages/Login"));
// const Register = React.lazy(() => import("./views/Pages/Register"));
// const Page404 = React.lazy(() => import("./views/Pages/Page404"));
// const Page500 = React.lazy(() => import("./views/Pages/Page500"));
const FollowUps = React.lazy(() => import("./views/FollowUps/index"));
const SubmittingForm = React.lazy(() =>
  import("./views/Pages/SubmittingForm/SubmittingForm")
);
//Vehica Pages
const PublicPage = React.lazy(() =>
  import("./views/Pages/HomePage/Interaces/PublicPage")
);
const Onboarding = React.lazy(() =>
  import("./views/Pages/HomePage/Interaces/Onboarding")
);
const Launch = React.lazy(() =>
  import("./views/Pages/HomePage/Interaces/Launch")
);
const CreditCardDetails = React.lazy(() =>
  import("./views/Pages/HomePage/Interaces/CreditCardDetails")
);
const Ecia = React.lazy(() =>
  import("./views/Pages/SubmittingForm/src/containers/Form/Ecia/index")
);
// const Login = React.lazy(() =>
//   import("./views/Pages/SignUp/src/screens/Login")
// );
// const Login = React.lazy(() =>
//   import("./views/Pages/Login/Login.js")
// );
const Form = React.lazy(() =>
  import("./views/Pages/Form/Form")
);
const Signup = React.lazy(() =>
  import("./views/Pages/SignUp/src/screens/Signup")
);
const Otp = React.lazy(() => import("./views/Pages/SignUp/src/screens/Otp"));
const ValidationForms = React.lazy(() => import("./views/Forms/ValidationForms/ValidationForms.js"));
// const FollowUps = React.lazy(() => import("./views/FollowUps/index"));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            {/* <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            /> */}
            {/* <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            /> */}
            {/* <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            /> */}
            {/* <Route
              exact
              path="/submittingFormPublic"
              name="Submitting Form"
              render={(props) => <SubmittingForm {...props} />}
            />
            <Route
              exact
              path="/ecia"
              name="Ecia"
              render={(props) => <Ecia {...props} />}
            />
            <Route
              exact
              path="/creditCardDetails"
              name="Credit Card Details"
              render={(props) => <CreditCardDetails {...props} />}
            />
            <Route
              exact
              path="/onboarding"
              name="Onboarding"
              render={(props) => <Onboarding {...props} />}
            />
            <Route
              exact
              path="/launch"
              name="Launch"
              render={(props) => <Launch {...props} />}
            />
            <Route
              exact
              path="/followupsPublic"
              name="Follow Ups"
              render={(props) => <FollowUps {...props} />}
            />
            <Route
              exact
              path="/publicPage"
              name="Public Page"
              render={(props) => <PublicPage {...props} />}
            />
            <Route
              exact
              path="/signup"
              name="Signup"
              render={(props) => <Signup {...props} />}
            />
            <Route
              exact
              path="/login"
              name="Login"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/otp"
              name="Otp"
              render={(props) => <Otp {...props} />}
            /> */}
            {/* <Route
              name="Home"
              path="/"
              render={(props) => <DefaultLayout {...props} />}
            /> */}
             <Route
              name="Home"
              path="/"
              render={(props) => <Form {...props} />}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
