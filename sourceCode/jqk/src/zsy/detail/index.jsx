import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
 class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        const { id } = this.props.location.state
        axios.get('http://localhost:8088/ditail', { params: { id } }).then(res => {
            this.setState(() => {
                return res.data
            })
        })
    }
    render() {
        const {count,onAddCount}= this.props
        //  {/* 详情页 */ }
        return (
            <div style={{ fontSize: '25px' }}>
                <p>详情页</p>
                <p onClick={onAddCount}>点赞👍{count}</p>
                <div dangerouslySetInnerHTML={{ __html: this.state.body }}></div>
            </div >
        )
    }
}
const mapStateToProps = (state)=>state;
const mapDispatchToProps = (dispatch) => {
    return {
        onAddCount(){
            dispatch({
                type: 'onAddCount'
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail)