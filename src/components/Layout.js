import React, { useState } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AppContext from '../context/AppContext';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { Box } from 'grommet';
import { Children } from 'react';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
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
            onClick={() => setOpenFilter()}
          >
            <MenuIcon />
          </IconButton>

          <Link
            to="/"
            style={{
              textDecoration: 'none',
            }}
          >
            <Typography className={classes.title} variant="h6" noWrap>
              Home
            </Typography>
          </Link>

          <div className={classes.search}>
            {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            /> */}
          </div>
          <div></div>

          <div className={classes.grow} />
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
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </div>
  );
}
