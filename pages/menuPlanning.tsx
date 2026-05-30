import { createTheme, ThemeProvider, Typography } from '@mui/material'
import { shuffle } from 'lodash'
import { MaterialReactTable, MRT_ColumnDef } from 'material-react-table'
import React, { useMemo } from 'react'
import Default from '../components/DefaultLayout'
import { Recipe } from '../types/recipe'
import { readCSVFile } from '../utils/readCSVfile'

type MenuPlanningPageProps = {
  recipes: Recipe[]
}

const MenuPlanningPage = ({ recipes }: MenuPlanningPageProps): React.JSX.Element => {
  const cols = useMemo<MRT_ColumnDef<Recipe>[]>(
    () => [
      { accessorKey: 'name', header: 'Name' },
      { accessorKey: 'location', header: 'Location', size: 125 },
      { accessorKey: 'lunch', header: 'Lunch?', filterVariant: 'select', filterSelectOptions: ['YES', 'NO'], size: 99 },
      {
        accessorKey: 'cook',
        header: 'Cook',
        filterVariant: 'select',
        filterSelectOptions: ['Brianna', 'Devin', 'Either'],
        size: 99,
      },
    ],
    [],
  )
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  return (
    <Default description="A simple menu planning tool with our favorite recipes" title="Menu Planning">
      <section>
        <ThemeProvider theme={darkTheme}>
          <MaterialReactTable
            columns={cols}
            data={recipes}
            enableColumnResizing={true}
            enableColumnActions={false}
            enableHiding={false}
            enableDensityToggle={false}
            enableKeyboardShortcuts={false}
            initialState={{ density: 'compact', pagination: { pageIndex: 0, pageSize: 20 }, showColumnFilters: true }}
            layoutMode="grid"
            muiPaginationProps={{ rowsPerPageOptions: [10, 20, 40] }}
            muiTableBodyCellProps={{ sx: { fontSize: (t) => t.typography.body1.fontSize } }}
            muiTableHeadCellProps={{ sx: { fontSize: (t) => t.typography.body1.fontSize, fontWeight: 'bold' } }}
            renderTopToolbarCustomActions={() => (
              <Typography sx={{ p: 0.5 }} variant="h6" component="h1">
                Menu Planning
              </Typography>
            )}
          />
        </ThemeProvider>
      </section>
    </Default>
  )
}

export const getStaticProps = (): { props: MenuPlanningPageProps } => {
  const loadedRecipes = readCSVFile('data/recipes.csv')
  return { props: { recipes: shuffle((loadedRecipes as Recipe[]) || []) } }
}

export default MenuPlanningPage
