/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @jest-environment jsdom
 */
import { theme } from '../../components/DefaultTheme'

describe('DefaultTheme', () => {
  it('has expected typography defaults', () => {
    expect(theme.typography.fontFamily).toEqual(expect.any(String))
    expect(theme.typography.fontFamily).toContain('Lucida Sans')
    expect(theme.typography.fontSize).toBe(16)
    expect(theme.typography.fontWeightRegular).toBe(300)

    expect(theme.typography.body1).toBeDefined()
    // body1/fontFamily is a string containing serif list
    // use toContain to avoid depending on exact formatting
    expect((theme.typography.body1 as any).fontFamily).toContain('Georgia')
  })

  it('defines light color scheme by default', () => {
    expect(theme.palette).toBeDefined()
    expect(theme.palette.mode).toBe('light')
    expect(theme.palette.secondary.main).toBe('#bf360c')
  })

  it('sets spacing correctly', () => {
    expect(theme.spacing(1)).toBe('var(--mui-spacing, 8px)')
  })

  it('contains component overrides for Accordion', () => {
    const comp = theme.components?.MuiAccordion
    expect(comp).toBeDefined()
    const expanded = (comp as any).styleOverrides?.root?.['&.Mui-expanded']
    expect(expanded).toBeDefined()
    expect(expanded).toHaveProperty('margin', '1px 0')
  })
})
