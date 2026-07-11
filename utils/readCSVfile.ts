import Papa from 'papaparse'
import fs from 'fs'
import path from 'path'

export const readCSVFile = (filePath: string): unknown[] => {
  const resolvedPath = path.resolve(process.cwd(), filePath)

  // 2. Read the file synchronously from disk
  const fileContent = fs.readFileSync(resolvedPath, 'utf8')

  // 3. Parse the content synchronously and return the data
  const results = Papa.parse<unknown>(fileContent, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
  })

  if (results.errors && results.errors.length) {
    console.error('Error(s) while parsing CSV:', results.errors)
  }

  const typedData: unknown[] = results.data as unknown[]
  console.log('Successfully loaded CSV data from', resolvedPath, ':', typedData.length, 'records')
  return typedData
}
