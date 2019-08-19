import React, { Component } from "react";
import "./index.scss";
import { BrowserRouter, Route } from "react-router-dom";
// import Shouye from "../login-shouye";
import Shou from "./shou";
import Nav from "./nav";
export default class Html extends Component {
  render() {
    return (
      <div className="xia-box-box">
        <BrowserRouter>
          <Route path="/" exact component={Nav} />
          <Route path="/home1" component={Shou} />
          <Route path="/home2" component={() => <div>121</div>} />
        </BrowserRouter>
      </div>
    );
  }
}
