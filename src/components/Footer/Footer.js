import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#1B1642',
    marginTop: 50,
    color: 'white',
    left: 0,
    bottom: 0,
    width: '100%',
    position: 'fixed',
    [theme.breakpoints.down('sm')]: {
      fontSize: '11px',
    },
  },
  footer: {
    padding: '15px',
  },
  owners: {
    color: 'white',
  },
}));

const Footer = () => {
  const classes = useStyle();

  return (
    <Grid className={classes.root} container justify="space-between" alignItems="center">
      <Grid item className={classes.footer}>
        Made with ❤ by{' '}
        <a
          href="https://github.com/Piyush-Ranjan-Mishra"
          className={classes.owners}
          target="_blank"
          rel="noreferrer"
        >
          Piyush Mishra
        </a>{' '}
      </Grid>
      <Grid item className={classes.footer}>
        All Rights Reserved
      </Grid>
    </Grid>
  );
};

export default Footer;
