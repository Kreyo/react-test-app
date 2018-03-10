import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Section from '../../../../../app/components/widgets/widget/types/section';

configure({ adapter: new Adapter() });

describe('Section', () => {
    it('should return rendered section', () => {
        const wrapper = shallow(<Section />);
        expect(wrapper.find('.section').length).toEqual(1);
    });
});
