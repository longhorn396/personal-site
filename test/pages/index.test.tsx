/**
 * @jest-environment jsdom
 */
import { mount } from 'enzyme';
import React from 'react';
import homeData from '../../data/homeData.json';
import Home, { getStaticProps } from '../../pages/index';

const { projects, sections, work } = homeData;
const homePage = mount(<Home projects={projects} sections={sections} work={work} />);

describe('Home page', () => {
  it('matches snapshot', () => {
    expect(homePage).toMatchSnapshot();
  });

  it('gets the right props', () => {
    expect(getStaticProps().props).toEqual(homeData);
  });

  it('handles Accordion expansion correctly', () => {
    const clickSelector = 'div.MuiAccordionSummary-expandIcon';
    const lengthSelector = 'div.MuiAccordion-root.Mui-expanded';
    // All accordions start collapsed
    expect(homePage.find(lengthSelector)).toHaveLength(0);
    homePage.find(clickSelector).first().simulate('click');
    expect(homePage.find(lengthSelector)).toHaveLength(1);
    homePage.find(clickSelector).last().simulate('click');
    // Expanded accordion should collapse when another is clicked
    expect(homePage.find(lengthSelector)).toHaveLength(1);
    homePage.find(clickSelector).last().simulate('click');
    expect(homePage.find(lengthSelector)).toHaveLength(0);
  });

  it('handles Navbar scrolling', () => {
    expect(homePage.find('div.MuiButtonGroup-root').children().length).toBeGreaterThan(0);
    homePage.find('div.MuiButtonGroup-root').children().last().simulate('click');
  });

  it('handles Drawer expansion correctly', () => {
    expect(homePage.find({ 'aria-label': 'Menu', type: 'button' })).toHaveLength(1);
    homePage.find({ 'aria-label': 'Menu', type: 'button' }).simulate('click');
    expect(homePage.find({ className: 'MuiDrawer-root MuiDrawer-modal', open: true })).toHaveLength(1);
  });
});
