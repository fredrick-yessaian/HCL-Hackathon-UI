import {getOrderDetails,getAllOrderDetails} from './../StoreApi/foodApi';
import {GET_ORDER_DETAILS,GET_ALL_ORDER_DETAILS} from './actionType';

export const getEmpActionCreator = (id) => {
    return (dispatch, getState) => {
        return getOrderDetails(id)
            .then((data) => {
                if(data.status === 200){
                    dispatch({ type: GET_ORDER_DETAILS, orderData: data.data })
                    return Promise.resolve()
                }
                else if(data.status >= 400){
                    dispatch({ type: GET_ORDER_DETAILS, orderData: {} })
                    return Promise.reject()
                }
            },
            error =>{
                console.log(error,'error')
                dispatch({ type: GET_ORDER_DETAILS, orderData: {} })
                return Promise.reject()
            }
        )
            .catch(err => {throw err})
        }
    }

     

    export const getAllOrdersActionCreator = () => {
        return (dispatch, getState) => {
            return getAllOrderDetails()
                .then((data) => {
                    if(data.status === 200){
                        dispatch({ type: GET_ALL_ORDER_DETAILS, allOrders: data.data })
                        return Promise.resolve()
                    }
                    else if(data.status >= 400){
                        dispatch({ type: GET_ALL_ORDER_DETAILS, allOrders: {} })
                        return Promise.reject()
                    }
                },
                error =>{
                    console.log(error,'error')
                    dispatch({ type: GET_ALL_ORDER_DETAILS, allOrders: {} })
                    return Promise.reject()
                }
            )
                .catch(err => {throw err})
            }
        }
    
        