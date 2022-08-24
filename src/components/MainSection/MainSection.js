import React from 'react'
import 'styles/Main.scss'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/system'
import { MainColumnItems } from './MainColumnItems'
import { MainArticlesSection } from './MainArticlesSection'
import { Title } from './Title'

export const MainSection = ({
    toggleLikeState,
    articleLikeState,
    addLikedArticles,
    likedArticles,
    removeUnlikedArticle,
}) => {
    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={12} className="title">
                        <Title />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <MainColumnItems />
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
