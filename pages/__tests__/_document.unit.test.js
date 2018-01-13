import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Document from '../_document';

describe('<Document />', () => {
  it('renders correctly', () => {
    const document = shallow(<Document />);
    expect(toJson(document)).toMatchSnapshot();
  });
});
