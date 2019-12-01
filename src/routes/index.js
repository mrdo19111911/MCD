import React from "react";
import { BrowserRouter as Router, Switch, HashRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import FortuneTeller from "../containers/FortuneTeller";
import RateFortuneTeller from "../containers/RateFortuneTeller";
import NotFound from "../Not Found/NotFound";

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <PublicRoute exact path="/" component={FortuneTeller} />
          <PublicRoute
            exact
            path="/rate-fortune-teller/:id/"
            component={RateFortuneTeller}
          />
          <PublicRoute path="*" component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}
export default Routes;
