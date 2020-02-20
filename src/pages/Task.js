import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as Action from '../state/actions/task-actions';

const classes = {
  home: 'w-12/12 m-auto ',
  content: 'flex flex-wrap sm:flex-no-wrap',
};

const mapStateToProps = state => ({
  tasks: state.task.tasks,
});

const mapDispatchToProps = dispatch => ({
  saveTask: task => dispatch(Action.saveTask(task)),
});

const HomeComponent = props => {
  const [taskText, saveTaskText] = useState('');

  const tasks = props.tasks.map(task => <div>{task.title}</div>);

  const saveTask = () => props.saveTask(taskText);

  return (
    <div className={classes.home}>
      <div>
        <span>TASKS:</span>
        {tasks}
      </div>

      <form>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */}
        <label>
          Add a Task
          <input
            type="text"
            value={taskText}
            onChange={event => saveTaskText(event.target.value)}
          />
          <button type="submit" onClick={saveTask}>
            Add Task
          </button>
        </label>
      </form>
    </div>
  );
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default Home;
