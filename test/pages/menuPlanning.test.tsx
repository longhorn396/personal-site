/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react'
import MenuPlanningPage, { getServerSideProps } from '../../pages/menuPlanning'
import type { Recipe } from '../../types/recipe'
import { readCSVFile } from '../../utils/readCSVfile'

jest.mock('../../utils/readCSVfile', () => ({
  readCSVFile: jest.fn(),
}))

const mockedReadCSVFile = readCSVFile as jest.MockedFunction<typeof readCSVFile>

describe('Menu Planning page', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('matches snapshot', () => {
    mockedReadCSVFile.mockReturnValue([])
    const { container } = render(<MenuPlanningPage recipes={[]} />)
    expect(container).toMatchSnapshot()
  })

  it('uses server-side props built from csv data', async () => {
    const recipes: Recipe[] = [
      { name: 'Pasta', location: 'Kitchen', lunch: 'YES', cook: 'Brianna' },
      { name: 'Tacos', location: 'Dining Room', lunch: 'NO', cook: 'Devin' },
    ]

    mockedReadCSVFile.mockReturnValue(recipes)

    const props = await getServerSideProps({} as never)

    expect(mockedReadCSVFile).toHaveBeenCalledWith('data/recipes.csv')
    expect(props).toEqual({
      props: {
        recipes: expect.arrayContaining(recipes),
      },
    })
    expect(props.props.recipes as Recipe[]).toHaveLength(recipes.length)
  })
})
