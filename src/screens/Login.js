import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import React, { Fragment, useContext, useState } from 'react';
import { Login, getUserData } from '../services.js/login';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/User';
import { CartContext } from '../context/CartProvider';
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { setUser } = useContext(UserContext);
  const { setCart } = useContext(CartContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const data = await Login(email, password);
    if (data.success === true) {
      const user_data = await getUserData(data);
      console.log(user_data);
      if (user_data.hasOwnProperty('success')) {
        if (user_data.data[0].hasOwnProperty('_id')) {
          setUser({ ...data, user_data_id: user_data.data[0]._id });
          localStorage.setItem(
            'user_info',
            JSON.stringify({ ...data, user_data_id: user_data.data[0]._id })
          );
        }
        if (user_data.data[0].hasOwnProperty('cart')) {
          setCart(user_data.data[0].cart);
          localStorage.setItem('cart', JSON.stringify(user_data.data[0].cart));
        }
      } else {
        setUser(data);
        localStorage.setItem('user_info', JSON.stringify(data));
      }
    }
    history.goBack();
  };
  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <Typography component="h3" variant="h3">
          Login
        </Typography>
        <List>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              inputProps={{ type: 'email' }}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </ListItem>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
              inputProps={{ type: 'password' }}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Login
            </Button>
          </ListItem>
          <ListItem>
            Don't have an account? &nbsp;
            <Link
              to={`/register`}
              style={{
                textDecoration: 'none',
              }}
            >
              Register
            </Link>
          </ListItem>
        </List>
      </form>
    </Fragment>
  );
}
