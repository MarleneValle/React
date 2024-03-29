import React, { useState, useEffect } from 'react';
import { Products, ProductDescription , Navbar, Cart, Checkout, Footer, NotFound } from './components';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { cyan, orange } from '@material-ui/core/colors';

const App = () => {
    const [products, setProducts ] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    
        const fetchProducts = async () => {
            const { data } = await commerce.products.list();
            setProducts(data);
        }
        
        const fetchCart = async () => {
            setCart( await commerce.cart.retrieve());
        };

        const handleAddToCart =  async (productId, quantity) => {
            const { cart } = await commerce.cart.add(productId, quantity);
            setCart(cart);
        };

        const handleUpdateCartQty =async (productId, quantity) => {
            const { cart } = await commerce.cart.update(productId, {quantity});
            setCart(cart);
        };

        const handleRemoveFromCart = async (productId) => {
            const { cart } = await commerce.cart.remove(productId);
            setCart(cart);
        };

        const handleEmptyCart = async () => {
            const response  = await commerce.cart.empty();
            setCart(response.cart);
        };

        const refreshCart = async () => {
            const newCart = await commerce.cart.refresh();
            setCart(newCart);
          };

        const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
            try {
                const incomingOrder = await commerce.checkout.capture(checkoutTokenId,newOrder);
                
                setOrder(incomingOrder);

                refreshCart();
            } catch (error) {
                setErrorMessage(error.data.error.message);
            }
        };

        useEffect(() => {
            fetchProducts();
            fetchCart();
        }, []);

       // materia-ui theme
        const theme = createMuiTheme({
            palette: {
                secondary: {
                    main: orange[700],
                    contrastText: '#fff'
                },    
                primary: {
                    main: cyan[800],
                },
                text: {
                    primary: cyan[900]
                },
            }
        });

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div>
                    <Navbar totalItems={cart.total_items} />
                    <Switch>
                        <Route exact path="/">
                            <Products
                                products={products}
                                handleAddToCart={ handleAddToCart }/>
                        </Route>
                        <Route path="/products/:name">
                            <ProductDescription 
                                cart={cart}
                                products={products}
                                handleRemoveFromCart={handleRemoveFromCart}
                                handleAddToCart={ handleAddToCart}/>
                        </Route>
                        <Route exact path="/cart">
                            <Cart
                                cart={cart}
                                handleUpdateCartQty={handleUpdateCartQty}
                                handleRemoveFromCart={handleRemoveFromCart}
                                handleEmptyCart={handleEmptyCart}/>
                        </Route>
                        <Route exact path="/checkout">
                            <Checkout 
                                cart={cart}
                                order={order}
                                onCaptureCheckout={handleCaptureCheckout}
                                error={errorMessage}
                                refreshCart={refreshCart}/>
                        </Route>
                        <Route path= "*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        </ThemeProvider>
    )
}

export default App;
