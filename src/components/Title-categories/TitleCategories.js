import React from 'react'
import './Title-categories.scss'
import ImgHistory from 'Assets/rome25.png'
import ImgArt from 'Assets/mask35.png'
import ImgScience from 'Assets/lamp35.png'
import { NavLink } from 'react-router-dom'

export const TitleHistory = () => {
    return (
        <>
            {' '}
            <NavLink
                to="/history"
                style={{ textDecoration: 'none' }}
                className={({ isActive }) =>
                    isActive ? 'list-item-active' : 'list-item'
                }
            >
                <div className="rank">
                    <span>
                        <img src={ImgHistory} alt="text"></img>
                    </span>
                </div>
                <div className="name">
                    <h4>HISTORY</h4>
                </div>
            </NavLink>
        </>
    )
}
export const TitleScience = () => {
    return (
        <>
            <NavLink
                to="/science"
                style={{ textDecoration: 'none' }}
                className={({ isActive }) =>
                    isActive ? 'list-item-active' : 'list-item'
                }
            >
                <div className="rank">
                    <span>
                        <img src={ImgScience} alt="text"></img>
                    </span>
                </div>
                <div className="name">
                    <h4>SCIENCE</h4>
                </div>
            </NavLink>
        </>
    )
}
export const TitleArt = () => {
    return (
        <>
            <NavLink
                to="/art"
                style={{ textDecoration: 'none' }}
                className={({ isActive }) =>
                    isActive ? 'list-item-active' : 'list-item'
                }
            >
                <div className="rank">
                    <span>
                        <img src={ImgArt} alt="text"></img>
                    </span>
                </div>
                <div className="name">
                    <h4>ART</h4>
                </div>
            </NavLink>
        </>
    )
}
