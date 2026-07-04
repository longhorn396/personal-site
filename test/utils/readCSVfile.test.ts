/**
 * @jest-environment node
 */
import fs from 'fs'
import Papa from 'papaparse'
import { readCSVFile } from '../../utils/readCSVfile'

jest.mock('fs', () => ({
  readFileSync: jest.fn(),
}))

jest.mock('papaparse', () => ({
  __esModule: true,
  default: {
    parse: jest.fn(),
  },
}))

const mockedFs = fs as jest.Mocked<typeof fs>
const mockedPapa = Papa as jest.Mocked<typeof Papa>

describe('readCSVFile', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('reads and parses a CSV file into records', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined)
    mockedFs.readFileSync.mockReturnValue('name,location\nPizza,Kitchen' as never)
    mockedPapa.parse.mockReturnValue({
      data: [{ name: 'Pizza', location: 'Kitchen' }],
      errors: [],
    } as never)

    const result = readCSVFile('data/recipes.csv')

    expect(mockedFs.readFileSync).toHaveBeenCalledWith('data/recipes.csv', 'utf8')
    expect(mockedPapa.parse).toHaveBeenCalledWith('name,location\nPizza,Kitchen', {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
    })
    expect(result).toEqual([{ name: 'Pizza', location: 'Kitchen' }])
    expect(consoleLogSpy).toHaveBeenCalledWith(
      'Successfully loaded CSV data from',
      'data/recipes.csv',
      ':',
      1,
      'records',
    )
    consoleLogSpy.mockRestore()
  })

  it('logs parsing errors when Papa returns them', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined)
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined)
    mockedFs.readFileSync.mockReturnValue('bad csv' as never)
    mockedPapa.parse.mockReturnValue({
      data: [],
      errors: [{ message: 'Malformed CSV' }],
    } as never)

    readCSVFile('data/recipes.csv')

    expect(consoleErrorSpy).toHaveBeenCalledWith('Error(s) while parsing CSV:', [{ message: 'Malformed CSV' }])
    consoleLogSpy.mockRestore()
    consoleErrorSpy.mockRestore()
  })
})
