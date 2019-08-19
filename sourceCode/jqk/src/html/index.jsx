import React, { Component } from "react";

import {Provider} from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import store from '../ftf/store'
import Home from '../ftf/home'
import Search from '../ftf/search'
import Ditail from '../ftf/ditail'
import Xiazai from '../ftf/xiazai'
import Login from '../Login'
import Zc from '../Zc'
import Shouye from '../zsy/shouye'
import Detail from '../zsy/detail'
import Searchsy from '../zsy/search'
import Shou from "../jincheng/xia/shou"

export default class Html extends Component {
  render() {
    return <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/signin" component={Login} />
          <Route path="/zc" component={Zc} />
          <Route path="/ditail" component={Ditail} />
          <Route path="/xiazai" component={Xiazai} />
          <Route path="/homesy" component={Shouye} />
          <Route path="/sydetail" component={Detail} />
          <Route path="/whome" component={Shou} />
          <Route path="/home2" component={() => <div>121</div>} />
          <Route path="/searchsy" component={Searchsy} />
          <Redirect exact from="/" to="/home/tuijian" />
        </Switch>
      </BrowserRouter>
    </Provider>;
  }
}
