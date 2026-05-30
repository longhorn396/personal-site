import Papa from 'papaparse'
import fs from 'fs'

export const readCSVFile = (filePath: string): unknown[] => {
  // 2. Read the file synchronously from disk
  const fileContent = fs.readFileSync(filePath, 'utf8')

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
  console.log('Successfully loaded CSV data from', filePath, ':', typedData.length, 'records')
  return typedData
}
