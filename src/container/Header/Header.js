import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

import { Container, TextField } from '@mui/material'
import './Header.scss'
import { Menu } from 'components/Menu/Menu'

import SearchInput from 'components/Menu/SearchInput'

export const Header = () => {
    return (
        <>
            <AppBar position="fixed" className="header-menu">
                <Container>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                            pb={4.5}
                        >
                            LOGO
                        </Typography>
                        <Menu />
                        <SearchInput />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
