import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom";
import Content from "../content/index";
import "./index.scss";
class Shouye extends Component {
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
      <div>
        <div className='zh-header '>
          <NavLink to='/homesy'>
            <div className='zh-logo'>
              <img src={process.env.PUBLIC_URL + '/image/logo.png'} />
            </div>
          </NavLink>
          <NavLink to='/searchh'>
            <div className='zh-sea'>
              <img src={process.env.PUBLIC_URL + '/image/search.png'} style={{ width: '25px', height: '25px' }} />
              <p>搜索</p>
            </div>
          </NavLink>
          <NavLink to='/xiazai'>
            <div className='zh-xia'>
              <img src={process.env.PUBLIC_URL + '/image/xia.png'} className='zh-xia-img' />
            </div>
          </NavLink>
          {/* <NavLink > */}
          <div className='zh-meau' onClick={this.hua}>
            <img src={process.env.PUBLIC_URL + '/image/cai.png'} className='zh-meau-img' />
          </div>
          {/* </NavLink> */}
          <div className="link-box" style={{ display: this.state.dis }}>
            <div className="link-box1">
              <div className="link-box2">
                <li>
                  <a onClick={this.hua}>首页</a>
                </li>
                <li>
                  <NavLink to="/jinhome" activeClassName="link-nav">
                    我的主页
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/home" activeClassName="link-nav">
                    退出账号
                  </NavLink>
                </li>
              </div>
            </div>
          </div>
        </div>
        <Content />
      </div>
    )
  }
}
const mapStateTopProps = state => state;
const mapDispaatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateTopProps, mapDispaatchToProps)(Shouye)