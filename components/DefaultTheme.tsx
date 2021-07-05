import { createMuiTheme } from '@material-ui/core/styles';

const serifFonts = ['Cambria', 'Cochin', 'Georgia', 'Times', 'Times New Roman', 'serif'].join(', ');
const sansSerifFonts = ['Lucida Sans', 'Lucida Sans Regular', 'Geneva', 'Verdana', 'sans-serif'].join(',');

export const theme = createMuiTheme({
  overrides: {
    MuiAccordion: {
      root: {
        '&$expanded': {
          margin: '1px 0',
        },
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#0a192f',
      light: '#333f58',
      dark: '#000007',
    },
    secondary: {
      main: '#bf360c',
      light: '#f9683a',
      dark: '#870000',
    },
    info: {
      main: '#64ffda',
      light: '#9efff',
      dark: '#14cba8',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
    },
    background: {
      default: '#0a192f',
      paper: '#333f58',
    },
  },
  typography: {
    fontFamily: sansSerifFonts,
    fontSize: 16,
    fontWeightRegular: 300,
    body1: {
      fontFamily: serifFonts,
      fontWeight: 400,
      marginBottom: '0.5rem',
    },
    body2: {
      fontFamily: serifFonts,
      fontWeight: 400,
      marginBottom: '0.5rem',
    },
  },
  spacing: 8,
});
