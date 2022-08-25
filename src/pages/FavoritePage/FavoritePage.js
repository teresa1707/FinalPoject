import { React, useState } from 'react'
import 'components/MainSection/Main.scss'
import 'styles/grid.scss'
import 'pages/Category/Category.scss'

import { Grid } from '@mui/material'
import ReactPaginate from 'react-paginate'

import 'components/FollowUs/FollowUs.scss'
import articles, { getArticlesObject } from 'utils/ArticlesArray'
import { FavoritePageItem } from './FavoritePageItem'
import { Title } from 'components/Titles/Title'

export const FavoritePage = ({
    likedArticles,
    articlesObject = getArticlesObject(articles),
    removeUnlikedArticle,
}) => {
    const [page, setPage] = useState(0)

    const articlesPerPage = 4
    const numberOfArticlesVisited = page * articlesPerPage
    const totalPages = Math.ceil(
        Object.keys(likedArticles).length / articlesPerPage
    )

    const changePage = ({ selected }) => {
        setPage(selected)
    }
    let titleText = 'Favorite'
    return (
        <>
            <Grid container>
                <Grid item xs={12} md={2}>
                    <Title titleText={titleText} />
                </Grid>
                <Grid item xs={12} md={10}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {Object.keys(likedArticles)
                            .slice(
                                numberOfArticlesVisited,
                                numberOfArticlesVisited + articlesPerPage
                            )
                            .map((id) => (
                                <FavoritePageItem
                                    key={id}
                                    id={id}
                                    article={articlesObject[id]}
                                    removeUnlikedArticle={removeUnlikedArticle}
                                    likedArticles={likedArticles}
                                />
                            ))}
                    </Grid>
                </Grid>
            </Grid>

            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                pageCount={totalPages}
                onPageChange={changePage}
                containerClassName={'navigationButtons'}
                previousLinkClassName={'previousButton'}
                nextLinkClassName={'nextButton'}
                disabledClassName={'navigationDisabled'}
                activeClassName={'navigationActive'}
            />
        </>
    )
}
