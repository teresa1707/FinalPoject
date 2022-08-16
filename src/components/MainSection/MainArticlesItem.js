import React from 'react'
import { Grid } from '@mui/material'
import 'styles/Main.scss'
import 'styles/grid.scss'
import './Images.scss'
import '../../components/Title-categories/Icon.scss'
import '../../components/Title-categories/Like.scss'
import { Link } from 'react-router-dom'

import { FaHeart } from 'react-icons/fa'

export const MainArticlesItem = ({
    id,
    image,
    categoryIcon,
    title,
    text,
    date,
    author,
    category,
    toggleLikeState,
    isLiked = false,
    addLikedArticles,
}) => {
    return (
        <>
            <Grid container className="col-style">
                <Grid
                    item
                    xs={12}
                    md={6}
                    className="title3-photo title3-container"
                >
                    <div id="img-1">
                        <div className="img-block1">
                            <p className="plus">
                                {date}-{author}-{id}
                            </p>
                        </div>
                        <div className="img-block">
                            <Link
                                className="plus"
                                to={`/${category}/${id}`}
                                style={{
                                    padding: 5,
                                    fontSize: 20,
                                    textDecoration: 'none',
                                }}
                            >
                                find out more...
                            </Link>
                        </div>
                        <img id="image" src={image} alt="sample41" />
                    </div>
                </Grid>

                <Grid item xs={12} md={6} className="title3-container ">
                    <div className="inline">
                        <div className="list1-item">
                            <Link
                                to={`${category}`}
                                style={{
                                    textDecoration: 'none',
                                }}
                            >
                                <div className="rank">
                                    <span>
                                        <img src={categoryIcon} alt="" />
                                    </span>
                                </div>
                            </Link>
                            <div className="name">
                                <Link
                                    className="plus"
                                    to={`/${category}/${id}`}
                                    style={{
                                        padding: 5,
                                        fontSize: 20,
                                        textDecoration: 'none',
                                    }}
                                >
                                    <h2
                                        className="title3-card "
                                        style={{
                                            paddingLeft: '20px',
                                            lineHeight: '17px',
                                        }}
                                    >
                                        {title}
                                    </h2>
                                </Link>
                            </div>
                        </div>
                    </div>{' '}
                    <div className="text">
                        <p>{text}</p>
                    </div>
                    <div className="list2-item">
                        <div
                            className="rank-cat"
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
                </Grid>
            </Grid>
        </>
    )
}
