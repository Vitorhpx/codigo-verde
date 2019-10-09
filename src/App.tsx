import { AppBar } from '@material-ui/core';
import React from 'react';
import MainPage from './Pages/Main.page';
import Header from './Components/mol.header/header.component';
import GlobalThemeProvider from './Components/obj.theme-provider/global-theme-provider.component';

const App = () => {
  return (
    <GlobalThemeProvider>
      <Header />
      <MainPage />
    </GlobalThemeProvider>
  );
};

export default App;
