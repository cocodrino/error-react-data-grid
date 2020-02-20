// this package store the available metrics and which them are on or off

import * as CONSTANTS from '../../constants/metrics-constants';
import { projectLocalStorage } from '../../resources/projectLocalStorage';

const loadedLocalStorage = projectLocalStorage.load('metrics');

const initialState = loadedLocalStorage || {
  list: [
    { name: 'Price', active: true },
    { name: 'Price Hight', active: true },
    { name: 'Price Dist.', active: true },
    { name: 'Week Vol.', active: true },
    { name: 'Week Close', active: true },
    { name: 'Total Return', active: true },
    { name: 'Relative Strength', active: true },
    { name: 'SMA', active: true },
    { name: 'WMA', active: true },
    { name: 'AWT', active: true },
  ],
  data: [
    {
      stock: 'stockA',
      price: 20.3,
      price_hight: 12,
      price_dist: 23.4,
      week_vol: 23,
      week_close: 12,
      total_return: 43,
      relative_strength: 54,
      sma: 54,
      wma: 43,
      awt: 33,
    },
    {
      stock: 'ARA.JD',
      price: 20.3,
      price_hight: 12,
      price_dist: 23.4,
      week_vol: 23,
      week_close: 43,
      total_return: 43,
      relative_strength: 54,
      sma: 34,
      wma: 53,
      awt: 63,
    },
  ],
};

function MetricsReducer(state = initialState, action) {
  switch (action.type) {
    // payload {name:'stock_name', active: false}
    case CONSTANTS.TOGGLE_METRIC: {
      const { name } = action.payload;
      const newList = state.list.map(metric => {
        if (metric.name === name) return action.payload;
        return metric;
      });
      const newState = { list: newList };
      projectLocalStorage.save('metrics', newState, 10000);
      return newState;
    }

    default: {
      return state;
    }
  }
}

export default MetricsReducer;
