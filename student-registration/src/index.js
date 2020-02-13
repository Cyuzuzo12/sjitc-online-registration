import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
import App from './App';
import Auth from "./Components/Auth";

import * as serviceWorker from './serviceWorker';

    ReactDOM.render(<App auth={Auth.getAuth()}/>, document.getElementById('registration-root'));  

serviceWorker.unregister();
