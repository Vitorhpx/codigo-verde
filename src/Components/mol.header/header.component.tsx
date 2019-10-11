import { IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';

interface IHeaderProps {
  onMenuClick: () => void;
  text: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    border: '1px solid black',
    borderWidth: '0 0 1px 0',
  },
  toolbar: {
    height: '60px',
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
      <Toolbar className={classes.toolbar}>
        <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
          <MenuIcon onClick={props.onMenuClick} />
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          {props.text}
        </Typography>
      </Toolbar>
    </div>
  );
};

export default Header;
