import { Grid } from '@material-ui/core';
import { Box } from 'grommet';
import React, { useContext, useEffect } from 'react';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
import axios from 'axios';
import AppContext from '../context/AppContext';
export default function HomeScreen() {
  const { setProducts } = useContext(AppContext);
  async function getProducts() {
    await axios
      .get('https://6042eed5a20ace001728d9df.mockapi.io/api/products')
      .then((res) => {
        if (res) {
          setProducts(res.data);
          sessionStorage.setItem('products', JSON.stringify(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={2}>
          <Filter />
        </Grid>
        <Grid item xs={10}>
          <Box
            gap="small"
            style={{
              marginLeft: 20,
            }}
          >
            <ProductList />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
