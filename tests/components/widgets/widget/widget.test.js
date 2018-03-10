import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Widget from '../../../../app/components/widgets/widget';

configure({ adapter: new Adapter() });

describe('Widgets Container', () => {
    it('should return an error if type is incorrect', () => {
        const wrapper = shallow(<Widget data={{ type: 'test' }} />);
        expect(wrapper.text()).toEqual('Invalid data type!');
    });

    it('should return form type by default', () => {
        const wrapper = shallow(<Widget />);
        expect(wrapper.text()).toEqual('<Form />');
    });

    it('should return section given section type', () => {
        const wrapper = shallow(<Widget data={{ type: 'section' }} />);
        expect(wrapper.text()).toEqual('<Section />');
    });

    it('should return input given input type', () => {
        const wrapper = shallow(<Widget data={{ type: 'input' }} />);
        expect(wrapper.text()).toEqual('<Input />');
    });

    it('should return input given currency type', () => {
        const wrapper = shallow(<Widget data={{ type: 'currency' }} />);
        expect(wrapper.text()).toEqual('<Input />');
    });
});
