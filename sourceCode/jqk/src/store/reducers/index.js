import { CHANGE_INPUT,PUSH_LIST,CHEBOX_ED,CHEBOX_ED2,REMOVE_LIST,REMOVE2_LIST } from '../actionTypes/home.js'


const defaultState = {
    inputValue: "",
    list:[],
    list2:[]
}
export default (state = defaultState, action) => {
    // console.log(action)
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_INPUT:
            newState.inputValue = action.value;
            return newState;
        case PUSH_LIST:
            if(newState.inputValue){
                const item ={
                    showflag:false,
                    text:newState.inputValue
                }
                  newState.list.push(item)                                
                  newState.inputValue=''
                } else{
                    alert('请输入内容')
                }
              return newState
        case CHEBOX_ED:
            // console.log(newState.list)
                // console.log(action.index)
                // console.log(action.value)
            if(action.value===true){
                newState.list[action.index].showflag=true;
                newState.list2.push(newState.list[action.index])
                newState.list=newState.list.filter(item=>{
                    if (item.showflag===false) {
                        return item
                    }
                })
            }
                return newState
         case  CHEBOX_ED2:
                // console.log(action.index)
                // console.log(action.value)
            if(action.value===false){
                newState.list2[action.index].showflag=false;
                newState.list.push(newState.list2[action.index])
                newState.list2=newState.list2.filter(item=>{
                    if (item.showflag===true) {
                        return item
                    }
                })
            }
                return newState
                case REMOVE_LIST:
                        if (newState.list) {
                            newState.list.splice(action.index,1)        
                            }
                    return newState
                case REMOVE2_LIST:
                        if (newState.list2) {
                            newState.list2.splice(action.index,1)        
                            }
                    return newState
        default:
            return state;
    }
}