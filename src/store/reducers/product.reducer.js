import { products } from '../../constants/data'

const initialState = {
    products,
    filteredProduct: [],
    selected: null
}

const ProductReducer = (state = initialState, action) => state

export default ProductReducer