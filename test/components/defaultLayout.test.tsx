/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react'
import fs from 'fs'
import React from 'react'
import YAML from 'yaml'
import Default from '../../components/DefaultLayout'

const homeData = YAML.parse(fs.readFileSync('data/homeData.yaml', 'utf8'))
const { sections } = homeData
const layout = render(<Default description="" sections={sections} title=""></Default>)

describe('Default layout', () => {
  it('matches snapshot', () => {
    expect(layout).toMatchSnapshot()
  })
})
