import { ordersTypes } from "../types";

const { GET_ORDERS, DELETE_ORDER } = ordersTypes

const initialState = {
    orders: [],
}

const OrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload
            }

        case DELETE_ORDER:
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== action.ordersId)
            }

        default:
            return state
    }
}

export default OrdersReducer