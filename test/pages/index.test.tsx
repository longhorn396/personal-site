/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import YAML from 'yaml'
import fs from 'fs'
import Home, { getStaticProps } from '../../pages/index'

const homeData = YAML.parse(fs.readFileSync('data/homeData.yaml', 'utf8'))
const { projects, sections, work } = homeData
let homePage: ReturnType<typeof render>

beforeEach(() => {
  homePage = render(<Home projects={projects} sections={sections} work={work} />)
})

describe('Home page', () => {
  it('matches snapshot', () => {
    expect(homePage).toMatchSnapshot()
  })

  it('gets the right props', () => {
    expect(getStaticProps().props).toEqual(homeData)
  })

  it('handles Accordion expansion correctly', async () => {
    // Modern Testing Library approach (keeps same intent as the old Enzyme test):
    // - Query the accordion toggle buttons (by aria-label or role) and click them with `userEvent`.
    // - Use a DOM selector for the expanded Accordion class ('.Mui-expanded') to assert expanded state.
    // Example (pseudo-code):
    const user = userEvent.setup()
    const toggles = document.querySelectorAll('button.MuiAccordionSummary-root')
    expect(document.querySelectorAll('button.Mui-expanded')).toHaveLength(0)
    await user.click(toggles[0] as Element)
    expect(document.querySelectorAll('button.Mui-expanded')).toHaveLength(1)
    await user.click(toggles[1] as Element)
    expect(document.querySelectorAll('button.Mui-expanded')).toHaveLength(2)
    await user.click(toggles[1] as Element)
    expect(document.querySelectorAll('button.Mui-expanded')).toHaveLength(1)
  })

  it('handles Navbar scrolling', async () => {
    const user = userEvent.setup()
    const btnGroup = screen.getByRole('group')
    expect(btnGroup.children.length).toBeGreaterThan(0)
    const lastButton = btnGroup.children[btnGroup.children.length - 1]
    expect(lastButton).toBeTruthy()
    await user.click(lastButton as Element)
  })

  it('handles Drawer expansion correctly', async () => {
    const user = userEvent.setup()
    const menuButton = screen.getByLabelText('Menu')
    expect(menuButton).toBeTruthy()

    // Click the menu button to open the Drawer
    await user.click(menuButton)

    // The Drawer paper uses aria-label 'Site Navigation' in the component
    await waitFor(() => expect(screen.getByLabelText('Site Navigation')).toBeTruthy())
  })
})
