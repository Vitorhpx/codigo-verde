import { AppBar, Button, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles, Radio } from '@material-ui/core';
import * as React from 'react';

export interface Place {
  name: string;
  address: string;
}
interface PlacesSelectionProps {
  places: Place[];
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

const PlacesSelection: React.FunctionComponent<PlacesSelectionProps> = props => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState(0);

  const handleChange = (index: number) => (_event: any) => {
    setSelectedValue(index);
  };

  return (
    <>
      <List className={classes.root}>
        {props.places.map((place, index) => (
          <ListItem key={place.name} role={undefined} dense button onClick={handleChange(index)}>
            <ListItemIcon>
              <Radio
                checked={selectedValue === index}
                onChange={handleChange(index)}
                value={index}
                name='places-radio'
                inputProps={{ 'aria-label': `${index}` }}
                color='primary'
              />
            </ListItemIcon>
            <ListItemText primary={place.name} secondary={place.address} />
          </ListItem>
        ))}
      </List>
      <AppBar className={classes.bottomAppBar}>
        <Grid container direction='row' alignItems='center' justify='flex-end'>
          <Grid item>
            <Button color='secondary' variant='text' onClick={props.onNextClick}>
              Finalizar
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default PlacesSelection;
