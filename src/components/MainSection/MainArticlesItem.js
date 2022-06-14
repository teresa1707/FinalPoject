import React from 'react'
import { Grid } from '@mui/material'
import 'styles/Main.scss'
import 'styles/grid.scss'
import './Images.scss'
import '../../components/Title-categories/Icon.scss'
import '../../components/Title-categories/Like.scss'
import unlike from 'Assets/Heart-white1-23.png'

export const MainArticlesItem = ({
    image,
    link,
    categoryIcon,
    title,
    text,
    date,
    author,
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
                    <figure className="snip">
                        <img src={image} alt="sample41" />
                        <figcaption>
                            {/* <h2 className="title3">{title}</h2> */}
                            <h2>
                                {date}-{author}
                            </h2>
                            <a href={link} target="_blank" rel="noreferrer">
                                <p>read more...</p>
                            </a>
                        </figcaption>
                    </figure>
                </Grid>

                <Grid item xs={12} md={6} className="title3-container gridItem">
                    <div className="inline">
                        <div className="list1-item">
                            <div className="rank">
                                <span>
                                    <img src={categoryIcon} alt="" />
                                </span>
                            </div>
                            <div className="name">
                                <h2 className="title3-card gridItem">
                                    {title}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="text">
                        <p>{text}</p>
                    </div>
                    <div className="list2-item">
                        <div className="rank">
                            <span>
                                <img src={unlike} alt="" />
                            </span>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
