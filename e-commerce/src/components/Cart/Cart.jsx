import React from 'react';
import{ Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';


const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <div >
            <Typography color="secondary" variant="h5"> You have no items in your shopping cart </Typography>
            <Typography component={Link} to='/' variant="h5">Back to the store</Typography>
            
        </div>
    );  

    const FilledCart = () => (
        <>
            <Grid justify="center" container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} md={3} lg={3} key={item.id}>
                        <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cartDetails}>
                <Typography color="secondary" variant="h4">Subtotal: { cart.subtotal.formatted_with_code}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                    <Button component={Link} to='/checkout' className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    );

    if(!cart.line_items) return 'Loading...';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography color="secondary" className={classes.title} variant="h3" gutterBottom >Your products</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
