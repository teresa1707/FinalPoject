// import { React, useState } from 'react'
// import 'components/MainSection/Main.scss'
// import 'styles/grid.scss'
// import 'pages/Category/Category.scss'
// import ArticlesArray from 'utils/ArticlesArray'
// import { Grid } from '@mui/material'
// import ReactPaginate from 'react-paginate'
// import { CategoryItem } from './CategoryItem'
// import { FollowUs } from 'components/FollowUs/FollowUs'
// import 'components/FollowUs/FollowUs.scss'
// import articles from 'utils/ArticlesArray'

// const CategoryPage = ({
//     likedArticles,
//     toggleLikeState,
//     isLiked = false,
//     addLikedArticles,
// }) => {
//     const [page, setPage] = useState(0)

//     // const filterArt = articles
//     //     .filter((articles) => articles.categoryItem === '/images/mask35.png')
//     //     .map((article) => article)
//     // const filterHistory = articles.filter(
//     //     (article) => article.categoryItem === '/images/rome25.png'
//     // )
//     // const filterScience = articles.filter(
//     //     (article) => article.categoryItem === '/images/lamp35.png'
//     // )

//     const articlesPerPage = 4
//     const numberOfArticlesVisited = page * articlesPerPage
//     const totalPages = Math.ceil(
//         ArticlesArray.filter((article) => article.categoryIcon).length /
//             articlesPerPage
//     )
//     const changePage = ({ selected }) => {
//         setPage(selected)
//     }

//     return (
//         <>
//             <Grid
//                 container
//                 spacing={{ xs: 2, md: 3 }}
//                 columns={{ xs: 4, sm: 8, md: 12 }}
//             >
//                 {articles.filter((article) => article.category === 'art')
//                     ? articles.filter(
//                           (article) => article.category === 'history'
//                       )
//                     : articles
//                           .filter((article) => article.category === 'science')
//                           .slice(
//                               numberOfArticlesVisited,
//                               numberOfArticlesVisited + articlesPerPage
//                           )
//                           .map(
//                               ({
//                                   id,
//                                   link,
//                                   image,
//                                   categoryIcon,
//                                   title,
//                                   text,
//                                   date,
//                                   author,
//                                   category,
//                               }) => (
//                                   <Grid item xs={12} md={6} key={id}>
//                                       <CategoryItem
//                                           id={id}
//                                           link={link}
//                                           image={image}
//                                           categoryIcon={categoryIcon}
//                                           title={title}
//                                           text={text}
//                                           date={date}
//                                           author={author}
//                                           category={category}
//                                       />
//                                   </Grid>
//                               )
//                           )}
//             </Grid>

//             {/*  */}
//             <ReactPaginate
//                 previousLabel={'Previous'}
//                 nextLabel={'Next'}
//                 pageCount={totalPages}
//                 onPageChange={changePage}
//                 containerClassName={'navigationButtons'}
//                 previousLinkClassName={'previousButton'}
//                 nextLinkClassName={'nextButton'}
//                 disabledClassName={'navigationDisabled'}
//                 activeClassName={'navigationActive'}
//             />
//         </>
//     )
// }
