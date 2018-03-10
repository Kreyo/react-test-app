import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WidgetsContainer from '../../../../app/components/widgets/container';

configure({ adapter: new Adapter() });

describe('Widgets Container', () => {
    it('should return rendered container', () => {
        const wrapper = shallow(<WidgetsContainer />);
        expect(wrapper.find('.widgets-container').length).toEqual(1);
    });
});
