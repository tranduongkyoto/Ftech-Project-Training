import { AppBar, Toolbar, IconButton, Typography, } from '@material-ui/core'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { Text } from 'grommet';
export default function AppHeader() {
    return (
        <AppBar position="static"
            style={{
                background: "#7d4cdb"
            }}
        >
            <Toolbar>
                <IconButton edge="start" aria-label="menu"
                    style={{
                        color: 'white'
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Link to="/"
                    style={{
                        textDecoration: "none"
                    }}
                >
                    <Text
                        style={{
                            color: 'white'
                        }}
                    >Home</Text>
                </Link>

                {/* <Link
                    to="/admin"
                    style={{
                        textDecoration: "none"
                    }}
                >
                    <Text>Admin</Text>
                </Link> */}
            </Toolbar>
        </AppBar>
    )
}
