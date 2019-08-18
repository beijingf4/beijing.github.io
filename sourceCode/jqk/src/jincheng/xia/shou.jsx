import React, { Component } from "react";
import "./index.scss";
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
export default class Shou extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Shou">
          <div className="Shou-box">
            <div className="Shou-box-top">
              <div className="Shou-box-top-content">
                <div className="Shou-box-img" />
                <div className="Shou-box-name">金橙</div>
                <div className="Shou-box-but">打开 app 编辑资料</div>
                <div className="Shou-box-bot flex ">
                  <div className="Shou-box-bot-g ">0 关注我的人</div>
                  <div className="Shou-box-bot-c " />
                  <div className="Shou-box-bot-g ">0 我关注的人</div>
                </div>
              </div>
            </div>
            <div className="Shou-box-text">
              <ul className=" Shou-box-text-ul flex ">
                <li>
                  <NavLink activeClassName="Shou-box-text-li" to="/home/dong">
                    {" "}
                    动态
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="Shou-box-text-li" to="/home/hui">
                    回答{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="Shou-box-text-li" to="/home/wen">
                    文章{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="Shou-box-text-li" to="/home/ti">
                    提问{" "}
                  </NavLink>
                </li>
              </ul>
              <Switch>
                <Route
                  path="/home/dong"
                  component={() => {
                    return <div>111</div>;
                  }}
                />
                <Route
                  path="/home/hui"
                  component={() => {
                    return <div>222</div>;
                  }}
                />
                <Route
                  path="/home/wen"
                  component={() => {
                    return <div>333</div>;
                  }}
                />
                <Route
                  path="/home/ti"
                  component={() => {
                    return <div>444</div>;
                  }}
                />
                <Redirect to="/home/dong" />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
