import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import {Link} from 'react-router-dom';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

import useStyles from './styles';


const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
    const classes = useStyles();
   

    return (
        <Card className="cart-item">
            <CardMedia 
            className={classes.media}
            image={item.media.source}
            alt={item.name}/>
            <div className={classes.cardContent}>
                <Button component={Link} to={`/products/${item.name}`} className={classes.buttons} size="medium" type="button" variant="outlined" color="primary" >See product
                </Button>
                <Typography noWrap variant="h4" >{item.name}</Typography>
                <Typography variant="h5" >{item.line_total.formatted_with_code}</Typography>
            </div>
            <CardActions>
                <div className={classes.cardContent}>
                    <Button variant="outlined" type="button" color="primary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
                </div>
                <div className={classes.icons}>
                    <RemoveCircleRoundedIcon type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}/>
                    <Typography> {item.quantity} </Typography>
                    <AddCircleRoundedIcon type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}/>
                </div>
            </CardActions >
        </Card>
       
    )
}

export default CartItem
