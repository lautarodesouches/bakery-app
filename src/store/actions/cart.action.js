import { URL_API } from "../../constants/data";
import { cartTypes } from "../types/cart.types";

const {ADD_TO_CART, CONFIRM_CART, REMOVE_ITEM } = cartTypes;

export const addToCart = item => ({
    type: ADD_TO_CART,
    item
})

export const removeItem = id => ({
    type: REMOVE_ITEM,
    itemId: id
})

export const confirmCart = cart => ({
    type: CONFIRM_CART,
    cart
})