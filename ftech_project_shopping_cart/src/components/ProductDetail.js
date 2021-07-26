import React, { useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import AppContext from '../context/AppContext';
import { Box, Image, Text, Button } from 'grommet';
import { Cart, Close } from 'grommet-icons';
import { Grid } from '@material-ui/core';
import CartList from './CartList';
export default function ProductDetail() {
    const context = useContext(AppContext);
    const cart = context.cart;
    const { id } = useParams();
    var { products } = useContext(AppContext);
    var product = products.find(product => product._id === id);
    const history = useHistory();
    const addToCart = (product) => {
        return context.addToCart(product);
    }
    console.log(context.cart);
    return (
        <Grid
            container
        >
            <Grid item xs={cart.length !== 0 ? 8 : 11}>
                <Box
                    direction="row"
                    justify="center"
                    gap="medium"
                >
                    <Box
                        pad="medium" s
                    >
                        <Image
                            fit="cover"
                            src={`${product.image}`}
                        />
                    </Box>
                    <Box
                        pad="medium"
                    >
                        <Box
                            direction="row"
                            gap="medium"
                        >
                            <Text
                                style={{
                                    fontWeight: 'bold'
                                }}
                            >
                                {product.title}
                            </Text>
                            <Text
                                style={{
                                    fontWeight: 'bold'
                                }}
                            >
                                {`${product.price} $`}
                            </Text>
                        </Box>
                        <Box
                            width="500px"
                        >
                            <Text
                            //width="200px"
                            >
                                {product.desc}
                            </Text>
                        </Box>
                        <Box
                            width="500px"
                            gap="medium"
                            pad="medium"
                            direction="row"
                        >
                            <Text
                            //width="200px"
                            >
                                Available Sizes:
                            </Text>
                            {product.sizes.map(item => {
                                return (
                                    <Box
                                        pad="small"
                                        background="light-3"
                                        key={item._id}
                                    >
                                        <Text
                                            style={{
                                                fontWeight: 'bold'
                                            }}
                                        >{item}
                                        </Text>
                                    </Box>
                                )
                            })}
                        </Box>
                        <Box
                            direction="row"
                            gap="medium"
                            justify="center"
                        >
                            <Button
                                primary
                                icon={<Cart />}
                                onClick={() => addToCart(product)}
                            >

                            </Button>
                            <Button
                                primary
                                icon={<Close />}
                                onClick={() => history.goBack()}
                            >
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            {
                cart.length !== 0 ? (
                    <Grid item xs={4}>
                        <Box
                            gap="small"
                            style={{
                                marginTop: 50,
                                marginRight: 30,
                                marginLeft: 30
                            }}
                        >
                            <CartList />
                        </Box>
                    </Grid>
                ) : (
                    <Grid>
                    </Grid>
                )
            }
        </Grid >

    )
}
