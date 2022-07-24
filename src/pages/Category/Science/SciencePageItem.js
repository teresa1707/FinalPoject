import React from 'react'
import { Grid } from '@mui/material'
import unlike from 'Assets/Heart-white1-23.png'
import 'pages/Category/Category.scss'
import 'styles/Main.scss'
import 'styles/grid.scss'
import 'components/MainSection/Images.scss'
import 'components/Title-categories/Icon.scss'
import 'components/Title-categories/Like.scss'
import { Link } from 'react-router-dom'

export const SciencePageItem = ({
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
            <Grid className="col-style-cat art-grid ">
                <div className="art-item">
                    <div className="art-item-box">
                        <Link to={`/articles/${category}/${id}`}>
                            <div className="art-img-wrap">
                                <img
                                    alt={title}
                                    className="art-img"
                                    src={image}
                                />
                            </div>
                        </Link>

                        <div className="art-content">
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
                                    <h2 className="title3-card gridItem">
                                        {title}
                                    </h2>
                                </div>
                            </div>

                            <div className="art-text">
                                <p>{text}</p>
                            </div>
                            <div className="list2-item-cat">
                                <div className="rank-cat">
                                    <span>
                                        <img src={unlike} alt="" />
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
