import * as ACTIONS from '../../constants/task-constants';

const initialState = {
  tasks: [],
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_TASK: {
      return { ...state, tasks: [...state.tasks, action.payload.task] };
    }

    default:
      return state;
  }
}

export default taskReducer;
