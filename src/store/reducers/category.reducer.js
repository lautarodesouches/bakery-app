import { categories } from '../../constants/data'

const initialState = {
    categories,
    selected: null
}

const CategoryReducer = (state = initialState, action) => state

export default CategoryReducer