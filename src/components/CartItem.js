import React, { useContext } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Button, Text } from 'grommet';
import AppContext from '../context/AppContext';
import { Box, Image } from 'grommet';
export default function CartItem({ product }) {
  const { removeFromCart, addToCart, subToCart } = useContext(AppContext);
  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  return (
    <TableRow>
      <TableCell>
        <Box height="50px" width="50px">
          <Image fit="cover" src={`${product.image}`} />
        </Box>
      </TableCell>
      <TableCell>
        <Text> {product.title}</Text>
      </TableCell>
      <TableCell align="right">
        <Text>{product.price}</Text>
      </TableCell>
      <TableCell align="center">
        <Box direction="row">
          <Button
            label="-"
            size="small"
            onClick={() => {
              subToCart(product);
            }}
          ></Button>
          <Box
            width="30px"
            height="30px"
            primary
            border={{ size: 'small', color: 'brand' }}
            style={{
              borderRadius: '25px',
            }}
          >
            <Text>{product.count}</Text>
          </Box>
          <Button
            label="+"
            size="small"
            onClick={() => {
              addToCart(product);
            }}
          ></Button>
        </Box>
      </TableCell>
      <TableCell align="right">
        <Text>{ccyFormat(product.sum)}</Text>
      </TableCell>
      <TableCell align="right">
        <Button
          primary
          label="X"
          onClick={() => removeFromCart(product._id)}
          size="small"
        ></Button>
      </TableCell>
    </TableRow>
  );
}
