import React, { Component } from 'react'
import './index.scss'
export default class Xiazai extends Component {
    render() {
        return (
            <div className='zh-xiazai'>
                <img src={process.env.PUBLIC_URL + '/image/app.png'} />
            </div>
        )
    }
}
