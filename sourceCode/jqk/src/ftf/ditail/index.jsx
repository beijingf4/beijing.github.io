import React, { Component } from "react";
import "./index.scss";
import axios from "axios";
import {NavLink} from 'react-router-dom'

export default class Ditail extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // http://192.168.39.13:8088/
    const id = this.props.history.location.state.id;
    axios.get("http://localhost:8088/ditail", { params: { id } }).then(res => {
      this.setState(() => {
        return res.data;
      });
    });
  }

  render() {
    return (
      <div className="ditail-box">
        <p className="title">详情页</p>
        <NavLink to='/xiazai'>点赞👍</NavLink>
        <div
          dangerouslySetInnerHTML={{
            __html: this.state.body
          }}
        />
      </div>
    );
  }
}
