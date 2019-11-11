import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'; import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { todos, buckets } from './Reducers/Reducers';
import 'tachyons';

const logger = createLogger();

const reducers = combineReducers({
    todos,
    buckets
})

const initialState = {}

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();