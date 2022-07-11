import { cart } from "../../constants/data/cart";
import { cartTypes } from "../types/cart.types";

const { ADD_TO_CART, CONFIRM_CART, REMOVE_ITEM } = cartTypes

const initialState = {
    items: [],
    total: 0
}

const sumTotal = list => list.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0)

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:

            let updatedCart = [];

            if (state.items.find((item) => item.id === action.item.id)) {
                updatedCart = state.items.map((item) => {
                    if (item.id === action.item.id) item.quantity += 1;
                    return item;
                });
            } else {
                const item = { ...action.item, quantity: 1 };
                updatedCart = [...state.items, item];
            }
            return {
                ...state,
                items: updatedCart,
                total: sumTotal(updatedCart),
            };

        case REMOVE_ITEM:

            const itemsFiltered = state.items.filter(item => item.id !== action.itemId)

            return {
                ...state,
                items: itemsFiltered,
                total: sumTotal(itemsFiltered)
            }

        default:
            return state
    }
}

export default CartReducer