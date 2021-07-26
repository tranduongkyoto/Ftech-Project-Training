import React, { useContext } from 'react'
import { Card, CardBody, CardFooter, CardHeader, Text, Box, Image, Button } from 'grommet';
import { Cart } from 'grommet-icons';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
    const context = useContext(AppContext);
    const addToCart = (product) => {
        return context.addToCart(product);
    }
    return (
        <Card height="medium" width="350px" background="light-1">
            <CardHeader>
            </CardHeader>
            <CardBody>
                <Link
                    to={product._id}
                    style={{
                        textDecoration: "none"
                    }}
                >
                    <Box height="310px" width="350px">
                        <Image
                            fit="cover"
                            src={`${product.image}`}
                        />
                    </Box>
                    <Box>
                        <Text
                            textAlign="center"
                        >
                            {product.title}
                        </Text>
                    </Box>

                </Link>
            </CardBody>
            <CardFooter
                pad={{ horizontal: "small" }}
                background="light-2"
            >
                <Text>{`${product.price} $`}</Text>
                <Button
                    icon={<Cart />}
                    onClick={() => addToCart(product)}
                >
                </Button>
            </CardFooter>
        </Card >
    )
}
