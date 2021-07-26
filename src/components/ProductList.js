import { Grid } from '@material-ui/core';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import ProductItem from './ProductItem';
import { Text, Box } from 'grommet';
export default function ProductList() {
    const { value, size } = useContext(AppContext);
    var { products, cart } = useContext(AppContext);

    console.log(cart);
    if (value !== "Lastest") {
        if (value === "Highest") {
            products.sort((a, b) => b.price - a.price).map(item => item.price);
        } else {
            products.sort((a, b) => a.price - b.price).map(item => item.price);
        }
    }
    if (size !== "All") {
        products = products.filter(item => item.sizes.includes(size));
    }
    return (
        <Grid container spacing={1}>
            {
                products.length === 0 ? (
                    <Box
                        justify="center"
                    >
                        <Text>
                            No Product
                        </Text>
                    </Box>

                ) : (
                    products.map(product => {
                        return (
                            <Grid item xs={4} key={product._id}>
                                <ProductItem
                                    product={product}
                                    key={product._id}
                                />
                            </Grid>
                        )
                    })
                )
            }
        </Grid>
    )
}
