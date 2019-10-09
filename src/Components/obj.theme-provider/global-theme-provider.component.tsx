import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple, green, red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: { main: green[800] },
    secondary: { main: red[500] },
  },
});

interface IGlobalThemeProviderProps {}

const GlobalThemeProvider: React.FunctionComponent<IGlobalThemeProviderProps> = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default GlobalThemeProvider;
