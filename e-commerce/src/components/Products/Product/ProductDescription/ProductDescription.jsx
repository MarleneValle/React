import React from 'react';
import {useParams } from 'react-router-dom';
import { CardMedia, CardActions, Typography, Button, Container, Card} from '@material-ui/core';
import {Link} from 'react-router-dom'
import KeyboardArrowLeftRoundedIcon from '@material-ui/icons/KeyboardArrowLeftRounded';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import useStyles from './styles';


const ProductDescription = ( {products, handleRemoveFromCart,    handleAddToCart} ) => {
    const { name } = useParams();
    const classes = useStyles();

    return(
        <section>
            <div>
                {products
                .filter((product)=> product.name === name)
                .map((product, index) => (
                <>
                <div/>
                <main className={classes.productDetails}>
                    <Card className={classes.root}>
                        <CardMedia className={classes.media} image={ product.media.source } title={product.name} />
                        <div>
                            <div>
                                <Typography align="center" variant="h5" gutterBottom>
                                {product.name}
                                </Typography>
                                <Typography align="center" variant="h6">
                                {product.price.formatted_with_symbol}
                                </Typography>
                                <Typography align="center" dangerouslySetInnerHTML={{ __html: product.description }}variant="body1" color="textSecondary" component="text"/>
                            </div>
                        <CardActions className={classes.buttons}>
                            <Button component={Link} to={`/`}  size="medium" type="button" variant="contained" color="secondary" startIcon={<KeyboardArrowLeftRoundedIcon />}>Back</Button>        
                            <Button variant="contained" type="button" color="primary" onClick={() => {handleAddToCart(product.id, 1)}} endIcon={<AddCircleRoundedIcon/>}>Add Item</Button>
                            <Button component={Link} to={`/cart`}  size="medium" type="button" variant="contained" color="secondary" endIcon={<KeyboardArrowRightIcon />}>Pay</Button> 
                        </CardActions >
                        </div>
                    </Card>    
                </main>
                </>
            ))}
            </div>
        </section>
    );
};


export default ProductDescription;