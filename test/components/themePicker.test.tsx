/**
 * @jest-environment jsdom
 */
import { Box, ThemeProvider } from '@mui/material'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { theme } from '../../components/DefaultTheme'
import { ThemePicker } from '../../components/ThemePicker'

test('toggles dark/light mode and updates background color', async () => {
  const user = userEvent.setup()

  render(
    <ThemeProvider defaultMode="light" theme={theme}>
      <ThemePicker />
      <Box data-testid="bg" sx={{ width: 100, height: 20, bgcolor: 'background.default' }} />
    </ThemeProvider>,
  )

  const lightRadio = screen.getByLabelText('Light') as HTMLInputElement
  const darkRadio = screen.getByLabelText('Dark') as HTMLInputElement

  // initial mode should be light
  expect(lightRadio.checked).toBe(true)

  // read the CSS variable MUI exposes on the root element
  const rootVar = () =>
    getComputedStyle(document.documentElement).getPropertyValue('--mui-palette-background-default').trim()

  // initial CSS variable should match light background from theme
  expect(rootVar()).toBe('#fff8f6')

  // switch to dark and assert CSS variable updates
  await user.click(darkRadio)
  await waitFor(() => expect(darkRadio.checked).toBe(true))
  await waitFor(() => expect(rootVar()).toBe('#0a192f'))

  // switch back to light
  await user.click(lightRadio)
  await waitFor(() => expect(lightRadio.checked).toBe(true))
  await waitFor(() => expect(rootVar()).toBe('#fff8f6'))
})
