import { ordersTypes } from "../types";

const { GET_ORDERS } = ordersTypes

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

        default:
            return state
    }
}

export default OrdersReducer