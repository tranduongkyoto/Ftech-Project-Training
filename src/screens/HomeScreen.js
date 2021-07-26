import { Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import Filter from '../components/Filter'
import ProductList from '../components/ProductList'
import CartList from '../components/CartList'
import { Box } from 'grommet'
import AppContext from '../context/AppContext'
export default function HomeScreen() {
    const { cart } = useContext(AppContext);
    return (
        <Grid
            container
        >
            <Grid item xs={cart.length !== 0 ? 8 : 11}>
                <Box
                    gap="small"
                    style={{
                        marginLeft: 20,
                    }}
                >
                    <Filter />
                    <ProductList />
                </Box>
            </Grid>
            {
                cart.length !== 0 ? (
                    <Grid item xs={4}>
                        <Box
                            gap="small"
                            style={{
                                marginTop: 50,
                                marginRight: 30,
                                marginLeft: 30
                            }}
                        >
                            <CartList />
                        </Box>
                    </Grid>
                ) : (
                    <Grid>
                    </Grid>
                )
            }
        </Grid >
    )
}
