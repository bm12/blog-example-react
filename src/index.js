import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './style/css/fonts.css';
import './style/css/bootstrap/bootstrap-reboot.css';
import './style/css/bootstrap/bootstrap-grid.css';
// import './style/bootstrap/bootstrap.css';

import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        <App />
    </Router>
), document.getElementById('root'));
// registerServiceWorker();
