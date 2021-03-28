import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appClass: {
    backgroundColor: '#3a2b69',
  },
  linkClass: {
      textDecoration: 'none'
  }
});

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appClass}>
            <Toolbar>
            <Typography variant="h6" component="p">
               <Button variant="contained" color="secondary">
                 <Link to="/" className={classes.linkClass}>Home</Link>
                </Button>
            </Typography>
            <Typography variant="h6" component="p">
               <Button variant="contained" color="secondary">
                 <Link to="/formone" className={classes.linkClass}>Form One</Link>
                </Button>
            </Typography>
            <Typography variant="h6" component="p">
               <Button variant="contained" color="secondary">
                 <Link to="/formtwo" className={classes.linkClass}>Form Two</Link>
                </Button>
            </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
