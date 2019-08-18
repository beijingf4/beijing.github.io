import React, { Component } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default class Common extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // http://192.168.39.13:8088/
    axios.get("http://localhost:8088/zhihu").then(res => {
      this.setState(() => {
        return res.data;
      });
    });
  }

  render() {
    const { top_stories } = this.state;
    const id = this.props.match.params.id;
    let dom = "";
    switch (id) {
      case "tuijian":
        dom = "推荐";
        break;
      case "shenghuo":
        dom = "生活";
        break;
      case "jiaoyu":
        dom = "教育";
        break;
      case "yule":
        dom = "娱乐";
        break;
      case "qiche":
        dom = "汽车";
        break;
      case "jinrong":
        dom = "金融";
        break;
      case "zhichang":
        dom = "职场";
        break;
      case "keji":
        dom = "科技";
        break;
      case "tiyu":
        dom = "体育";
        break;
      default:
        dom = "推荐";
    }
    return (
      <div className="common-box">
        <p className="title">{dom}</p>
        <ul className="c-navbox">
          {top_stories &&
            top_stories.map((item, index) => {
              return (
                <li key={index} className="c-item">
                  <NavLink
                    to={{
                      pathname: "/ditail",
                      state: {
                        id: item.id
                      }
                    }}
                  >
                    <p>{item.title}</p>
                    <img width="150" src={item.image} alt="lala" />
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
