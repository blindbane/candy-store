import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VendorSignUp from "./components/VendorSignUp";
import Home from "./components/Home";

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/vendorsignup" component={VendorSignUp} />
      <Route component={VendorSignUp} />
    </Switch>
  </Router>
);

export default Root;
