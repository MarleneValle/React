import React from 'react'
import { Card, CardMedia, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import useStyles from './styles';
import { Link } from 'react-router-dom';


const Product = ({ product, handleAddToCart}) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={ product.media.source } title={product.name} />
            
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h6">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
            
            <CardActions disableSpacing className={classes.cardActions}>
                <Button component={Link} to={`/products/${product.name}`} className={classes.descriptionButton} size="medium" type="button" variant="outlined" color="primary" endIcon={<KeyboardArrowRightIcon />}>See details
                </Button>
                <IconButton aria-label="Add to Cart" onClick={() => {handleAddToCart(product.id, 1)}}>
                    <AddShoppingCart fontSize="large" color="secondary"/>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Product
