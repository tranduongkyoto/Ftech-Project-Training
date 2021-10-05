import { Grid } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Box, Button, Image, Text } from 'grommet';
import { Cart, Close } from 'grommet-icons';
import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { CartContext } from '../context/CartProvider';
import { ProductContext } from '../context/ProductProvider';
export default function ProductDetail() {
  const { cart, addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  var product = products.find((product) => product._id === id);
  const history = useHistory();
  const addCart = (product) => {
    return addToCart(product);
  };
  console.log(product);
  return (
    <Grid container>
      <Grid item xs={cart.length !== 0 ? 8 : 11}>
        <Box direction="row" justify="center" gap="medium">
          <Box pad="medium">
            <Image fit="cover" src={`${product.image}`} />
          </Box>
          <Box pad="medium" gap="small">
            <Box direction="row" gap="medium">
              <Text
                style={{
                  fontWeight: 'bold',
                }}
              >
                {product.title}
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                }}
              >
                {`${product.price} $`}
              </Text>
            </Box>
            <Box width="700px">
              <Text
              //width="200px"
              >
                {product.desc}
              </Text>
            </Box>
            <Box gap="medium" direction="row">
              <Text
              //width="200px"
              >
                Sizes:
              </Text>
              {product.sizes.map((item) => {
                return (
                  <Box pad="small" background="light-3" key={item._id}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                      }}
                    >
                      {item}
                    </Text>
                  </Box>
                );
              })}
            </Box>
            <Box direction="row" gap="small">
              <Text>Rating : </Text>
              <Rating value={product.rating} name="read-only" readOnly />
            </Box>
            <Box direction="row" gap="small">
              <Text>{`Brand :   ${product.brand}`}</Text>
            </Box>
            <Box gap="small">
              <Text>{`Place Sell  :   ${product.place}`}</Text>
            </Box>
            <Box direction="row" gap="medium" justify="center">
              <Button
                primary
                icon={<Cart />}
                onClick={() => addCart(product)}
              ></Button>
              <Button
                primary
                icon={<Close />}
                onClick={() => history.goBack()}
              ></Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
