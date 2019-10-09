import { AppBar, makeStyles, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import * as React from 'react';

interface IHeaderProps {}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header: React.FunctionComponent<IHeaderProps> = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar>
        <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          Código Verde
        </Typography>
      </Toolbar>
    </div>
  );
};

export default Header;
