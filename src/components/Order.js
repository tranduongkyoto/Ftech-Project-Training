import React, { useContext, useEffect, useState } from 'react';
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
import { useLocation } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import CartItem from './CartItem';
import { CartContext } from '../context/CartProvider';
import { executeCheckout, getCheckoutResult } from '../services.js/checkout';
import axios from 'axios';
export default function Order() {
  function ccyFormat(num) {
    return num.toFixed(2);
  }
  function solve(product) {
    const sum = product.price * product.count;
    return { ...product, sum };
  }
  const { shippingaddress, order } = useContext(AppContext);

  const { cart } = useContext(CartContext);
  var newCart = cart.map((product) => {
    const newProduct = solve(product);
    return newProduct;
  });
  const location = useLocation();
  const sessionId = location.search;

  const makeCheckout = async () => {
    var checkout_info = {
      name: 'Duong ace',
      price: shippingaddress.total,
      success: `${window.location.href}?session_id={CHECKOUT_SESSION_ID}`,
      cancel: `${window.location.href}`,
    };
    const resaxios = await axios.post(
      '/create-checkout-session',
      checkout_info,
      {}
    );

    console.log(resaxios);
    window.location.href = `${resaxios.data}`;
  };
  const [isPaid, setPaid] = useState(false);
  useEffect(() => {
    var data = {};
    const getResult = async () => {
      if (sessionId !== '') {
        data = await getCheckoutResult(sessionId, `order_id=${order._id}`);
        if (data.data.hasOwnProperty('success')) {
          console.log('isPaid');
          setPaid(true);
        }
      }
    };
    getResult();
  }, []);

  return (
    <Grid>
      {/* <CheckoutWizard activeStep={3}></CheckoutWizard> */}
      <Box justify="center" direction="row" gap="small">
        <Box></Box>
        <Box gap="small">
          <Box>
            <Text
              textAlign="center"
              style={{
                fontWeight: 'bold',
              }}
            >
              {isPaid === false ? `Your Order Summary!` : `Checkout Success`}
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
              <TableRow>
                <TableCell>
                  <Text>Paid</Text>
                </TableCell>
                <TableCell>
                  <Text>
                    {isPaid === false ? `${order.isPaid}` : `${isPaid}`}
                  </Text>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          {isPaid === false ? (
            <Box gap="small">
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
                  label="Checkout!"
                  primary
                  onClick={() => makeCheckout()}
                  style={{
                    width: '200px',
                  }}
                ></Button>
              </Box>
            </Box>
          ) : (
            <div></div>
          )}
        </Box>
      </Box>
    </Grid>
  );
}
