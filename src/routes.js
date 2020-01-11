import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Main from "./pages/Main";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/dev/:id" component={Main} />
    </Switch>
  );
}
