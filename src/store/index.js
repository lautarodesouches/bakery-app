import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ProductReducer, CategoryReducer, CartReducer, OrdersReducer } from './reducers';

const rootReducer = combineReducers({
    products: ProductReducer,
    category: CategoryReducer,
    cart: CartReducer,
    orders: OrdersReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk));