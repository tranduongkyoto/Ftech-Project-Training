import { Text, Box } from 'grommet';
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppProvider';
import { Form, FormField, TextInput, Button, CheckBox } from 'grommet';
export default function Filter() {
  const context = useContext(AppContext);
  const categoryValue = ['Woman', 'Man'];
  const [category, setCategory] = useState([false, false]);
  const placeValue = ['Ha Noi', 'HCM City', 'Foreign'];
  const [place, setPlace] = useState([false, false, false]);
  const brandValue = ['Yody', 'Choobe', 'Nelly'];
  const [brand, setBrand] = useState([false, false, false]);
  const [value, setValue] = useState({
    from: '',
    to: '',
  });
  useEffect(() => {
    setCategory([false, false]);
    setPlace([false, false, false]);
    setBrand([false, false, false]);
    context.addFilter('', {});
  }, []);
  return (
    <Box
      gap="small"
      direction="column"
      justify="center"
      style={{
        margin: '20px',
      }}
    >
      <Box direction="column" gap="medium" justify="around">
        <Box justify="start">
          <Text>Category</Text>
        </Box>
        <Box width="150px" gap="small">
          <CheckBox
            checked={category[0]}
            label={`${categoryValue[0]}`}
            onChange={() => {
              var newCategory = [...category];
              newCategory[0] = !category[0];
              setCategory(newCategory);
              context.addFilter('category', {
                category: newCategory,
              });
            }}
          />
          <CheckBox
            checked={category[1]}
            label={`${categoryValue[1]}`}
            onChange={() => {
              var newCategory = [...category];
              newCategory[1] = !category[1];
              setCategory(newCategory);
              context.addFilter('category', {
                category: newCategory,
              });
            }}
          />
        </Box>
      </Box>
      <Box direction="column" gap="medium" justify="around">
        <Box justify="start">
          <Text>Place</Text>
        </Box>
        <Box width="150px" gap="small">
          <CheckBox
            checked={place[0]}
            label={`${placeValue[0]}`}
            onChange={() => {
              var newPlace = [...place];
              newPlace[0] = !place[0];
              setPlace(newPlace);
              context.addFilter('place', {
                place: newPlace,
              });
            }}
          />
          <CheckBox
            checked={place[1]}
            label={`${placeValue[1]}`}
            onChange={() => {
              var newPlace = [...place];
              newPlace[1] = !place[1];
              setPlace(newPlace);
              context.addFilter('place', {
                place: newPlace,
              });
            }}
          />
          <CheckBox
            checked={place[2]}
            label={`${placeValue[2]}`}
            onChange={() => {
              var newPlace = [...place];
              newPlace[2] = !place[2];
              setPlace(newPlace);
              context.addFilter('place', {
                place: newPlace,
              });
            }}
          />
        </Box>
      </Box>
      <Box direction="column" gap="medium" justify="around">
        <Box justify="start">
          <Text>Brand</Text>
        </Box>
        <Box width="150px" gap="small">
          <CheckBox
            checked={brand[0]}
            label={`${brandValue[0]}`}
            onChange={() => {
              var newBrand = [...brand];
              newBrand[0] = !brand[0];
              setBrand(newBrand);
              context.addFilter('brand', {
                brand: newBrand,
              });
            }}
          />
          <CheckBox
            checked={brand[1]}
            label={`${brandValue[1]}`}
            onChange={() => {
              var newBrand = [...brand];
              newBrand[1] = !brand[1];
              setBrand(newBrand);
              context.addFilter('brand', {
                brand: newBrand,
              });
            }}
          />
          <CheckBox
            checked={brand[2]}
            label={`${brandValue[2]}`}
            onChange={() => {
              var newBrand = [...brand];
              newBrand[2] = !brand[2];
              setBrand(newBrand);
              context.addFilter('brand', {
                brand: newBrand,
              });
            }}
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
              <Button
                primary
                label="Clear"
                type="reset"
                onClick={() => {
                  setCategory([false, false]);
                  setPlace([false, false, false]);
                  setBrand([false, false, false]);
                  //setValue({});
                  context.addFilter('', {});
                }}
              />
            </Box>
          </Form>
        </Box>
      </Box>
    </Box>
  );
}
