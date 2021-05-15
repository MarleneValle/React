import React from 'react';
import {useParams } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Container} from '@material-ui/core';
import {Link} from 'react-router-dom'
import KeyboardArrowLeftRoundedIcon from '@material-ui/icons/KeyboardArrowLeftRounded';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import useStyles from './styles';


const ProductDescription = ( {products, handleRemoveFromCart,    handleAddToCart} ) => {
    const { name } = useParams();
    const classes = useStyles();

    return(
        <section>
            <div className="container">
                {products
                .filter((product)=> product.name === name)
                .map((product, index) => (
                <>
                <div className={classes.toolbar}/>
                <main className={classes.productDetails}>
                        <Container  >
                            <div className={classes.text}>
                                <Typography align="center" color="primary"variant="h3" gutterBottom>{name}</Typography>
                            </div>
                            <div className={classes.buttons}>
                                    <Button component={Link} to={`/`}  size="medium" type="button" variant="contained" color="secondary" startIcon={<KeyboardArrowLeftRoundedIcon />}>Back</Button>
                                    
                                    <Button variant="contained" type="button" color="primary" onClick={() => {handleAddToCart(product.id, 1)}} endIcon={<AddCircleRoundedIcon/>}>Add Item</Button>
                                    <Button component={Link} to={`/cart`}  size="medium" type="button" variant="contained" color="secondary" endIcon={<KeyboardArrowRightIcon />}>Pay
                                    </Button> 
                                </div>
                            <div>
                        <CardMedia className={classes.media} image={product.media.source} title={name} />
                             
                        <Typography align="center" color="primary"variant="h5" gutterBottom>Product description</Typography>
                        <Typography align="center" dangerouslySetInnerHTML={{ __html: product.description }}variant="body1" color="textSecondary" component="text" className={classes.text}/>
                        </div>
                        </Container>     
                </main>
                </>
            ))}
            </div>
        </section>
    );
};


export default ProductDescription;