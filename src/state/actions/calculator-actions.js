import * as ACTIONS from '../../constants/calculator-constants';

// IMPORTANT ==================================================================
// this is a counter intuitive example
// generally you'll prefer store the addend in the component state and only pass
// them to the state (check the task example for a more realistic sample)
export const storeAddend = (addend, value) => ({
  type: ACTIONS.CHANGE_ADDEND,
  payload: { addend, value },
});

// all operations that change the state are prefixed with store word
export const storePlusOperation = () => ({ type: ACTIONS.PLUS_OPERATION });

export const storeMinusOperation = () => ({ type: ACTIONS.MINUS_OPERATION });

// TODO IMPORTANT we use thunk for async actions

// this is an async sample using thunks
//
/*
export const someAsyncTask = task => dispatch => {
  Axios.post('/task', task)
    .then(response => {
      dispatch(storeTask(response.data));
    })
    .catch(err => {
      console.log(err);
    });
}; */
