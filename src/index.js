import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Footer from './components/Footer';
import './index.css';

ReactDOM.render(
 <Router history={hashHistory}>
 	<Route path="/" component={App}></Route>
 </Router>
, document.getElementById('app'));