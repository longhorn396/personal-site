import { shuffle } from 'lodash'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Recipe } from '../../types/recipe'
import { readCSVFile } from '../../utils/readCSVfile'

type MenuPlanningResponse = {
  recipes: Recipe[]
}

export default function menuPlanningHandler(_req: NextApiRequest, res: NextApiResponse<MenuPlanningResponse>) {
  const loadedRecipes = readCSVFile('data/recipes.csv') as Recipe[]
  res.status(200).json({ recipes: shuffle(loadedRecipes) })
}
