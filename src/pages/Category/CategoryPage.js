import { React, useState } from 'react'
import 'styles/Main.scss'
import 'styles/grid.scss'
import 'pages/Category/Category.scss'
import ArticlesArray from 'utils/ArticlesArray'
import { Grid } from '@mui/material'
import ReactPaginate from 'react-paginate'
import { CategoryItem } from './CategoryItem'
import { FollowUs } from 'components/FollowUs/FollowUs'
import 'components/FollowUs/FollowUs.scss'

export const CategoryPage = () => {
    const [page, setPage] = useState(0)
    const [artics, setArtics] = useState(ArticlesArray)

    const [filter, setFilter] = useState({})

    const filterByCategory = (articles) => {
        category === 'art'
            ? articles.category === 'art'
            : category === 'history'
            ? articles.category === 'history'
            : articles.category === 'science'
    }

    const articlesPerPage = 4
    const numberOfArticlesVisited = page * articlesPerPage
    const totalPages = Math.ceil(
        artics.filter((article) => article.categoryIcon).length /
            articlesPerPage
    )
    const changePage = ({ selected }) => {
        setPage(selected)
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item sm={12} md={9}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {artics
                            .filter(filterByCategory)
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
                                    <Grid item xs={12} md={6} key={id}>
                                        <CategoryItem
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
                </Grid>
                <Grid item sm={12} md={3}>
                    <FollowUs className="followUs-style-in-grid" />
                </Grid>
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
