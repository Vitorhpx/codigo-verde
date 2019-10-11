import { AppBar, Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import * as React from 'react';
import { getProductData } from '../API/barcode/getProduct';
import { Product, ProductModal } from '../Components/mol.product-modal/product-modal.component';
import Scanner from '../Components/obj.barcode-scanner/Scanner';

interface MainPageProps {}

const MainPage: React.FunctionComponent<MainPageProps> = props => {
  const [result, setResult] = React.useState<Product>({
    name: '',
    value: 0,
    ean: '',
    img: '',
  });
  const [products, setProducts] = React.useState<Product[]>([]);
  const [open, setOpen] = React.useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleError = (_error: any) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('Ocorreu um erro, tente novamente!', { variant: 'error' });
  };

  const handleAddProduct = (product: Product) => () => {
    setOpen(false);
    return setProducts([...products, product]);
  };

  const handleProductDetect = (productEan: string) => () => {
    getProductData(productEan)
      .then(product => {
        setResult(product);
        console.log('TCL: handleProductDetect -> product', product);
        setOpen(true);
      })
      .catch(handleError);
  };

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Scanner onDetected={result => handleProductDetect(result.codeResult.code)()} />
      <AppBar className={classes.bottomAppBar}>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xs={4} sm={2} lg={1} />
          <Grid item xs={4} sm={8} lg={10}>
            <Typography component='body' className={classes.moneyText}>
              R$ {getTotalMoney(products).toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={2} lg={1}>
            <Button color='primary' variant='contained'>
              Reciclar
            </Button>
          </Grid>
        </Grid>
        <ProductModal
          open={open}
          handleClose={() => setOpen(false)}
          product={result as Product}
          handleAdd={handleAddProduct(result as Product)}
        />
      </AppBar>
    </Box>
  );
};

export default MainPage;

const getTotalMoney = (products: Product[]) => {
  return products.reduce((acc, curr) => {
    return acc + curr.value;
  }, 0);
};

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    height: 'calc(100vh - 120px)', //Header + Footer = 120px
    backgroundColor: 'black',
    width: '100vw',
    overflow: 'hidden',
  },
  bottomAppBar: {
    height: '60px',
    display: 'flex',
    flexDirection: 'row',
    top: 'auto',
    bottom: 0,
  },
  moneyText: {
    textAlign: 'center',
  },
}));
