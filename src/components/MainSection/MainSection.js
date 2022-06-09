import React from 'react'
import 'styles/Main.scss'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/system'
import { MainColumnItems } from './MainColumnItems'
import { MainArticlesSection } from './MainArticlesSection'
import { Title } from './Title'

export const MainSection = () => {
    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={12} className="title">
                        <Title />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <MainColumnItems />
                    </Grid>

                    <Grid item xs={12} sm={8}>
                        <MainArticlesSection />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
