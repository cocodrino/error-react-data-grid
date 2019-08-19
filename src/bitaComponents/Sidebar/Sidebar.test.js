import React from 'react';

import { mount } from 'enzyme';
import Sidebar from './Sidebar';
import index from './test_rsc/Icons/global-network.svg';
import users from './test_rsc/Icons/analysis.svg';

describe('Sidebar component', () => {
  let wrapper;
  let mockCallback;

  beforeEach(() => {
    mockCallback = jest.fn(x => x);

    wrapper = mount(
      <Sidebar>
        <Sidebar.Button label="Index" image={index} onClick={mockCallback} />
        <Sidebar.Button label="User" image={users} onClick="" />
      </Sidebar>,
    );
  });

  it('with N nested SidebarButtons must render N functional buttons', () => {
    // console.log(wrapper.debug());
    expect(wrapper.find('.sidebarButton')).toHaveLength(2);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(2);
  });

  it('must render correctly the images', () => {
    expect(wrapper.contains(<img src="analysis.svg" alt="User" className="img" />)).toEqual(true);
  });

  it("must run the callback passed to SidebarButton when it's clicked", () => {
    wrapper
      .find('.sidebarButton')
      .first()
      .simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
