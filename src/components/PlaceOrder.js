import React, { useContext } from 'react';
import { AppContext } from '../context/AppProvider';
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Text,
  Box,
  Button,
} from 'grommet';
import { useHistory } from 'react-router-dom';
import CheckoutWizard from './CheckoutWizard';
import { Grid } from '@material-ui/core';
import CartItem from './CartItem';
import { CartContext } from '../context/CartProvider';
import { UserContext } from '../context/User';
import { addOrder } from '../services.js/order_services';

export default function PlaceOrder() {
  function ccyFormat(num) {
    return num.toFixed(2);
  }
  function solve(product) {
    const sum = product.price * product.count;
    return { ...product, sum };
  }
  const { shippingaddress, setOrder } = useContext(AppContext);
  const history = useHistory();
  const { cart, removeAll } = useContext(CartContext);
  const { user } = useContext(UserContext);
  var newCart = cart.map((product) => {
    const newProduct = solve(product);
    return newProduct;
  });
  var orderCart = newCart.map((item) => {
    return {
      name: item.title,
      count: item.count,
      image: item.image,
      price: item.price,
    };
  });
  const createOrder = () => {
    const createOrder = async () => {
      const order = {
        user: user.id,
        orderItems: orderCart,
        shippingAddress: {
          name: shippingaddress.name,
          phoneNum: shippingaddress.phoneNum,
          address: shippingaddress.address,
          postalCode: shippingaddress.postcode,
        },
        paymentMethod: shippingaddress.paymentmethod,
        totalPrice: shippingaddress.total,
      };
      const data = await addOrder(order, user.token);
      console.log(data);
      setOrder(data.data);
      localStorage.setItem('order', JSON.stringify(data.data));
      history.push(`/order/${data.data._id}`);
    };
    createOrder();
  };
  return (
    <Grid>
      <CheckoutWizard activeStep={3}></CheckoutWizard>
      <Box justify="center" direction="row">
        <Box></Box>
        <Box gap="small">
          <Box>
            <Text
              textAlign="center"
              style={{
                fontWeight: 'bold',
              }}
            >
              Your Order Summary!
            </Text>
          </Box>
          <Table>
            <TableHeader></TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Text>Name</Text>
                </TableCell>
                <TableCell>
                  <Text>{shippingaddress.name}</Text>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Text>Phone Number</Text>
                </TableCell>
                <TableCell>
                  <Text>{shippingaddress.phoneNum}</Text>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Text>Address</Text>
                </TableCell>
                <TableCell>
                  <Text>{shippingaddress.address}</Text>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Text>Post Code</Text>
                </TableCell>
                <TableCell>
                  <Text>{shippingaddress.postcode}</Text>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Text>Payment Method</Text>
                </TableCell>
                <TableCell>
                  <Text>{shippingaddress.paymentmethod}</Text>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Text>Total</Text>
                </TableCell>
                <TableCell>
                  <Text>{`${ccyFormat(shippingaddress.total)} $`}</Text>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Box border={{ size: 'xsmall' }}>
            <Box>
              <Text
                textAlign="center"
                style={{
                  fontWeight: 'bold',
                }}
              >
                Your Cart !
              </Text>
            </Box>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell align="center">
                    <Text>Image</Text>
                  </TableCell>
                  <TableCell align="center">
                    <Text>Name</Text>
                  </TableCell>
                  <TableCell align="center">
                    <Text>Price</Text>
                  </TableCell>
                  <TableCell align="center">
                    <Text>Count</Text>
                  </TableCell>
                  <TableCell align="center">
                    <Text>Sum</Text>
                  </TableCell>
                  <TableCell align="center">
                    <Text>Action</Text>
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {newCart.map((product) => {
                  return <CartItem product={product} key={product._id} />;
                })}
              </TableBody>
            </Table>
          </Box>

          <Box justify="center" direction="row">
            <Box size="small"></Box>
            <Button
              label="Place Order!"
              primary
              onClick={() => createOrder()}
              style={{
                width: '200px',
              }}
            ></Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
