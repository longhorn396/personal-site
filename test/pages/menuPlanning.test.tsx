/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react'
import MenuPlanningPage, { getStaticProps } from '../../pages/menuPlanning'
import { Recipe } from '../../types/recipe'
import { readCSVFile } from '../../utils/readCSVfile'

const recipes = readCSVFile('data/recipes.csv') as Recipe[]
let menuPlanningPage: ReturnType<typeof render>

beforeEach(() => {
  menuPlanningPage = render(<MenuPlanningPage recipes={recipes} />)
})

describe('Menu Planning page', () => {
  it('matches snapshot', () => {
    expect(menuPlanningPage).toMatchSnapshot()
  })

  it('shuffles the recipes', () => {
    const shuffledRecipes = getStaticProps().props.recipes
    expect(shuffledRecipes).toBeDefined()
    expect(Array.isArray(shuffledRecipes)).toBe(true)
    expect(shuffledRecipes.length).toBe(recipes.length)
    expect(getStaticProps().props).not.toEqual({ recipes })
  })
})
