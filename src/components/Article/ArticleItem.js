import React from 'react'
import { Grid } from '@mui/material'
import 'components/Title-categories/Icon.scss'
import 'components/Title-categories/Like.scss'
import 'components/Article/ArticleItem.scss'
import { FaHeart } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import articles, { getArticlesObject } from 'utils/ArticlesArray'
import { Reviews } from 'components/Reviews.js/Reviews'

export const ArticleItem = ({
    articlesObject = getArticlesObject(articles),
    toggleLikeState,
    articleLikeState,
    addLikedArticles,
}) => {
    let { id } = useParams()
    let category = articlesObject[id].category
    let fullText = articlesObject[id].fullText
    let isLiked = articleLikeState[id]
    return (
        <>
            <Grid container className="artGrid ">
                <Grid item xs={12} className="art-item">
                    <div className="art-content frame">
                        <div className="artItemImg">
                            <a
                                href={articlesObject[id].link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    alt="photo"
                                    className="artImg frame"
                                    src={articlesObject[id].image}
                                />
                            </a>
                        </div>
                        <div className="art-meta">
                            {articlesObject[id].author}
                            <span className="art-separator">//</span>
                            {articlesObject[id].date}
                            {articlesObject[id].category}
                        </div>
                        <Link
                            to={`/${category}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="list1-item-art">
                                <div className="rank">
                                    <span className="catIcon">
                                        <img
                                            src={
                                                articlesObject[id].categoryIcon
                                            }
                                            alt=""
                                        />
                                    </span>
                                </div>

                                <h2 className="title3-card">
                                    {articlesObject[id].title}
                                </h2>
                            </div>
                        </Link>
                        <div
                            className="art-text"
                            dangerouslySetInnerHTML={{ __html: fullText }}
                        ></div>
                        <div className="list2-item">
                            <div
                                className="rank"
                                onClick={(event) => {
                                    toggleLikeState(id)
                                    addLikedArticles(id, isLiked)
                                }}
                            >
                                <span>
                                    {isLiked ? (
                                        <FaHeart
                                            className="heart"
                                            style={{ color: 'red' }}
                                        />
                                    ) : (
                                        <FaHeart className="heart" />
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
