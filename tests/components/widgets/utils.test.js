import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { renderWidgets } from '../../../app/components/widgets/utils';

configure({ adapter: new Adapter() });

const testData = [
  {
    type: 'input',
    label: 'Opportunity name',
    value: 'Acme - 1200 Widgets (Sample)',
    required: true,
  },
];

describe('utils', () => {
  describe('renderWidgets', () => {
    it('should return an array of Widgets components based on given array of widget data', () => {
      expect(renderWidgets(testData).length).toEqual(1);
    });
  });
});
