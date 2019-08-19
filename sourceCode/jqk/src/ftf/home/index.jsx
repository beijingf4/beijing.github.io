import React, { Component } from "react";
import "./index.scss";
import { NavLink, Route } from "react-router-dom";
import {connect} from 'react-redux'
import Common from "../common";

 class Home extends Component {
  render() {
    const { match,homeData } = this.props;
    return (
      <div className="home">
        <div className="home-header">
          <ul className="flex flex-bt">
            <li className="logo">
              <NavLink to="/home/tuijian">知乎</NavLink>
            </li>
            <li className="search">
              <NavLink to="/search">🔍搜索</NavLink>
            </li>
            <li className="signin">
              <NavLink to="/signin">注册或登录</NavLink>
            </li>
          </ul>
        </div>

        <div className="home-nav">
          <ul className="home-navbox flex">
            {homeData.map(item => {
              return (
                <li key={item.id} className="h-n-item">
                  <NavLink
                    to={match.url + item.to}
                    activeClassName="h-n-item-active"
                  >
                    {item.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="home-content">
          <Route path={`${match.url}/:id`} component={Common} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>state
export default connect(mapStateToProps)(Home);