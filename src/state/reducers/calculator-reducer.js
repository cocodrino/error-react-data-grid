import * as CONSTANTS from '../../constants/calculator-constants';

const initialState = {
  [CONSTANTS.ADDEND_A]: 0,
  [CONSTANTS.ADDEND_B]: 0,
  [CONSTANTS.RESULT]: 0,
};

function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.PLUS_OPERATION: {
      return {
        ...state,
        [CONSTANTS.RESULT]: state[CONSTANTS.ADDEND_A] + state[CONSTANTS.ADDEND_B],
      };
    }

    case CONSTANTS.MINUS_OPERATION: {
      return {
        ...state,
        [CONSTANTS.RESULT]: state[CONSTANTS.ADDEND_A] - state[CONSTANTS.ADDEND_B],
      };
    }

    case CONSTANTS.CHANGE_ADDEND: {
      const _state = { ...state };
      _state[action.payload.addend] = +action.payload.value;
      return _state;
    }

    default: {
      return state;
    }
  }
}

export default calculatorReducer;
