import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { HashRouter ,Route} from 'react-router-dom'
import Home from "@/pages/Home";
// import RouteConfig from '@/router/Router.js';

ReactDOM.render(
  <HashRouter>
    <Route exact path="/" component={Home}/>
  </HashRouter>
  ,document.getElementById('root'),
);
