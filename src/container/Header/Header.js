import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { Container } from '@mui/material'
import './Header.scss'
import { Menu } from 'components/Menu/Menu'

import SearchInput from 'components/Menu/SearchInput'

export const Header = ({ likedArticles, articleLikeState }) => {
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

                        <Menu
                            likedArticles={likedArticles}
                            articleLikeState={articleLikeState}
                        />

                        <SearchInput />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
