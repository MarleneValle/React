import React from 'react'
import { Card, CardMedia, CardContent, CardAction, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCard } from '@material-ui/icons'
import { classes } from 'istanbul-lib-coverage';

const Product = ({ product }) => {
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="h2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardAction disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCard />
                </IconButton>
            </CardAction>
        </Card>
    );
}

export default Product
