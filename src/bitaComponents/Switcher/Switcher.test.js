import React from 'react';
import { mount } from 'enzyme';
import Switcher from './Switcher';

describe('Switcher component', () => {
  let mockCallback;

  beforeEach(() => {
    mockCallback = jest.fn(x => x);
  });

  describe('Switcher with prop *allow-multiples-actives* set as false', () => {
    let switcherNotMultiplesOn;

    beforeEach(() => {
      switcherNotMultiplesOn = mount(
        <Switcher allow-multiples-actives={false} onChange={mockCallback}>
          <Switcher.Switch active>a</Switcher.Switch>
          <Switcher.Switch label="B" _key="b" />
        </Switcher>,
      );
    });

    it('with N nested Switcher.Switch must render N Swtichers components', () => {
      // console.log(switcherNotMultiplesOn.debug());
      expect(switcherNotMultiplesOn.find('.BitaSwitch')).toHaveLength(2);
      expect(switcherNotMultiplesOn.find('.BitaSwitcher')).toHaveLength(1);
    });

    describe('when you click the Switcher.Switch "a" TWO TIMES', () => {
      beforeEach(() => {
        switcherNotMultiplesOn
          .find('.react-switch-bg')
          .first()
          .simulate('click');
        switcherNotMultiplesOn
          .find('.react-switch-bg')
          .first()
          .simulate('click');
      });

      it('the callback function must be called two times', () => {
        // dos veces fue invocada la función pasada al callback
        expect(mockCallback.mock.calls.length).toEqual(2);
      });

      it('the first time the callback receibe a callback with both labels set to false {"a": false, "b": false}', () => {
        expect(mockCallback.mock.calls[0][0]).toEqual({ a: false, b: false });
      });

      it('the second time the callback receives an object with a set to true {"a": true, "b": false}', () => {
        expect(mockCallback.mock.calls[1][0]).toEqual({ a: true, b: false });
      });
    });

    describe('when you click the Switcher.Switch "a" and then Switcher.Switch "b"', () => {
      beforeEach(() => {
        switcherNotMultiplesOn
          .find('.react-switch-bg')
          .first()
          .simulate('click');
        switcherNotMultiplesOn
          .find('.react-switch-bg')
          .last()
          .simulate('click');
      });

      it('the callback must be called twice', () =>
        expect(mockCallback.mock.calls.length).toEqual(2));

      it('in the second call (index 1) the first argument must be the actual state {"a": false, "b": true}', () => {
        expect(mockCallback.mock.calls[1][0]).toEqual({ a: false, b: true });
      });
    });
  });

  describe('Switcher with prop *allow-multiples-actives* set as on', () => {
    let switcherMultiplesOn;

    beforeEach(() => {
      switcherMultiplesOn = mount(
        <Switcher allow-multiples-actives onChange={mockCallback}>
          <Switcher.Switch>a</Switcher.Switch>
          <Switcher.Switch label="b" />
        </Switcher>,
      );
    });

    it('with N nested Switcher.Switch must render N Swtichers components', () => {
      // console.log(switcherNotMultiplesOn.debug());
      expect(switcherMultiplesOn.find('.BitaSwitch')).toHaveLength(2);
      expect(switcherMultiplesOn.find('.BitaSwitcher')).toHaveLength(1);
    });

    it('when you click the Switcher.Switch "a" must run the onClick callback with an object with a key equal to true', () => {
      switcherMultiplesOn
        .find('.react-switch-bg')
        .first()
        .simulate('click');
      expect(mockCallback.mock.calls.length).toEqual(1);
      expect(mockCallback.mock.calls[0][0]).toEqual({ a: true, b: false });
    });

    it('when you click the Switcher.Switch "a" and then Switcher.Switch "b" "a" must keep in ON state', () => {
      switcherMultiplesOn
        .find('.react-switch-bg')
        .first()
        .simulate('click');
      switcherMultiplesOn
        .find('.react-switch-bg')
        .last()
        .simulate('click');
      expect(mockCallback.mock.calls.length).toEqual(2);
      expect(mockCallback.mock.calls[1][0]).toEqual({ a: true, b: true });
    });
  });
});
