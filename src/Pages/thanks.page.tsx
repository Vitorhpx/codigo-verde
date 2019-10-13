import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import * as React from 'react';
import SvgCheckCircle from '../Components/atm.icons/check-circle';

interface ThanksProps {
  onNextClick: () => void;
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: '0 32px',
    backgroundColor: theme.palette.background.paper,
  },

  mainH3: {
    fontFamily: 'Ubuntu',
  },

  separator: {
    height: '32px',
    width: '100%',
    content: '',
  },
  smallSeparator: {
    height: '16px',
    width: '100%',
    content: '',
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
        <Grid container direction='row' alignItems='center' justify='center'>
          <Box className={classes.separator} />
          <SvgCheckCircle width={'150px'} />
          <Box className={classes.separator} />

          <Typography align='center' variant='h3' color='primary' className={classes.mainH3}>
            Obrigado por contribuir!
          </Typography>
          <Box className={classes.smallSeparator} />

          <Typography variant='body1'>
            Leve seus recicláveis até o centro de coleta escolhido para validar sua pontuação!
          </Typography>
          <Box className={classes.smallSeparator} />

          <Button color='primary' variant='contained' onClick={props.onNextClick}>
            Reciclar Mais
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default Thanks;
