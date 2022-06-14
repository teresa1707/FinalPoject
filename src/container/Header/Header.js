import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import './Header.scss'
import { Menu } from 'components/Menu/Menu'

export const Header = () => {
    return (
        <>
            <AppBar position="static" className="header-menu">
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                            pb={4}
                        >
                            LOGO
                        </Typography>
                        <Menu />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
