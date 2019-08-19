import React from 'react';
import { connect } from 'react-redux';
import * as CONSTANT from '../constants/calculator-constants';
import * as Action from '../state/actions/calculator-actions';

const style = {
  content: 'grid justify-center items-center',
  label: 'text-xl block my-3',
  button: color => `w-12 text-3xl text-gray-800 px-4 mx-2 rounded-full ${color}`,
};

const mapStateToProps = state => {
  return {
    calculator: state.calculator,
  };
};

const mapDispatchToProps = dispatch => ({
  changeAddend: (addend, value) => dispatch(Action.storeAddend(addend, value)),
  plusOperation: () => dispatch(Action.storePlusOperation()),
  minusOperation: () => dispatch(Action.storeMinusOperation()),
});

const HomeComponent = props => {
  const changeAddend = addend => event => {
    if (event.target.validity.valid) props.changeAddend(addend, event.target.value);
  };

  return (
    <div className={style.content}>
      <div className="w-2/5 mx-auto pt-5">
        <span className="text-3xl">This is a basic example application</span>

        <div className="pt-5 w-3/4 mx-auto">
          {/* eslint-disable-next-line jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control */}
          <label className={style.label}>
            Addend A:
            <input
              className="rounded bg-gray-500 ml-3"
              type="text"
              pattern="[0-9]*"
              value={props.calculator[CONSTANT.ADDEND_A]}
              onChange={changeAddend(CONSTANT.ADDEND_A)}
            />
          </label>

          {/* eslint-disable-next-line jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control */}
          <label className={style.label}>
            Addend B:
            <input
              className="rounded bg-gray-500 ml-3 text-black"
              type="text"
              pattern="[0-9]*"
              value={props.calculator[CONSTANT.ADDEND_B]}
              onChange={changeAddend(CONSTANT.ADDEND_B)}
            />
          </label>

          <div className="block w-7 ml-24 mt-12">
            <button
              type="button"
              className={style.button('bg-electricalblue')}
              onClick={props.plusOperation}
            >
              +
            </button>

            <button
              type="button"
              className={style.button('bg-alternative')}
              onClick={props.minusOperation}
            >
              -
            </button>
          </div>

          {/* eslint-disable-next-line jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control */}
          <label>
            <span className="text-3xl">Result:</span>
            <span className="ml-3 text-6xl font-bold relative top-20">
              {props.calculator[CONSTANT.RESULT]}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

const Calculator = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);
export default Calculator;
