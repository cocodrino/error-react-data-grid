import * as ACTIONS from '../../constants/metrics-constants';
import Axios from '../../Axios';

// payload type { name: 'Price', active: true }
export const toggleSwitch = payload => ({ type: ACTIONS.TOGGLE_METRIC, payload });
