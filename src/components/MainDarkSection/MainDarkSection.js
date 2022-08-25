import React from 'react'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import 'components/MainSection/Main.scss'
import 'styles/grid.scss'
import {
    TitleArt,
    TitleHistory,
    TitleScience,
} from 'components/Title-categories/TitleCategories'

export const MainDarkSection = () => {
    return (
        <>
            <div className="wrapper-dark" style={{ height: 15 }}></div>
            <Container>
                <Grid container id="category">
                    <Grid item xs={12} sm={4}>
                        <div className="article">
                            <TitleHistory />

                            <div className="p-dark">
                                Ipsam id ducimus ullam unde et voluptatem beatae
                                aut, ratione eum cumque ...
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className="article">
                            <TitleScience />

                            <div className="p-dark">
                                {' '}
                                Reprehenderit modi soluta ipsa eius quibusdam
                                laboriosam officia nemo recusandae ...
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className="article">
                            <TitleArt />

                            <div className="p-dark">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Reprehenderit modi soluta ipsa
                                eius quibusdam ...
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div className="wrapper-dark-bottom" style={{ height: 15 }}></div>
        </>
    )
}
