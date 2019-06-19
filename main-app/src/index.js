import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as singleSpa from 'single-spa';
import {registerReactApp} from "./apps/react-app";
import {registerAngularApp} from "./apps/angular-app";
import { BrowserRouter as Router} from "react-router-dom";
ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));


registerReactApp();
registerAngularApp();

singleSpa.start();
