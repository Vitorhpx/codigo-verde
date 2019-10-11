import React from 'react';
import Header from './Components/mol.header/header.component';
import GlobalThemeProvider from './Components/obj.theme-provider/global-theme-provider.component';
import MainPage from './Pages/Main.page';
import { SnackbarProvider } from 'notistack';
import { Product } from './Components/mol.product-modal/product-modal.component';
import ProductCheckout from './Pages/Product.checkout.page';

enum Pages {
  main = 'main',
  checkout = 'checkout',
}

const App = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [activePage, setActivePage] = React.useState<Pages>(Pages.main);

  return (
    <GlobalThemeProvider>
      <SnackbarProvider maxSnack={1}>
        <Header onMenuClick={() => setActivePage(Pages.main)} text={getHeaderText(activePage)} />
        {activePage === Pages.main && (
          <MainPage
            onAddProduct={product => setProducts([...products, product])}
            onRecycleClick={() => setActivePage(Pages.checkout)}
            products={products}
          />
        )}
        {activePage === Pages.checkout && <ProductCheckout products={products} />}
      </SnackbarProvider>
    </GlobalThemeProvider>
  );
};

const getHeaderText = (page: Pages) => {
  switch (page) {
    case Pages.main:
      return 'Escaneie um produto';

    case Pages.checkout:
      return 'Seus Recicláveis';
    default:
      return '';
  }
};
export default App;
