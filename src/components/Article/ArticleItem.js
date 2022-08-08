import React from 'react'
import { Grid } from '@mui/material'
import 'pages/Category/Category.scss'
import 'styles/Main.scss'
import 'styles/grid.scss'
import 'components/MainSection/Images.scss'
import 'components/Title-categories/Icon.scss'
import 'components/Title-categories/Like.scss'
import { FaHeart } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import articles, { getArticlesObject } from 'utils/ArticlesArray'

export const ArticleItem = ({
    articlesObject = getArticlesObject(articles),
}) => {
    let { id } = useParams()

    return (
        <>
            <Grid container className="col-style-cat art-grid ">
                <div className="art-item">
                    <div className="art-item-box">
                        <div className="art-img-wrap">
                            <a
                                href={articlesObject[id].link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    alt="photo"
                                    className="art-img"
                                    src={articlesObject[id].image}
                                />
                            </a>
                        </div>
                        <div className="art-content">
                            <div className="art-meta">
                                {articlesObject[id].author}
                                <span className="art-separator">//</span>
                                {articlesObject[id].date}
                                {articlesObject[id].category}
                            </div>

                            <div className="list1-item-cat">
                                <div className="rank-cat">
                                    <span className="catIcon">
                                        <img
                                            src={
                                                articlesObject[id].categoryIcon
                                            }
                                            alt=""
                                        />
                                    </span>
                                </div>

                                <div className="name-cat">
                                    <h2 className="title3-card gridItem">
                                        {articlesObject[id].title}
                                    </h2>
                                </div>
                            </div>

                            <div
                                className="art-text"
                                // dangerouslySetInnerHTML={{
                                //     __html: articlesObject[id].fullText,
                                // }}
                            >
                                {articlesObject[id].fullText}
                            </div>
                            <div className="list2-item-cat">
                                <div className="rank-cat">
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
