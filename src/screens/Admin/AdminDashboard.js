import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  CircularProgress,
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  Button,
  ListItemText,
  CardContent,
  CardActions,
} from '@material-ui/core';
import { Bar } from 'react-chartjs-2';

export default function AdminDashboard() {
  var loading = false;
  useEffect(() => {
    // if (!userInfo) {
    //   router.push('/login');
    // }
    const fetchData = async () => {
      try {
        // const { data } = await axios.get(`/api/admin/summary`, {
        //   headers: { authorization: `Bearer ${userInfo.token}` },
        // });
      } catch (err) {}
    };
    fetchData();
  }, []);
  const summary = {
    ordersPrice: 200,
    ordersCount: 2,
    productsCount: 10,
    usersCount: 10,
    salesData: [
      { _id: '8', totalSales: 100 },
      { _id: '9', totalSales: 120 },
      { _id: '10', totalSales: 90 },
    ],
  };
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
              <ListItem selected button component="a">
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
              <ListItem button component="a">
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
              {loading ? (
                <CircularProgress />
              ) : (
                <Grid container spacing={5}>
                  <Grid item md={3}>
                    <Card raised>
                      <CardContent>
                        <Typography variant="h4">
                          ${summary.ordersPrice}
                        </Typography>
                        <Typography>Sales</Typography>
                      </CardContent>
                      <CardActions>
                        <Link
                          to="/admin/orders"
                          passHref
                          style={{
                            textDecoration: 'none',
                          }}
                        >
                          <Button size="small" color="primary">
                            View sales
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item md={3}>
                    <Card raised>
                      <CardContent>
                        <Typography variant="h4">
                          {summary.ordersCount}
                        </Typography>
                        <Typography>Orders</Typography>
                      </CardContent>
                      <CardActions>
                        <Link
                          to="/admin/orders"
                          passHref
                          style={{
                            textDecoration: 'none',
                          }}
                        >
                          <Button size="small" color="primary">
                            View orders
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item md={3}>
                    <Card raised>
                      <CardContent>
                        <Typography variant="h4">
                          {summary.productsCount}
                        </Typography>
                        <Typography>Products</Typography>
                      </CardContent>
                      <CardActions>
                        <Link
                          to="/admin/products"
                          passHref
                          style={{
                            textDecoration: 'none',
                          }}
                        >
                          <Button size="small" color="primary">
                            View products
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item md={3}>
                    <Card raised>
                      <CardContent>
                        <Typography variant="h4">
                          {summary.usersCount}
                        </Typography>
                        <Typography>Users</Typography>
                      </CardContent>
                      <CardActions>
                        <Link
                          to="/admin/users"
                          passHref
                          style={{
                            textDecoration: 'none',
                          }}
                        >
                          <Button size="small" color="primary">
                            View users
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              )}
            </ListItem>
            <ListItem>
              <Typography component="h1" variant="h4">
                Sales Chart
              </Typography>
            </ListItem>
            <ListItem>
              <Bar
                data={{
                  labels: summary.salesData.map((x) => x._id),
                  datasets: [
                    {
                      label: 'Sales',
                      backgroundColor: 'rgba(162, 222, 208, 1)',
                      data: summary.salesData.map((x) => x.totalSales),
                    },
                  ],
                }}
                options={{
                  legend: { display: true, position: 'right' },
                }}
              ></Bar>
            </ListItem>
          </List>
        </Card>
      </Grid>
    </Grid>
  );
}
