import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import ResetPassword from "./screens/ResetPassword";
import Otp from "./screens/Otp";

function App(props) {
  return (
    <>
      <div className="section section-lr">
        <Switch>
          <Route
            path="/login"
            exact
            render={(history) => <Login {...history} />}
          />
          <Route
            path="/signup"
            exact
            render={(history) => <Signup {...history} />}
          />
          <Route
            path="/reset-password"
            exact
            render={(history) => <ResetPassword {...history} />}
          />
          <Route path="/otp" exact render={(history) => <Otp {...history} />} />
        </Switch>
      </div>
    </>
  );
}

export default App;
