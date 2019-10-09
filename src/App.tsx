import React from 'react';
import Header from './Components/mol.header/header.component';
import GlobalThemeProvider from './Components/obj.theme-provider/global-theme-provider.component';
import MainPage from './Pages/Main.page';

const App = () => {
  return (
    <GlobalThemeProvider>
      <Header />
      <MainPage />
    </GlobalThemeProvider>
  );
};

export default App;
