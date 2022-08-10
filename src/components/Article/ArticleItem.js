import React from 'react'
import { Grid } from '@mui/material'
import 'components/Title-categories/Icon.scss'
import 'components/Title-categories/Like.scss'
import 'components/Article/ArticleItem.scss'
import { FaHeart } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import articles, { getArticlesObject } from 'utils/ArticlesArray'

export const ArticleItem = ({
    articlesObject = getArticlesObject(articles),
}) => {
    let { id } = useParams()

    let fullText = articlesObject[id].fullText

    return (
        <>
            <Grid container className="artGrid ">
                <div className="art-item">
                    <div className="art-item-box">
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

                        <div className="art-content frame">
                            <div className="art-meta">
                                {articlesObject[id].author}
                                <span className="art-separator">//</span>
                                {articlesObject[id].date}
                                {articlesObject[id].category}
                            </div>
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

                            <div
                                className="art-text"
                                dangerouslySetInnerHTML={{ __html: fullText }}
                            ></div>
                            <div className="list2-item">
                                <div className="rank">
                                    <span>
                                        <FaHeart
                                            className="heart"
                                            style={{ fontSize: 20 }}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
        </>
    )
}
