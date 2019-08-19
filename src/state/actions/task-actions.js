import * as ACTIONS from '../../constants/task-constants';
import Axios from '../../Axios';

// actions that save inC  the state are prefixed with store
const storeTask = task => ({ type: ACTIONS.ADD_TASK, payload: task });

// this is an async sample using thunks
// we simulate the api save operation using a setTimeOut
export const saveTask = task => dispatch => {
  Axios.post('/login', task)
    .then(response => {
      dispatch(storeTask(response.data));
    })
    .catch(err => {
      console.log(err);
    });
};
