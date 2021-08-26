import { Grid } from '@material-ui/core';
import { Box } from 'grommet';
import React from 'react';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
export default function HomeScreen() {
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
