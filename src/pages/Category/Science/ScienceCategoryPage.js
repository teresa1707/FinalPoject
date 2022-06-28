import React from 'react'
import 'styles/Main.scss'
import 'styles/grid.scss'
import { SciencePageItem } from './SciencePageItem'
// import ArticlesArray from 'utils/ArticlesArray'
import { Grid } from '@mui/material'
import { getArticles } from 'utils/ArticlesArray'

let articles = getArticles()

export const ScienceCategoryPage = () => {
    return (
        <>
            <Grid
                container
                spacing={{ xs: 1, md: 1 }}
                columns={{ xs: 4, md: 12, lg: 18 }}
            >
                {articles
                    .filter(
                        (articles) =>
                            articles.categoryIcon === 'images/lamp35.png'
                    )
                    .map(
                        ({
                            category,
                            fullText,
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
                                <SciencePageItem
                                    id={id}
                                    link={link}
                                    image={image}
                                    categoryIcon={categoryIcon}
                                    title={title}
                                    text={text}
                                    date={date}
                                    author={author}
                                    fullText={fullText}
                                    category={category}
                                />
                            </Grid>
                        )
                    )}
            </Grid>
        </>
    )
}
