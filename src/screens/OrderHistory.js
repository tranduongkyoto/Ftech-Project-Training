import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../context/User';
import { getOrder } from '../services.js/order_services';
import {
  CircularProgress,
  Grid,
  List,
  ListItem,
  TableContainer,
  Typography,
  Card,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  ListItemText,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { AppContext } from '../context/AppProvider';
export default function OrderHistory() {
  const { orderHistory, setOrderHistory } = useContext(AppContext);
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchOrderHistory = async () => {
      const data = await getOrder(user.id, user.token);
      if (data.hasOwnProperty('success')) {
        setOrderHistory(data.data);
        setLoading(false);
      }
    };
    fetchOrderHistory();
  }, []);
  return (
    <Grid container spacing={1}>
      <Grid item md={3} xs={12}>
        <Card>
          <List>
            <Link
              to="/profile"
              passHref
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
            >
              <ListItem button component="a">
                <ListItemText primary="User Profile"></ListItemText>
              </ListItem>
            </Link>
            <Link
              to="/order-history"
              passHref
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
            >
              <ListItem selected button component="a">
                <ListItemText primary="Order History"></ListItemText>
              </ListItem>
            </Link>
          </List>
        </Card>
      </Grid>
      <Grid item md={9} xs={12}>
        <Card>
          <List>
            <ListItem>
              <Typography component="h3" variant="h3">
                Order History
              </Typography>
            </ListItem>
            <ListItem>
              {loading ? (
                <CircularProgress />
              ) : (
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>DATE</TableCell>
                        <TableCell>TOTAL</TableCell>
                        <TableCell>PAID</TableCell>
                        <TableCell>DELIVERED</TableCell>
                        <TableCell>ACTION</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {orderHistory.map((order) => (
                        <TableRow key={order._id}>
                          <TableCell>{order._id.substring(20, 24)}</TableCell>
                          <TableCell>{order.createdAt}</TableCell>
                          <TableCell>${order.totalPrice}</TableCell>
                          <TableCell>
                            {order.isPaid
                              ? `paid at ${order.paidAt}`
                              : 'not paid'}
                          </TableCell>
                          <TableCell>
                            {order.isDelivered
                              ? `delivered at ${order.deliveredAt}`
                              : 'not delivered'}
                          </TableCell>
                          <TableCell>
                            <Link
                              to={`/order/${order._id}`}
                              passHref
                              style={{
                                textDecoration: 'none',
                              }}
                            >
                              <Button variant="contained">Details</Button>
                            </Link>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </ListItem>
          </List>
        </Card>
      </Grid>
    </Grid>
  );
}
