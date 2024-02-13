import { createStore, applyMiddleware } from 'redux';
import {thunk,withExtraArgument} from 'redux-thunk';
import ShopApp from '../reducers/index'
const store =  createStore(ShopApp,applyMiddleware(thunk));
export default store;