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
}) => {
    return (
        <>
            <Grid container className="col-style" key={id}>
                <Grid
                    item
                    xs={12}
                    md={6}
                    className="title3-photo title3-container"
                >
                    <figure className="snip">
                        <img src={image} alt="sample41" />
                        <figcaption>
                            {/* <h2 className="title3">{title}</h2> */}
                            <h2>
                                {date}-{author}
                            </h2>

                            <Link to={`/articles/${category}/${id}`}>
                                <p>read more...</p>
                            </Link>
                        </figcaption>
                    </figure>
                </Grid>

                <Grid item xs={12} md={6} className="title3-container gridItem">
                    <div className="inline">
                        <div className="list1-item">
                            <Link to={`/${category}`}>
                                <div className="rank">
                                    <span>
                                        <img src={categoryIcon} alt="" />
                                    </span>
                                </div>
                            </Link>
                            <Link to={`/articles/${category}/${id}`}>
                                {' '}
                                <div className="name">
                                    <h2 className="title3-card gridItem">
                                        {title}
                                    </h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <Link to={`/articles/${category}/${id}`}>
                        {' '}
                        <div className="text">
                            <p>{text}</p>
                        </div>
                    </Link>

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
                </Grid>
            </Grid>
        </>
    )
}
