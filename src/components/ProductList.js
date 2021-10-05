import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Box, Button, Text } from 'grommet';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppProvider';
import { ProductContext } from '../context/ProductProvider';
import { GetProducts } from '../services.js/products_services';
import ProductItem from './ProductItem';
export default function ProductList() {
  var { products, setProducts } = useContext(ProductContext);
  const { filter } = useContext(AppContext);
  const [numberItem, setNumberItem] = useState(9);
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const isLoading = products;
  products = products.filter((item) => products.indexOf(item) < numberItem);

  if (filter.category.length !== 0) {
    products = products.filter(
      (item) => filter.category.indexOf(item.category) !== -1
    );
  }
  if (filter.place.length !== 0) {
    products = products.filter(
      (item) => filter.place.indexOf(item.place) !== -1
    );
  }
  if (filter.brand.length !== 0) {
    products = products.filter(
      (item) => filter.brand.indexOf(item.brand) !== -1
    );
  }
  if (filter.price.length !== 0) {
    products = products.filter(
      (item) =>
        item.price >= Number(filter.price.from) &&
        item.price <= Number(filter.price.to)
    );
  }
  if (search) {
    products = products.filter(
      (item) =>
        item.title.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
    );
  }
  if (searchInput) {
    products = products.filter(
      (item) =>
        item.title.toLowerCase().indexOf(searchInput.toLocaleLowerCase()) !== -1
    );
  }
  const options = products.map((item) => item.title);
  useEffect(() => {
    GetProducts(numberItem)
      .then((res) => {
        if (res) {
          setProducts(res.data);
          sessionStorage.setItem('products', JSON.stringify(res.data));
        }
      })
      .catch((err) => console.log(err));
  }, [numberItem]);
  return (
    <React.Fragment>
      {isLoading.length === 0 ? (
        <React.Fragment>
          <Grid container>
            <Grid item xs={5}></Grid>
            <Grid item xs={4} style={{ marginTop: 300 }}>
              <CircularProgress />
            </Grid>
          </Grid>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Grid container>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <Autocomplete
                value={search}
                onChange={(event, newValue) => {
                  setSearch(newValue);
                }}
                id="search"
                options={options}
                backgroundcolor="primary"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Here!"
                    margin="normal"
                    variant="outlined"
                    style={{
                      color: 'white',
                    }}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            style={{
              margin: 10,
            }}
          >
            {products.length === 0 ? (
              <Box justify="center">
                <Text>No Product</Text>
              </Box>
            ) : (
              products.map((product) => {
                return (
                  <Grid item xs={4} key={product._id}>
                    <ProductItem product={product} key={product._id} />
                  </Grid>
                );
              })
            )}
          </Grid>
          <Grid container>
            <Grid item xs={5}></Grid>
            <Grid item xs={4}>
              <Button
                primary
                label="More"
                onClick={() => setNumberItem(numberItem + 9)}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
