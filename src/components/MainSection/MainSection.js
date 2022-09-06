import React from 'react'
import 'components/MainSection/Main.scss'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/system'
import { MainColumnItems } from './MainColumnItems'
import { MainArticlesSection } from './MainArticlesSection'
import { Title } from 'components/Titles/Title'

export const MainSection = ({
    toggleLikeState,
    articleLikeState,
    addLikedArticles,
    likedArticles,
    removeUnlikedArticle,
    handleOpen,
    handleClose,
    open,
}) => {
    let titleText = 'The title of the Blog'
    return (
        <>
            <Container>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        className="title"
                        style={{ color: 'green' }}
                    >
                        <Title titleText={titleText} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <MainColumnItems
                            handleOpen={handleOpen}
                            handleClose={handleClose}
                            open={open}
                        />
                    </Grid>

                    <Grid item xs={12} md={9}>
                        <MainArticlesSection
                            toggleLikeState={toggleLikeState}
                            articleLikeState={articleLikeState}
                            addLikedArticles={addLikedArticles}
                            likedArticles={likedArticles}
                            removeUnlikedArticle={removeUnlikedArticle}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
