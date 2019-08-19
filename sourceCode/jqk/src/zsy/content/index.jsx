import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
import axios from 'axios'
export default class Content extends Component {
    constructor() {
        super()
        this.state = {
            top_stories: []
        }
    }
    componentDidMount() {
        // http://192.168.36.115:8088/zhihu
        axios.get('http://localhost:8088/zhihu').then(res => {
            this.setState(() => {
                console.log(res.data)
                return res.data
            })
        })
    }
    render() {
        const { top_stories } = this.state;
        return (
            <div className='zhihu-con'>
                {
                    top_stories && top_stories.map((item) => {
                        return <NavLink key={item.id} to={{
                            pathname: '/sydetail',
                            state: {
                                id: item.id
                            }
                        }}>
                            <div >
                                <p className='zhihu-con-p'>{item.title}</p>
                                <img className='zhihu-con-img' src={item.image} />
                            </div>
                        </NavLink>
                    })
                }
            </div>
        )
    }

}
