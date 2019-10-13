import { AppBar, Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import * as React from 'react';

interface ThanksProps {
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

const Thanks: React.FunctionComponent<ThanksProps> = props => {
  const classes = useStyles(props);

  return (
    <>
      <Box className={classes.root}>
        <Typography variant='h3'>Obrigado por contribuir!</Typography>

        <Typography variant='body1'>
          Leve seus recicláveis até o centro de coleta escolhido para receber o pagamento!
        </Typography>
      </Box>
      <AppBar className={classes.bottomAppBar}>
        <Grid container direction='row' alignItems='center' justify='flex-end'>
          <Grid item>
            <Button color='secondary' variant='text' onClick={props.onNextClick}>
              Reciclar Mais
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default Thanks;
