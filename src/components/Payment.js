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
function ccyFormat(num) {
  return num.toFixed(2);
}
export default function Payment() {
  const { shippingaddress, total } = useContext(AppContext);
  const history = useHistory();

  return (
    <Grid>
      <CheckoutWizard activeStep={3}></CheckoutWizard>
      <Box justify="center" direction="row">
        <Box></Box>
        <Box>
          <Box>
            <Text
              textAlign="center"
              style={{
                fontWeight: 'bold',
              }}
            >
              You has been order succeed!
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
          <Box justify="center">
            <Button
              label="Go back home!"
              primary
              onClick={() => history.push('/')}
            ></Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
