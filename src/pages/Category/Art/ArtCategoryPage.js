import React from 'react'
import 'styles/Main.scss'
import 'styles/grid.scss'
import { ArtPageItem } from './ArtPageItem'
import ArticlesArray from 'utils/ArticlesArray'
import { Grid } from '@mui/material'

export const ArtCategoryPage = () => {
    return (
        <>
            <Grid
                container
                spacing={{ xs: 1, md: 1 }}
                columns={{ xs: 4, md: 12, lg: 18 }}
            >
                {ArticlesArray.filter(
                    (articles) => articles.categoryIcon === 'images/mask35.png'
                ).map(
                    ({
                        id,
                        link,
                        image,
                        categoryIcon,
                        title,
                        text,
                        date,
                        author,
                    }) => (
                        <Grid item sm={12} md={6} key={id}>
                            <ArtPageItem
                                id={id}
                                link={link}
                                image={image}
                                categoryIcon={categoryIcon}
                                title={title}
                                text={text}
                                date={date}
                                author={author}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
