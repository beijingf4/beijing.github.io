import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import './index.scss'
import {changeInputAction,pushSearchListAction,pushHistoryListAction,enterHistoryListAction,deleteItemAction,clearItemAction} from '../store/actionCreator/search'
import {getBaidu} from '../api'
class Search extends Component {
    render() {
        const {searchData,input,onHandleChange,searchList,onPushHistoryList,historyList,onkeydown,onDeleteItem,onClearItem} =this.props
        return (
            <div>
                <div className='zh-search-h'>
                    <NavLink to="/home/tuijian">
                        <div className="logo">
                            知乎
                        </div>
                    </NavLink>
                    <NavLink to='/search'>
                        <div className='zh-sea'>
                            <input type='text' placeholder='🔍搜索知乎内容' value={input} onChange={onHandleChange} onKeyDown={onkeydown} />
                        </div>
                    </NavLink>
                    <NavLink to='/home/tuijian'>
                        <div className='zh-sea-del'>
                            <span>取消</span>
                        </div>
                    </NavLink>
                </div>
                {
                    searchList.length!==0 ? <ul className='search-list'>
                        {
                            searchList.map((item,index)=>{
                                return <li key={index} onClick={()=>onPushHistoryList(index)}>
                                    {item}
                                </li>
                            })
                        }
                    </ul>
                    : <div className='zh-search-main'>
                    <div className='z-s-m-s'>
                        <p className='z-s-m-s-title'>热搜</p>
                        <div className='z-s-m-s-list'>
                            {
                                searchData.map((item, index) => {
                                    return <div key={index} className='z-s-m-s-item'>
                                        <p className='z-s-m-s-i-index'>{item.id}</p>
                                        <div className='z-s-m-s-i-text'>
                                            <p>{item.title}</p>
                                            <p className='z-s-m-s-itemtext'>{item.text}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className='z-s-m-h'>
                        <div className='flex flex-bw'>
                        <p className='z-s-m-h-title'>搜索历史</p>
                        <p className='z-s-m-h-title' onClick={onClearItem}>清空</p>
                        </div>
                        <ul className='history-list'>
                            {
                                historyList && historyList.map((item,index)=>{
                            return <li key={index} className='flex flex-bw'>
                                {item}
                                <span onClick={()=>onDeleteItem(index)}>x</span>
                            </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state)=>state;
const mapDispatchToProps = (dispatch) => {
    return {
        onHandleChange({target}){
            dispatch(changeInputAction(target.value)) 
            if (target.value) {
                getBaidu({ value:target.value }).then(res => {
                  if (res.s.length) {
                    dispatch(pushSearchListAction(res.s));
                  }
                });
              }
        },
        onPushHistoryList(index){
            dispatch(pushHistoryListAction(index))
        },
        onkeydown(event){
            if(event.keyCode === 13){
                dispatch(enterHistoryListAction)
            }
        },
        onDeleteItem(index){
            dispatch(deleteItemAction(index))
        },
        onClearItem(){
            dispatch(clearItemAction)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)