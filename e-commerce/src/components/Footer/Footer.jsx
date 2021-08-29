import React from 'react';
import { Card, CardContent, Typography, IconButton} from '@material-ui/core';
import useStyles from './styles';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer} >
        <Card >
            <CardContent >
                <Typography variant="h6" color="primary" align="center">Contact us</Typography>
                <div className={classes.footerDetails}>
                <IconButton color="primary" fontSize="large" aria-label="Linkedin.com" onClick={() => window.open('http://instagram.com/')}>
                  <InstagramIcon fontSize="large" />
                </IconButton>
                <IconButton color="primary" fontSize="large" aria-label="Linkedin.com" onClick={() => window.open('http://facebook.com/')}>
                  <FacebookIcon fontSize="large" />
                </IconButton>
                <IconButton color="primary" fontSize="large" aria-label="Linkedin.com" onClick={() => window.open('http://github.com/')}>
                  <MailIcon fontSize="large" />
                </IconButton>
                </div>
                <div>
                     <Typography variant="body2" align="center"> &copy; 2021 - Marlene Valle</Typography>
                </div>
            </CardContent>
        </Card>
    </footer>
  );
};

export default Footer;