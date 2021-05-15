import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import LoyaltyRoundedIcon from '@material-ui/icons/LoyaltyRounded';

import useStyles from './styles';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();
    return (             
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit" >
                <Toolbar>
                    <Typography component={Link} to="/" variant="h2" className={classes.title} color="primary">
                        <LoyaltyRoundedIcon fontSize="large"  />
                       Send Gifts
                       <LoyaltyRoundedIcon fontSize="large"/>
                    </Typography >
                    <div className={classes.grow} />
                    { location.pathname !==  '/checkout' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label="Show cart items" color="primary" >
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart fontSize="large"/>
                            </Badge>
                        </IconButton>
                    </div>
                    )}
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Navbar
