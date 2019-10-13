import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Box } from '@material-ui/core';

export interface Product {
  name: string;
  ean: string;
  value: number;
  img: string;
}

interface IProductModalProps {
  open: boolean;
  handleClose: () => void;
  handleAdd: () => void;
  product: Product;
}

export const ProductModal: React.FunctionComponent<IProductModalProps> = props => {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        {props.product && props.product.name && props.product.value && props.product.ean ? (
          <>
            {props.product.img && (
              <Box className={classes.avatarWrapper}>
                <Avatar alt='Product image' src={props.product.img} className={classes.avatar} />
              </Box>
            )}
            <DialogTitle id='alert-dialog-title'>
              {props.product.name} - {props.product.ean}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                <b>Pontos: </b>
                {props.product.value}
              </DialogContentText>
              <DialogContentText id='alert-dialog-description'>
                <b>Este produto é reciclável</b>
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={props.handleClose} color='primary'>
                Cancelar
              </Button>
              <Button onClick={props.handleAdd} color='primary' variant='contained'>
                Adicionar
              </Button>
            </DialogActions>
          </>
        ) : (
          <>
            <DialogContentText id='alert-dialog-description'>Produto não encontrado!</DialogContentText>
            <DialogActions>
              <Button onClick={props.handleClose} color='primary'>
                Cancelar
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

const useStyles = makeStyles({
  avatarWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
    width: 120,
    height: 120,
  },
});
