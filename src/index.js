import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import App from "./App";
import Users from "./users";
import Contact from "./contact";
import Notfound from "./notfound";
import NavBarTest from "./navbar";
import MerchantList from "./merchantlist";
import MerchantHomePage from "./merchanthomepage";
import Footer from "./footer";
import Loginscreen from "./Loginscreen";

const routing = (
  <Router>
    <div>
      <NavBarTest />

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/home" component={App} />
        <Route path="/merchantlist" component={MerchantList} />
        <Route path="/merchantHome" component={MerchantHomePage} />
        <Route path="/login" component={Loginscreen} />
        <Route component={Notfound} />
      </Switch>

      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
