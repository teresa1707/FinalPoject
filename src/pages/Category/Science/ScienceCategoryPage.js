import { React, useState } from 'react'
import 'components/MainSection/Main.scss'
import 'styles/grid.scss'
import 'pages/Category/Category.scss'
import ArticlesArray from 'utils/ArticlesArray'
import { Grid } from '@mui/material'
import ReactPaginate from 'react-paginate'
import 'components/FollowUs/FollowUs.scss'
import { CategoryItem } from '../CategoryItem'

export const ScienceCategoryPage = ({
    likedArticles,
    toggleLikeState,
    articleLikeState,
    addLikedArticles,
}) => {
    const [page, setPage] = useState(0)

    const articlesPerPage = 6
    const numberOfArticlesVisited = page * articlesPerPage
    const totalPages = Math.ceil(
        ArticlesArray.filter(
            (article) => article.categoryIcon === '/images/lamp35.png'
        ).length / articlesPerPage
    )
    const changePage = ({ selected }) => {
        setPage(selected)
    }
    return (
        <>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                {ArticlesArray.filter(
                    (article) => article.categoryIcon === '/images/lamp35.png'
                )
                    .slice(
                        numberOfArticlesVisited,
                        numberOfArticlesVisited + articlesPerPage
                    )
                    .map(
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
                            <Grid item xs={12} sm={4} key={id}>
                                <CategoryItem
                                    id={id}
                                    link={link}
                                    image={image}
                                    categoryIcon={categoryIcon}
                                    title={title}
                                    text={text}
                                    date={date}
                                    author={author}
                                    toggleLikeState={toggleLikeState}
                                    isLiked={articleLikeState[id]}
                                    likedArticles={likedArticles}
                                    addLikedArticles={addLikedArticles}
                                />
                            </Grid>
                        )
                    )}
            </Grid>

            {/*  */}
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
