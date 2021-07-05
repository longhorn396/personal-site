/**
 * @jest-environment jsdom
 */
import { shallow } from 'enzyme';
import React from 'react';
import homeData from '../../data/homeData.json';
import Default from '../../components/DefaultLayout';

const { sections } = homeData;
const layout = shallow(<Default description='' sections={sections} title=''></Default>);
 
describe('Default layout', () => {
  it('matches snapshot', () => {
    expect(layout).toMatchSnapshot();
  });
});
 