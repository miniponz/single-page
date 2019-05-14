import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Dog Compnent', () => {
  it('matches the dog thing', () => {
    const wrapper = shallow(<Dog />);

    expect(wrapper).toMatchSnapshot();
  });
});
