/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react'
import MenuPlanningPage from '../../pages/menuPlanning'

beforeEach(() => {
  menuPlanningPage = render(<MenuPlanningPage />)
})

describe('Menu Planning page', () => {
  it('matches snapshot', () => {
    expect(menuPlanningPage).toMatchSnapshot()
  })
})
