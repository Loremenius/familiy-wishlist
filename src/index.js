import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { reducer as loginReducer } from './redux/reducers/LoginRegisterReducer';
import { reducer as wishlistReducer } from './redux/reducers/WishlistReducer'

const store = createStore(combineReducers({loginReducer,wishlistReducer}), applyMiddleware(thunk));

ReactDOM.render(
<Provider store = {store}>
    <Router>
        <App />
    </Router>
</Provider>, 
document.getElementById('root'));

