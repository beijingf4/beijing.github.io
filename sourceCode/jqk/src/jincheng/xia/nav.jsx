import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      boolean: "false",
      dis: "none",
      di: "none"
    };
  }
  hua = () => {
    // console.log(111);
    this.setState({
      boolean: !this.state.boolean,
      dis: this.state.boolean ? "block" : "none"
    });
  };
  render() {
    return (
      <div className="box">
        <ul>
          <li onClick={this.hua}>菜单</li>
          <div className="link-box" style={{ display: this.state.dis }}>
            <div className="link-box1">
              <div className="link-box2">
                <li>
                  <a onClick={this.hua}>首页</a>
                </li>
                <li>
                  <NavLink to="/home" activeClassName="link-nav">
                    我的主页
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/home2" activeClassName="link-nav">
                    退出账号
                  </NavLink>
                </li>
              </div>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}
