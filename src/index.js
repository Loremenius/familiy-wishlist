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

const store = createStore(combineReducers({loginReducer}), applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store = {store}>
    <Router>
        <App />
    </Router>
</Provider>, 
document.getElementById('root'));

