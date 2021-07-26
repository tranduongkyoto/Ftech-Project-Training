import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CardItem from './CartItem';
import { Box, Text } from 'grommet';
import AppContext from '../context/AppContext';
import { Button, Table, TableHeader, TableRow, TableCell, TableBody } from 'grommet';
import FormProceed from './FormProceed';

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
    const { cart, isOpenForm, changeForm, removeAll } = useContext(AppContext);
    var newCart = cart.map(product => {
        const newProduct = solve(product);
        return newProduct;
    });
    var invoiceSubtotal = subtotal(newCart);
    var invoiceTaxes = TAX_RATE * invoiceSubtotal;
    var invoiceTotal = invoiceTaxes + invoiceSubtotal;
    const removeAllFromCart = () => {
        return removeAll();
    }
    return (
        <Grid
            container
        >
            <Box>
                <Box>
                    <Text
                        textAlign="center"
                        style={{
                            fontWeight: "bold"
                        }}
                    >
                        {`You have ${cart.length} items in your cart`}
                    </Text>
                </Box>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell><Text>Name</Text></TableCell>
                            <TableCell align="right"><Text>Price</Text></TableCell>
                            <TableCell align="right"><Text>Count</Text></TableCell>
                            <TableCell align="right"><Text>Sum</Text></TableCell>
                            <TableCell align="right"><Text></Text></TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {newCart.map((product) => {
                            return (
                                <CardItem
                                    product={product}
                                    key={product._id}
                                />
                            )
                        })}
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell><Text>SubTotal</Text></TableCell>
                            <TableCell><Text>{ccyFormat(invoiceSubtotal)}</Text></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell><Text>Tax({`${(TAX_RATE * 100).toFixed(0)} %`})</Text> </TableCell>
                            <TableCell><Text>{ccyFormat(invoiceTaxes)}</Text></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell><Text>Total</Text></TableCell>
                            <TableCell><Text>{ccyFormat(invoiceTotal)}</Text></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                {
                    cart.length !== 0 ? (
                        <Box
                            direction="row-responsive"
                            justify="center"
                            gap="small"
                        >
                            <Button
                                primary
                                label="Proceed"
                                onClick={() => { changeForm() }}
                                size="medium"
                            >
                            </Button>
                            <Button
                                secondary
                                label="Remove All"
                                onClick={() => removeAllFromCart()}
                                size="medium"
                            >
                            </Button>
                        </Box>

                    ) : (
                        <div></div>
                    )
                }
                {
                    isOpenForm ? (
                        <Box
                            size="small"
                            style={{
                                //marginTop: 50
                                marginBottom: 20
                            }}
                        >
                            <FormProceed
                                total={invoiceTotal}
                            />

                        </Box>
                    ) : (
                        <div></div>
                    )
                }
            </Box >
        </Grid>

    );
}
