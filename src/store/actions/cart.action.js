import { URL_API } from "../../constants/data";
import { cartTypes } from "../types";

const { ADD_TO_CART, CONFIRM_CART, REMOVE_ITEM, CLEAR_CART } = cartTypes;

export const addToCart = item => ({
    type: ADD_TO_CART,
    item
})

export const removeItem = id => ({
    type: REMOVE_ITEM,
    itemId: id
})

export const clearCart = () => ({
    type: CLEAR_CART
})

export const confirmCart = (cart, total) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}orders.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items: cart,
                    total
                })
            })

            const result = await response.json()

            console.log(result);

            dispatch({
                type: CONFIRM_CART,
                confirm: true
            })

        } catch (error) {
            console.log(error);
        }
    }
}