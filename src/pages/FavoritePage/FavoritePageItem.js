import { Grid } from '@mui/material'
import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const FavoritePageItem = ({
    article,
    removeUnlikedArticle,
    id,
    category,
}) => {
    return (
        <>
            <Grid item xs={12} md={6} key={id}>
                <Grid className="art-grid ">
                    <div className="art-item">
                        <div className="art-item-box">
                            <div className="art-img-wrap">
                                <img
                                    alt={article.title}
                                    className="art-img"
                                    src={article.image}
                                />{' '}
                            </div>
                            <div className="art-category">
                                <div
                                    className="list1-item-cat"
                                    style={{ marginTop: 40 }}
                                >
                                    <div className="rank-cat">
                                        <span
                                            className="catIcon"
                                            style={{ marginRight: 9 }}
                                        >
                                            <img
                                                src={article.categoryIcon}
                                                alt=""
                                            />
                                        </span>
                                    </div>

                                    <div className="name-cat">
                                        <h2 className="title3-card gridItem">
                                            <Link
                                                to={`${id}`}
                                                style={{
                                                    textDecoration: 'none',
                                                    color: '#a35410',
                                                }}
                                            >
                                                {article.title}
                                            </Link>
                                        </h2>
                                    </div>
                                </div>
                                <div className="art-text">
                                    <p>{article.text}</p>
                                </div>{' '}
                                <div style={{ fontSize: 10, color: 'brown' }}>
                                    {article.author}
                                    <span className="art-separator">-</span>
                                    {article.date}
                                </div>
                                <div
                                    className="list2-item-cat"
                                    onClick={() => removeUnlikedArticle(id)}
                                >
                                    <div className="rank-cat">
                                        <FaHeart
                                            className="heart"
                                            style={{
                                                color: 'red',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>{' '}
                        </div>
                    </div>
                </Grid>
            </Grid>{' '}
        </>
    )
}
