import React from 'react';
import {useParams } from 'react-router-dom';
import { CardMedia, CardActions, Typography, Button, IconButton, Card} from '@material-ui/core';
import {Link} from 'react-router-dom'
import KeyboardArrowLeftRoundedIcon from '@material-ui/icons/KeyboardArrowLeftRounded';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { AddShoppingCart} from '@material-ui/icons'
import useStyles from './styles';


const ProductDescription = ( {products, handleAddToCart} ) => {
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
                    <Card className={classes.root}>
                        <CardMedia className={classes.media} image={ product.media.source } title={product.name} />
                        <div>
                            <div className={classes.description}>
                            <CardActions className={classes.buttons}>
                            <Button component={Link} to={`/`}  size="medium" type="button" variant="contained" color="secondary" startIcon={<KeyboardArrowLeftRoundedIcon />}>Back</Button>
                            <IconButton aria-label="Add to Cart" onClick={() => {handleAddToCart(product.id, 1)}}>
                            <AddShoppingCart fontSize="large" color="secondary"/>
                            </IconButton>
                            <Button component={Link} to={`/cart`}  size="medium" type="button" variant="contained" color="secondary" endIcon={<KeyboardArrowRightIcon />}>Pay</Button> 
                             </CardActions >
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
                            <IconButton aria-label="Add to Cart" onClick={() => {handleAddToCart(product.id, 1)}}>
                            <AddShoppingCart fontSize="large" color="secondary"/>
                            </IconButton>
                            <Button component={Link} to={`/cart`}  size="medium" type="button" variant="contained" color="secondary" endIcon={<KeyboardArrowRightIcon />}>Pay</Button> 
                        </CardActions >
                        </div>
                    </Card>
            
                </>
            ))}
            </div>
        </section>
    );
};


export default ProductDescription;