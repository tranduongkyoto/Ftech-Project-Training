import { Link } from 'react-router-dom';
import React, { useEffect, useContext } from 'react';
import {
  CircularProgress,
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  Button,
  ListItemText,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { AppContext } from '../../context/AppProvider';
import { UserContext } from '../../context/User';
import { getOrders } from '../../services.js/order_services';
import { useState } from 'react';

export default function OrderAdmin() {
  const { orderAdmin, setOrderAdmin } = useContext(AppContext);
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchOrderHistory = async () => {
      const data = await getOrders(user.id, user.token);
      if (data.hasOwnProperty('success')) {
        setOrderAdmin(data.data);
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
              to="/admin/dashboard"
              passHref
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
            >
              <ListItem button component="a">
                <ListItemText primary="Admin Dashboard"></ListItemText>
              </ListItem>
            </Link>
            <Link
              to="/admin/orders"
              passHref
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
            >
              <ListItem selected button component="a">
                <ListItemText primary="Orders"></ListItemText>
              </ListItem>
            </Link>
            <Link
              to="/admin/products"
              passHref
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
            >
              <ListItem button component="a">
                <ListItemText primary="Products"></ListItemText>
              </ListItem>
            </Link>
            <Link
              to="/admin/users"
              passHref
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
            >
              <ListItem button component="a">
                <ListItemText primary="Users"></ListItemText>
              </ListItem>
            </Link>
          </List>
        </Card>
      </Grid>
      <Grid item md={9} xs={12}>
        <Card>
          <List>
            <ListItem>
              <Typography component="h1" variant="h3">
                Orders
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
                        <TableCell>USER</TableCell>
                        <TableCell>DATE</TableCell>
                        <TableCell>TOTAL</TableCell>
                        <TableCell>PAID</TableCell>
                        <TableCell>DELIVERED</TableCell>
                        <TableCell>ACTION</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {orderAdmin.map((order) => (
                        <TableRow key={order._id}>
                          <TableCell>{order._id.substring(20, 24)}</TableCell>
                          <TableCell>
                            {order.user ? order.user.name : 'DELETED USER'}
                          </TableCell>
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
