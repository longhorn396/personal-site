/**
 * @jest-environment node
 */
import type { NextApiRequest, NextApiResponse } from 'next'
import menuPlanningHandler from '../../../pages/api/menuPlanning'
import type { Recipe } from '../../../types/recipe'
import { readCSVFile } from '../../../utils/readCSVfile'

jest.mock('../../../utils/readCSVfile', () => ({
  readCSVFile: jest.fn(),
}))

const mockedReadCSVFile = readCSVFile as jest.MockedFunction<typeof readCSVFile>

describe('menuPlanning API route', () => {
  beforeEach(() => {
    mockedReadCSVFile.mockReset()
  })

  it('returns a 200 response with shuffled recipes', () => {
    const recipes: Recipe[] = [
      { name: 'Pasta', location: 'Kitchen', lunch: 'YES', cook: 'Brianna' },
      { name: 'Tacos', location: 'Dining Room', lunch: 'NO', cook: 'Devin' },
    ]

    mockedReadCSVFile.mockReturnValue(recipes)

    const req = {} as NextApiRequest
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as NextApiResponse

    menuPlanningHandler(req, res)

    expect(mockedReadCSVFile).toHaveBeenCalledWith('data/recipes.csv')
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        recipes: expect.arrayContaining(recipes),
      }),
    )
    expect((res.json as jest.Mock).mock.calls[0][0].recipes).toHaveLength(recipes.length)
  })
})
