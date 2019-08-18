import { CHANGE_INPUT,PUSH_SEARCH_LIST,PUSH_HISTORY_LIST,ENTER_HISTORY_LIST,DELETE_ITEM,CLEAR_ITEM} from '../actionType/search'
export const changeInputAction=(value)=>({
    type:CHANGE_INPUT,
    value
})
export const pushSearchListAction = (list)=>({
    type:PUSH_SEARCH_LIST,
    list
})
export const pushHistoryListAction = (index)=>({
    type : PUSH_HISTORY_LIST,
    index
})
export const enterHistoryListAction = {
    type: ENTER_HISTORY_LIST
}
export const deleteItemAction =(index)=>({
    type :DELETE_ITEM,
    index
})
export const clearItemAction = {
    type: CLEAR_ITEM
}