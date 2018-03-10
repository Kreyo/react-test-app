import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../../../../../app/components/widgets/widget/types/input';

configure({ adapter: new Adapter() });

describe('Input', () => {
    it('should return rendered input', () => {
        const wrapper = shallow(<Input label="Input" type="input" />);
        expect(wrapper.contains(<label>Input</label>)).toEqual(true);
        expect(wrapper.find('input').length).toEqual(1);
    });
});
