import { green } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';

const theme = createMuiTheme({
  palette: {
    primary: { main: green[800] },
    secondary: { main: '#FFFFFF' },
  },
});

interface IGlobalThemeProviderProps {}

const GlobalThemeProvider: React.FunctionComponent<IGlobalThemeProviderProps> = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default GlobalThemeProvider;
