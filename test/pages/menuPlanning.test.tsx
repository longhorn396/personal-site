/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { act } from 'react'
import MenuPlanningPage from '../../pages/menuPlanning'
import apiRequest from '../../utils/apiRequest'

jest.mock('../../utils/apiRequest', () => ({
  __esModule: true,
  default: jest.fn(),
}))

const mockedApiRequest = apiRequest as jest.MockedFunction<typeof apiRequest>
let menuPlanningPage: ReturnType<typeof render>

beforeEach(async () => {
  jest.clearAllMocks()

  mockedApiRequest.mockImplementation((_path, _params, callback) => {
    callback({ json: async () => ({ recipes: [] }) })
  })

  await act(async () => {
    menuPlanningPage = render(<MenuPlanningPage />)
    await Promise.resolve()
  })
})

describe('Menu Planning page', () => {
  it('matches snapshot', () => {
    expect(menuPlanningPage).toMatchSnapshot()
  })

  it('handles the error path from apiRequest', async () => {
    mockedApiRequest.mockImplementation((_path, _params, _callback, onError, fin) => {
      onError?.()
      fin?.()
    })

    await act(async () => {
      render(<MenuPlanningPage />)
    })

    expect(screen.getAllByText('Menu Planning').length).toBeGreaterThan(0)
    expect(mockedApiRequest).toHaveBeenCalledWith(
      '/api/menuPlanning',
      { method: 'GET' },
      expect.any(Function),
      expect.any(Function),
      expect.any(Function),
    )
  })
})
