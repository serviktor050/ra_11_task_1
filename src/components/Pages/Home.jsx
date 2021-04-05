import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Services from "./Services";
import ServicePage from "../Pages/ServicePage";

export default function Home() {
  return (
    <Router>
      <Redirect from="/" to="/services" />
      <Switch>
        <Route path="/services" render={(props) => <Services {...props} />} />
        <Route
          path="/services/:id"
          render={(props) => <ServicePage {...props} />}
        />
      </Switch>
    </Router>
  );
}
