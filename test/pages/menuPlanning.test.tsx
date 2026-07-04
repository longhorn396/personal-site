/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react'
import MenuPlanningPage from '../../pages/menuPlanning'
import apiRequest from '../../utils/apiRequest'

jest.mock('../../utils/apiRequest', () => ({
  __esModule: true,
  default: jest.fn(),
}))

const mockedApiRequest = apiRequest as jest.MockedFunction<typeof apiRequest>
let menuPlanningPage: ReturnType<typeof render>

beforeEach(() => {
  mockedApiRequest.mockImplementation((_path, _params, callback) => {
    callback({ json: async () => ({ recipes: [] }) })
  })

  menuPlanningPage = render(<MenuPlanningPage />)
})

describe('Menu Planning page', () => {
  it('matches snapshot', () => {
    expect(menuPlanningPage).toMatchSnapshot()
  })
})
