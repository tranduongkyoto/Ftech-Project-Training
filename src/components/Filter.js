import { Select, Text, Box } from 'grommet'
import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext';

export default function Filter() {
    const context = useContext(AppContext);
    const [value, setValue] = useState('Lastest');
    const [size, setSize] = useState('All');
    return (
        <Box
            gap="medium"
            direction="row"
            justify="center"
        >
            <Box
                justify="around"
            >
                <Text>{`${context.products.length} Products`}</Text>
            </Box>
            <Box
                width="small"
                direction="row"
                gap="medium"
                justify="around"
            >
                <Box
                    justify="around"
                >
                    <Text>Order</Text>
                </Box>

                <Select
                    options={['Lastest', 'Highest', 'Lowest']}
                    value={value}
                    onChange={({ value }) => {
                        setValue(value);
                        context.setValueFilter(value)
                    }}
                >
                </Select>
            </Box>
            <Box
                width="small"
                direction="row"
                gap="medium"
                justify="around"
            >
                <Box
                    justify="around"
                >
                    <Text>Size</Text>
                </Box>
                <Select
                    options={['All', 'M', 'L', 'XL', 'XXL']}
                    value={size}
                    onChange={({ value }) => {
                        setSize(value);
                        context.setSizeFilter(value)
                    }}
                >
                </Select>
            </Box>
        </Box>
    )
}
