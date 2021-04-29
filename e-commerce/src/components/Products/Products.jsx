import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'
import useStyles from './styles'

// const products = [
//     { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: ''},
//     { id: 2, name: 'Laptop', description: 'Apple macbook.', price: '$500', image: './'},
// ];

const Products = ({ products, handleAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} handleAddToCart={handleAddToCart} />
                    </Grid>
                ))}
            </Grid>
            </div>
        </main>
    )


}

export default Products;