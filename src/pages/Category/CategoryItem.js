import React from 'react'
import { Grid } from '@mui/material'

import 'pages/Category/Category.scss'
import 'styles/Main.scss'
import 'styles/grid.scss'
import 'components/MainSection/Images.scss'
import 'components/Title-categories/Icon.scss'
import 'components/Title-categories/Like.scss'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'

export const CategoryItem = ({
    id,
    category,
    image,
    categoryIcon,
    title,
    text,
    date,
    author,
}) => {
    return (
        <>
            <Grid className="art-grid ">
                <div className="art-item">
                    <div className="art-item-box">
                        <div className="art-img-wrap">
                            <img alt={title} className="art-img" src={image} />
                        </div>

                        <div className="art-category">
                            <div className="art-meta">
                                {author}
                                <span className="art-separator">//</span>
                                {date}
                            </div>

                            <div className="list1-item-cat">
                                <div className="rank-cat">
                                    <span className="catIcon">
                                        <img src={categoryIcon} alt="" />
                                    </span>
                                </div>

                                <div className="name-cat">
                                    <Link
                                        to={`/${category}/${id}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <h2 className="title3-card gridItem">
                                            {title}
                                        </h2>
                                    </Link>
                                </div>
                            </div>

                            <div className="art-text">
                                <p>{text}</p>
                            </div>
                            <div className="list2-item-cat">
                                <div className="rank-cat">
                                    <FaHeart className="heart" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
        </>
    )
}
