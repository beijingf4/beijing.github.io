import {CHANGE_INPUT,PUSH_LIST,CHEBOX_ED,REMOVE_LIST,REMOVE2_LIST,CHEBOX_ED2} from '../actionTypes/home.js'

export const changeInputAction = (value) =>({
    type:CHANGE_INPUT,
    value
})

export const onPushAction = (index) =>({
    type:PUSH_LIST,
    index
})
export const onCheckboxAction = (value,index) =>({
    type:CHEBOX_ED,
    value,
    index
})
export const onCheckboxAction2 = (value,index) =>({
    type:CHEBOX_ED2,
    value,
    index
})
export const onRemoveAction = () =>({
    type:REMOVE_LIST
})
export const onRemoveAction2 = () =>({
    type:REMOVE2_LIST
})
