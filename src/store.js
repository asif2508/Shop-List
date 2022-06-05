import thunk from 'redux-thunk';
import shopsReducer from './states/reducers/shopsReducers';
const {createStore, applyMiddleware} = require("redux");
const store = createStore(shopsReducer, applyMiddleware(thunk));


export default store;