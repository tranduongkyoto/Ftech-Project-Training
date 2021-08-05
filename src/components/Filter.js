import { Text, Box, CheckBoxGroup } from 'grommet';
import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import useStyles from '../utils/styles';
import { Form, FormField, TextInput, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
export default function Filter() {
  const context = useContext(AppContext);
  const [value, setValue] = useState({
    from: '',
    to: '',
  });
  const history = useHistory();
  return (
    <Box
      gap="small"
      direction="column"
      justify="center"
      style={{
        margin: '20px',
      }}
    >
      {/* <Box>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            console.log(newValue);
          }}
          id="controllable-states-demo"
          options={options}
          style={{ width: 300 }}
          backgroundColor="primary"
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: 'search' }}
              style={{
                color: 'white',
              }}
            />
          )}
        />
      </Box> */}

      <Box direction="column" gap="medium" justify="around">
        <Box justify="start">
          <Text>Category</Text>
        </Box>
        <Box width="150px">
          <CheckBoxGroup
            options={['Women', 'Men']}
            onChange={({ value }) => {
              context.addFilter('category', { category: value });
            }}
          />
        </Box>
      </Box>
      <Box direction="column" gap="medium" justify="around">
        <Box justify="start">
          <Text>Place</Text>
        </Box>
        <Box width="150px">
          <CheckBoxGroup
            options={['Ha Noi', 'HCM City', 'Foreign']}
            onChange={({ value }) =>
              context.addFilter('place', { place: value })
            }
          />
        </Box>
      </Box>
      <Box direction="column" gap="medium" justify="around">
        <Box justify="start">
          <Text>Brand</Text>
        </Box>
        <Box width="150px">
          <CheckBoxGroup
            options={['WIND', 'Yody', 'Choobe', 'Nelly']}
            onChange={({ value }) =>
              context.addFilter('brand', { brand: value })
            }
          />
        </Box>
      </Box>
      <Box direction="column" gap="medium" justify="around">
        <Box justify="start">
          <Text>Price</Text>
        </Box>
        <Box gap="medium" width="small">
          <Form
            value={value}
            enablereinitialize="true"
            onChange={(nextValue) => setValue(nextValue)}
            onReset={() => setValue({})}
            onSubmit={({ value }) => {
              setValue(value);
              context.addFilter('price', { price: value });
            }}
          >
            <FormField
              name="from"
              htmlFor="from-input-id"
              label="From"
              required={true}
            >
              <TextInput id="from-input-id" name="from" />
            </FormField>

            <FormField
              name="to"
              htmlFor="to-input-id"
              label="To"
              required={true}
            >
              <TextInput id="to-input-id" name="to" />
            </FormField>
            <Box justify="center" gap="medium">
              <Button type="submit" primary label="Search" />
              <Button primary label="Clear" onClick={() => history.push('')} />
            </Box>
          </Form>
        </Box>
      </Box>
    </Box>
  );
}
