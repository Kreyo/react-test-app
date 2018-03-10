import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Form from '../../../../../app/components/widgets/widget/types/form';

configure({ adapter: new Adapter() });

describe('Form', () => {
  it('should return rendered form', () => {
    const wrapper = shallow(<Form name="Form" />);
    expect(wrapper.find('.form').length).toEqual(1);
  });
});
