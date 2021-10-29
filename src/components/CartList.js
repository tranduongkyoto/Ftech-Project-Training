import React, { useContext, useState } from 'react';
import { Grid } from '@material-ui/core';
import CardItem from './CartItem';
import { Text } from 'grommet';
import { AppContext } from '../context/AppProvider';
import {
  Button,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  TextInput,
  Box,
  Form,
  FormField,
} from 'grommet';
import { useHistory } from 'react-router-dom';
import CheckoutWizard from './CheckoutWizard';
import { CartContext } from '../context/CartProvider';
import { UserContext } from '../context/User';
import { getDiscount } from '../services.js/cart_services';
const TAX_RATE = 0.07;

function ccyFormat(num) {
  return num.toFixed(2);
}

function solve(product) {
  const sum = product.price * product.count;
  return { ...product, sum };
}

function subtotal(items) {
  return items.map(({ sum }) => sum).reduce((sum, i) => sum + i, 0);
}

export default function CartList() {
  const history = useHistory();
  const { cart, removeAll } = useContext(CartContext);
  const { setTotalOrder } = useContext(AppContext);
  const { user } = useContext(UserContext);
  var newCart = cart.map((product) => {
    const newProduct = solve(product);
    return newProduct;
  });
  var invoiceSubtotal = subtotal(newCart);
  var invoiceTaxes = TAX_RATE * invoiceSubtotal;
  var invoiceTotal = invoiceTaxes + invoiceSubtotal;
  const removeAllFromCart = () => {
    return removeAll();
  };
  const [value, setValue] = useState({
    code: '',
  });
  const [discount, setDiscount] = useState(0);
  return (
    <Grid>
      <Box style={{ marginTop: 10 }} width="1100px">
        <CheckoutWizard activeStep={1}></CheckoutWizard>
      </Box>
      <Box direction="column">
        {cart.length !== 0 ? (
          <Box direction="row" gap="200px">
            <Box border={{ size: 'xsmall' }}>
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
                    return <CardItem product={product} key={product._id} />;
                  })}
                </TableBody>
              </Table>
            </Box>

            <Box gap="small">
              <Box border={{ size: 'xsmall' }}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableCell align="right">
                        <Text>Total</Text>
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Text>SubTotal</Text>
                      </TableCell>
                      <TableCell>
                        <Text>{`${ccyFormat(invoiceSubtotal)} $`}</Text>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Text>Tax({`${(TAX_RATE * 100).toFixed(0)} %`})</Text>
                      </TableCell>
                      <TableCell>
                        <Text>{`${ccyFormat(invoiceTaxes)} $`}</Text>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Text>Discount</Text>
                      </TableCell>
                      <TableCell>
                        <Text>{`${ccyFormat(discount)} $`}</Text>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Text>Total</Text>
                      </TableCell>
                      <TableCell>
                        <Text>{`${ccyFormat(invoiceTotal - discount)} $`}</Text>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>

              <Box direction="row" gap="medium" justify="around">
                <Form
                  value={value}
                  enablereinitialize="true"
                  onChange={(nextValue) => setValue(nextValue)}
                  onReset={() => setValue({})}
                  onSubmit={async ({ value }) => {
                    console.log(value);
                    console.log(user);
                    const data = await getDiscount(user, value);
                    setDiscount((invoiceTotal * data.data) / 100);
                  }}
                >
                  <FormField
                    name="code"
                    htmlFor="text-input-id"
                    label="Code"
                    required="true"
                  >
                    <TextInput id="text-input-id" name="code" size="" />
                  </FormField>

                  <Box direction="row" gap="medium" justify="center">
                    <Button type="submit" primary label="OK" />
                    {/* <Button type="reset" label="Reset" />
                    <Button label="Cancel"></Button> */}
                  </Box>
                </Form>
              </Box>
              <Box direction="row-responsive" justify="center" gap="small">
                <Button
                  primary
                  label="Next"
                  onClick={() => {
                    setTotalOrder(invoiceTotal - discount);
                    if (!user) {
                      history.push('/login?redirect=/address');
                    } else history.push('/address');
                  }}
                  size="medium"
                ></Button>
                <Button
                  secondary
                  label="Remove All"
                  onClick={() => removeAllFromCart()}
                  size="medium"
                ></Button>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box justify="center" direction="row">
            <Box></Box>
            <Text>Cart is empty!</Text>
          </Box>
        )}
      </Box>
    </Grid>
  );
}
