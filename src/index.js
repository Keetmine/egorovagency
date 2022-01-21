import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./store";
import App from './app';
import './index.css';
import './public/styles/app.scss';

const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);