import Rating from '@material-ui/lab/Rating';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Text,
} from 'grommet';
import { Cart } from 'grommet-icons';
import { useSnackbar } from 'notistack';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartProvider';

export default function ProductItem({ product }) {
  const { addToCart } = useContext(CartContext);
  const { enqueueSnackbar } = useSnackbar();
  const addCart = (product) => {
    addToCart(product);
    enqueueSnackbar('Success Add to Cart!', { variant: 'success' });
    return;
  };
  return (
    <Card height="medium" width="350px" background="light-1">
      <CardHeader></CardHeader>
      <CardBody>
        <Link
          to={`/product/${product._id}`}
          style={{
            textDecoration: 'none',
          }}
        >
          <Box height="310px" width="350px">
            <Image fit="cover" src={`${product.image}`} />
          </Box>
          <Box direction="row" justify="center" gap="medium">
            <Text textAlign="center">{product.title}</Text>
            <Text textAlign="center">{`${product.price} $`}</Text>
          </Box>
          <Box></Box>
        </Link>
      </CardBody>
      <CardFooter pad={{ horizontal: 'small' }} background="light-2">
        <Rating value={product.rating} readOnly />
        <Button icon={<Cart />} onClick={() => addCart(product)}></Button>
      </CardFooter>
    </Card>
  );
}
