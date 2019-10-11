import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface IProductModalProps {
  open: boolean;
  handleClose: () => void;
  productName: string;
  material: string;
  handleAdd: () => void;
  value: number;
}

export const ProductModal: React.FunctionComponent<IProductModalProps> = props => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {props.productName} - {39129102}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            <b>Material:</b> {props.material}
          </DialogContentText>

          <DialogContentText id='alert-dialog-description'>
            <b>Valor:</b> R$ {props.value.toFixed(2)}
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
      </Dialog>
    </div>
  );
};
