import { shallow } from 'enzyme';
import React from 'react';
import MapDetail from '../index';

describe('<MapDetail/>', () => {
  it('renders correctly', () => {
    const props = {
      name: '',
      difficulty: '',
      shortDescription: '',
    };
    const wrapper = shallow(<MapDetail {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
