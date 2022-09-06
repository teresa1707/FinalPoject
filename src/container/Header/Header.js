import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { Container } from '@mui/material'
import './Header.scss'
import { Menu } from 'components/Menu/Menu'

import SearchInput from 'components/Menu/SearchInput'
import { Favorite } from 'components/Favorite/Favorite'
import { Link } from 'react-router-dom'

export const Header = ({ likedArticles }) => {
    return (
        <>
            <AppBar position="fixed" className="header-menu">
                <Container>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                            className="logo"
                        >
                            LOGO
                        </Typography>
                        <Menu likedArticles={likedArticles} />{' '}
                        <Link
                            to={`/favorite`}
                            style={{ textDecoration: 'none' }}
                            className="favorite"
                        >
                            <Favorite likedArticles={likedArticles} />
                        </Link>
                        <div className="search">
                            <SearchInput />
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
