import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ProductReducer, CategoryReducer, CartReducer, OrdersReducer, AuthReducer } from './reducers';

const rootReducer = combineReducers({
    products: ProductReducer,
    category: CategoryReducer,
    cart: CartReducer,
    orders: OrdersReducer,
    auth: AuthReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk));