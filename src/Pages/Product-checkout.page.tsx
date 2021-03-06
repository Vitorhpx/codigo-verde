import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  AppBar,
  Grid,
  Button,
  Typography,
} from '@material-ui/core';
import * as React from 'react';
import { Product } from '../Components/mol.product-modal/product-modal.component';
import { getTotalPoints } from './Main.page';

interface IProductCheckoutProps {
  products: Product[];
  onNextClick: () => void;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  bottomAppBar: {
    height: '60px',
    display: 'flex',
    flexDirection: 'row',
    padding: '0 16px',
    top: 'auto',
    bottom: 0,
  },
}));

const ProductCheckout: React.FunctionComponent<IProductCheckoutProps> = props => {
  const classes = useStyles();

  return (
    <>
      <List className={classes.root}>
        {props.products.map(product => (
          <ListItem key={product.ean}>
            <ListItemAvatar>
              <Avatar alt='Product image' src={product.img} />
            </ListItemAvatar>
            <ListItemText primary={product.name} secondary={`${product.value} pontos`} />
          </ListItem>
        ))}
      </List>
      <AppBar className={classes.bottomAppBar}>
        <Grid container direction='row' alignItems='center' justify='space-between'>
          <Grid item>
            <Typography component='body'>Pontos: {getTotalPoints(props.products)}</Typography>
          </Grid>
          <Grid item>
            <Button color='secondary' variant='text' onClick={props.onNextClick}>
              Próximo
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default ProductCheckout;
