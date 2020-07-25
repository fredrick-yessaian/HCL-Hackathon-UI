import {GET_ORDER_DETAILS,GET_ALL_ORDER_DETAILS} from './../Actions/actionType'

const initState = {
    orderData: {}
}
const orderDetailsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ORDER_DETAILS:
        return state =  {
            ...state,
            orderData : action.orderData
        }
        case GET_ALL_ORDER_DETAILS:
        return state =  {
            ...state,
            allOrders : action.allOrders
        }


    default:
        return state
    }
}

export default orderDetailsReducer;