import React, { useContext } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Button, Text } from 'grommet';
import AppContext from '../context/AppContext';
export default function CartItem({ product }) {
    const context = useContext(AppContext);
    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
    }
    const removeFromCart = (productId) => {
        return context.removeFromCart(productId);
    }

    return (
        <TableRow>
            <TableCell>{product.title}</TableCell>
            <TableCell align="right"><Text>{product.price}</Text></TableCell>
            <TableCell align="right"><Text>{product.count}</Text></TableCell>
            <TableCell align="right"><Text>{ccyFormat(product.sum)}</Text></TableCell>
            <TableCell align="right">
                <Button
                    primary
                    label="Remove"
                    onClick={() => removeFromCart(product._id)}
                    size="small"
                >
                </Button>
            </TableCell>
        </TableRow >
    )
}
