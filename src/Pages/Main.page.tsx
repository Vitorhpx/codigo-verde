import { AppBar, Box, Button, Grid, makeStyles, Typography, Snackbar } from '@material-ui/core';
import * as React from 'react';
import Scanner from '../Components/obj.barcode-scanner/Scanner';
import { ProductModal } from '../Components/mol.product-modal/product-modal.component';
import { getProductData } from '../API/barcode/getProduct';

interface MainPageProps {}

const MainPage: React.FunctionComponent<MainPageProps> = props => {
  // const [results, setResults] = React.useState<any>([]);
  const [open, setOpen] = React.useState<boolean>(false);
  const [openError, setOpenError] = React.useState<boolean>(false);
  const [money, setMoney] = React.useState<number>(0);
  const [productValue, setProductValue] = React.useState<number>(0);
  const [lastProductName, setLastProductName] = React.useState<string>('');

  const handleAddProduct = () => {
    setOpen(false);
    return setMoney(productValue + money);
  };

  const handleProductDetect = (productEan: string) => () => {
    getProductData(productEan)
      .then(product => {
        setLastProductName(product.nome);
        setOpen(true);
      })
      .catch((error: any) => setOpenError(true));
  };

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {/* <ul className='results'>
        {results.map((result: any) => (
          <Result key={result.codeResult.code} result={result} />
        ))}
      </ul> */}
      <Scanner onDetected={result => handleProductDetect(result.codeResult.code)()} />
      <AppBar className={classes.bottomAppBar}>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xs={4} sm={2} lg={1} />
          <Grid item xs={4} sm={8} lg={10}>
            <Typography component='body' className={classes.moneyText}>
              R$ {money.toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={2} lg={1}>
            <Button color='primary' variant='contained' onClick={handleProductDetect('7894650003879')}>
              Reciclar
            </Button>
          </Grid>
        </Grid>
        <ProductModal
          open={open}
          handleClose={() => setOpen(false)}
          // handleClose={() => setOpen(false)}
          productName={lastProductName}
          material={'Plástico'}
          value={productValue}
          handleAdd={handleAddProduct}
        />

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={openError}
          autoHideDuration={6000}
          onClose={() => setOpenError(false)}
        >
          Ocorreu um erro
        </Snackbar>
      </AppBar>
    </Box>
  );
};

export default MainPage;

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
  margin: {
    margin: theme.spacing(1),
  },
}));
