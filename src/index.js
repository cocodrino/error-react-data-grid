import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import history from './history';
// import './css/tailwind.css';
// import './sass/App.scss';
import './css/react-data-grid.css';
import Task from './pages/Task';
import Dashboard from './pages/Dashboard';
import store from './state/store';
import * as serviceWorker from './serviceWorker';
import Prueba from './pages/Prueba';

ReactDOM.render(
  <Provider store={store}>
    <div className="dashboard">
      <BrowserRouter history={history}>
        <Route exact path="/" component={Prueba} />
        <Route path="/sample" component={Task} />
        <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </div>
  </Provider>,

  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
