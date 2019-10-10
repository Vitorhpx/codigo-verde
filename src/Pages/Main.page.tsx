import { AppBar, Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import * as React from 'react';
import Scanner from '../Components/obj.barcode-scanner/Scanner';

interface MainPageProps {}

const MainPage: React.FunctionComponent<MainPageProps> = props => {
  // const [results, setResults] = React.useState<any>([]);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {/* <ul className='results'>
        {results.map((result: any) => (
          <Result key={result.codeResult.code} result={result} />
        ))}
      </ul> */}
      <Scanner onDetected={result => console.log(result)} />
      <AppBar className={classes.bottomAppBar}>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xs={4} sm={2} lg={1} />
          <Grid item xs={4} sm={8} lg={10}>
            <Typography component='body' className={classes.moneyText}>
              R$ 34,50
            </Typography>
          </Grid>
          <Grid item xs={4} sm={2} lg={1}>
            <Button color='primary' variant='contained'>
              Reciclar
            </Button>
          </Grid>
        </Grid>
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
}));
