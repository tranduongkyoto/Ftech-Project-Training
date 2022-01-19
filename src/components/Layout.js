import { Container, Button, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { CartContext } from '../context/CartProvider';
import { UserContext } from '../context/User';
import { Logout, updateUserData } from '../services.js/logout';
import { AppContext } from '../context/AppProvider';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    marginBottom: 20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color: 'white',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    // '&:hover': {
    //   backgroundColor: alpha(theme.palette.common.white, 0.25),
    // },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  footer: {
    marginTop: 10,
    textAlign: 'center',
  },
}));

export default function Layout({ children }) {
  const { cart, setCart } = useContext(CartContext);
  const { order, shippingaddress } = useContext(AppContext);
  const classes = useStyles();
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const loginMenuCloseHandler = () => {
    setAnchorEl(null);
  };
  const newCart = cart.map((item) => item._id);
  const logoutClickHandler = async () => {
    const user_data = {
      user: user.id,
      order: order._id,
      cart: cart,
      shippingAddress: {
        name: shippingaddress.name,
        phoneNum: shippingaddress.phoneNum,
        address: shippingaddress.address,
        postalCode: shippingaddress.postcode,
      },
    };
    if (!user.hasOwnProperty('user_data_id')) {
      // khong co
      const data = await Logout(user, user_data);
      if (data.hasOwnProperty('success')) {
        setAnchorEl(null);
        localStorage.removeItem('user_info');
        setUser(null);
        setCart([]);
        localStorage.removeItem('cart');
        localStorage.removeItem('order');
        localStorage.removeItem('address');
      }
    } else {
      // co
      const data = await updateUserData(user, user_data);
      console.log(data);
      if (data.hasOwnProperty('success')) {
        setAnchorEl(null);
        localStorage.removeItem('user_info');
        setUser(null);
        setCart([]);
        localStorage.removeItem('cart');
        localStorage.removeItem('order');
        localStorage.removeItem('address');
      }
    }
    history.push('/');
  };
  return (
    <div className={classes.grow}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="cart"
              color="inherit"
              onClick={() => history.push('/')}
            >
              <Badge color="secondary">
                <HomeOutlinedIcon fontSize="large" />
              </Badge>
            </IconButton>
          </div>

          <div className={classes.grow} />
          <div position="relative" left="200px">
            <Typography></Typography>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="cart" color="inherit">
              <Badge color="secondary">
                <GroupOutlinedIcon />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="cart" color="inherit">
              <Badge color="secondary">
                <FavoriteBorderOutlinedIcon />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="cart"
              color="inherit"
              onClick={() => history.push('/cart')}
            >
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </div>
          {user ? (
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-label="cart"
                color="inherit"
                onClick={loginClickHandler}
              >
                <Badge color="secondary">
                  <AccountCircleOutlinedIcon />
                </Badge>
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={loginMenuCloseHandler}
              >
                <MenuItem onClick={() => history.push(`/profile?${user.id}`)}>
                  Profile
                </MenuItem>
                {user.role === 'admin' && (
                  <MenuItem onClick={() => history.push('/admin/dashboard')}>
                    Admin Dashboard
                  </MenuItem>
                )}
                {/* {user.role !== 'admin' && (
                  <MenuItem
                    onClick={() => history.push(`/order-history/${user.id}`)}
                  >
                    Order History
                  </MenuItem>
                )} */}
                <MenuItem
                  onClick={() => history.push(`/order-history/${user.id}`)}
                >
                  Order History
                </MenuItem>
                <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-label="cart"
                color="inherit"
                onClick={() => history.push('/login')}
              >
                <Badge color="secondary">
                  <LoginOutlinedIcon />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      {/* <footer
        className={classes.footer}
        style={{
          position: 'fixed',
          left: 600,
          bottom: 10,
        }}
      >
        <Typography>Duong Ace</Typography>
      </footer> */}
    </div>
  );
}
