import React, { Component } from 'react'
import './index.scss';
// import api from'../api/index.js';
import {NavLink} from 'react-router-dom';
import tool from '../tool/tool.js'

export default class Html extends Component {
    constructor(){
        super()
        this.state = {
            phone:'',
            yzm:''
        }
    }
    onHandleChange=({target})=>{
        this.setState({
            [target.name]: target.name==='checkBox'?target.checked:target.value
        })
        // console.log(target.value)
    }
    onSubmit=(pandName='dl')=>{
         // console.log(pandName)
         let data = tool(this.state,pandName)
         if (data.status) {
             console.log('这个时候 我们可以去请求登录接口')
             alert(data.msg)
             window.location.replace('/signin')
             // alert('登陆成功')
             window.location.replace('/home10')
         } else {
             // console.log(this.state.errcount)
             alert(data.msg)
         }
    }
    alert1=()=>{
        alert('验证码为123456')
    }
    render() {
        return (
            <div>
                <div className='login-header'>
                    <i className='iconfont icon-close'></i>
                    <p className='login-header-p1'>登录知乎</p>
                    <p className='login-header-p2'>发现更多可信赖的解答</p>
                </div>
                <div className='inputbox'>
                    <form>
                        <label className='phone-label-box'>
                            <div className='phoneleft'>
                               <div className='phoneleft-child'>
                               +86v
                               </div>
                            </div>
                            <input type="text" 
                            value={this.state.phone}
                            onChange={this.onHandleChange}
                            name='phone'
                            placeholder='输入手机号'/>
                        </label>
                        <label className='yzm-label-box'>
                            <input type="text"
                            name='yzm'
                            value={this.state.yzm}
                            onChange={this.onHandleChange}
                             placeholder='请输入六位验证码'/>
                            <div><button onClick={this.alert1}>发送验证码</button></div>
                        </label>
                        <p className='text-p-login'><a href="https://www.zhihu.com/terms">未注册手机验证后会自动登录</a></p>
                        <p className='text-p-login1'><a href="https://www.zhihu.com/terms">注册即同意《知乎协议》《隐秘保护指引》</a></p>
                        <label className='login-box'>
                            <button className='login-box-btn'
                            type='button'
                             onClick={()=>this.onSubmit('dl')}>登录</button>
                        </label>
                    </form>
                </div>
              <div className='a-box'>
              <a className='a' href="https://www.zhihu.com/account/appeal">密码登录</a>
                <a className='b' href="https://www.zhihu.com/account/appeal">需要帮助</a>
              </div>
                <div className='login-bottom-two'>
                    <a href="https://www.zhihu.com/term/privacy">社交账号登录</a>
                    <NavLink to='zc'>注册机构账号</NavLink>
                </div>
            </div>
        )
    }
}
