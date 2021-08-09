import { Grid } from '@material-ui/core';
import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import ProductItem from './ProductItem';
import { Text, Box, Button } from 'grommet';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import useStyles from '../utils/styles';
export default function ProductList() {
  const { filter } = useContext(AppContext);
  var { products } = useContext(AppContext);
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [numberItem, setNumberItem] = useState(9);
  const options = products.map((item) => item.title);
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
  return (
    <React.Fragment>
      {products.length !== 0 ? (
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
      ) : (
        <div></div>
      )}
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
  );
}
