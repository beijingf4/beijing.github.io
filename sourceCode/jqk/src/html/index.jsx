import React, { Component } from "react";
import { Provider } from "react-redux";
import Home from '../Login'
import Zc from '../Zc'
import store from '../store/index.js'
import {BrowserRouter,NavLink,Route} from 'react-router-dom'
export default class Html extends Component {
  render() {
    return <Provider store={store}>
    <BrowserRouter>
    <Route path='/' exact component={Home}/>
    <Route path='/zc' component={Zc}/>
      {/* <Home/> */}
      </BrowserRouter>
    </Provider>;
  }
}
