import { AppBar, Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import * as React from 'react';
import Result from '../Components/obj.barcode-scanner/Result';
import Scanner from '../Components/obj.barcode-scanner/Scanner';

interface MainPageProps {}

const MainPage: React.FunctionComponent<MainPageProps> = props => {
  const [results, setResults] = React.useState<any>([]);
  const classes = useStyles();

  return (
    <div>
      <ul className='results'>
        {results.map((result: any) => (
          <Result key={result.codeResult.code} result={result} />
        ))}
      </ul>
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
    </div>
  );
};

export default MainPage;

const useStyles = makeStyles(theme => ({
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
