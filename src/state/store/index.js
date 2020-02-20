import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import calculatorReducer from '../reducers/calculator-reducer';
import taskReducer from '../reducers/task-reducer';
import MetricsReducer from '../reducers/metrics-reducer';
import { sampleMiddleware } from '../../sample-middleware';

const store = createStore(
  combineReducers({ calculator: calculatorReducer, task: taskReducer, metrics: MetricsReducer }),
  composeWithDevTools(applyMiddleware(thunk, sampleMiddleware)),
);
export default store;
