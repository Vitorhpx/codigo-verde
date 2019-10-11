import React from 'react';
import Header from './Components/mol.header/header.component';
import GlobalThemeProvider from './Components/obj.theme-provider/global-theme-provider.component';
import MainPage from './Pages/Main.page';
import { SnackbarProvider } from 'notistack';

const App = () => {
  return (
    <GlobalThemeProvider>
      <SnackbarProvider maxSnack={3}>
        <Header />
        <MainPage />
      </SnackbarProvider>
    </GlobalThemeProvider>
  );
};

export default App;
