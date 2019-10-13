import React from 'react';
import Header from './Components/mol.header/header.component';
import GlobalThemeProvider from './Components/obj.theme-provider/global-theme-provider.component';
import MainPage from './Pages/Main.page';
import { SnackbarProvider } from 'notistack';
import { Product } from './Components/mol.product-modal/product-modal.component';
import ProductCheckout from './Pages/Product-checkout.page';
import Thanks from './Pages/thanks.page';

import PlacesSelection, { Place } from './Pages/place-selection.page';

enum Pages {
  main = 'main',
  checkout = 'checkout',
  places = 'places',
  thanks = 'thanks',
}

const App = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [activePage, setActivePage] = React.useState<Pages>(Pages.main);

  return (
    <GlobalThemeProvider>
      <SnackbarProvider maxSnack={1}>
        <Header onBackClick={getBackClick(activePage, setActivePage)} text={getHeaderText(activePage)} />
        {activePage === Pages.main && (
          <MainPage
            onAddProduct={product => setProducts([...products, product])}
            onRecycleClick={() => setActivePage(Pages.checkout)}
            products={products}
          />
        )}
        {activePage === Pages.checkout && (
          <ProductCheckout products={products} onNextClick={() => setActivePage(Pages.places)} />
        )}
        {activePage === Pages.places && (
          <PlacesSelection places={placesMock} onNextClick={() => setActivePage(Pages.thanks)} />
        )}
        {activePage === Pages.thanks && <Thanks onNextClick={() => setActivePage(Pages.main)} />}
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

    case Pages.places:
      return 'Escolha um local de coleta';
    default:
      return 'Código Verde';
  }
};

const getBackClick = (page: Pages, setActivePage: any) => {
  switch (page) {
    case Pages.main:
      return null;

    case Pages.checkout:
      return () => setActivePage(Pages.main);

    case Pages.places:
      return () => setActivePage(Pages.checkout);
    default:
      return null;
  }
};

const placesMock: Place[] = [
  {
    name: 'Reciclagem Lorena',
    address: `R. Frederica Saciloti, 999 - Vila Nunes`,
  },
  {
    name: 'Reciclagem e Cia ',
    address: `R. Frederica Saciloti, 999 - Vila Nunes`,
  },
  {
    name: 'Recicla Tudo',
    address: `R. Frederica Saciloti, 999 - Vila Nunes`,
  },
  {
    name: 'Ferro Velho',
    address: `R. Frederica Saciloti, 999 - Vila Nunes`,
  },
];

export default App;
