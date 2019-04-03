import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import reducers from './reducers';

import './style/css/fonts.css';
import './style/css/bootstrap/bootstrap-reboot.css';
import './style/css/bootstrap/bootstrap-grid.css';
// import './style/bootstrap/bootstrap.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


const extension = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = extension && extension();

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        devtoolMiddleware,
    ),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
// TODO: add registerSW after end development
registerServiceWorker();
