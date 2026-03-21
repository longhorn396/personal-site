import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { useColorScheme } from '@mui/material/styles'

export function ThemePicker() {
  const { mode, setMode } = useColorScheme()
  if (!mode) {
    return null
  }
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1,
        p: 2,
        pb: 0,
      }}
    >
      <FormControl>
        <FormLabel id="demo-theme-toggle" color="secondary">
          Color Scheme:
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-theme-toggle"
          name="theme-toggle"
          row
          value={mode}
          onChange={(event) => setMode(event.target.value as 'system' | 'light' | 'dark')}
        >
          <FormControlLabel value="system" control={<Radio color="secondary" />} label="System" />
          <FormControlLabel value="light" control={<Radio color="secondary" />} label="Light" />
          <FormControlLabel value="dark" control={<Radio color="secondary" />} label="Dark" />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}
