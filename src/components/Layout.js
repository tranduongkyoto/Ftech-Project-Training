import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import AppContext from '../context/AppContext';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
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
  const classes = useStyles();
  const { cart, products, setOpenFilter } = useContext(AppContext);
  const history = useHistory();
  const [value, setValue] = useState('');
  const options = products.map((item) => item.title);
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
            <Typography>FTECH SHOPPING CART</Typography>
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
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="cart" color="inherit">
              <Badge color="secondary">
                <AccountCircleOutlinedIcon />
              </Badge>
            </IconButton>
          </div>
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
