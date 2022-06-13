import React from 'react'
import './Title-categories.scss'
import ImgHistory from 'Assets/rome25.png'
import ImgArt from 'Assets/mask35.png'
import ImgScience from 'Assets/lamp35.png'

export const TitleHistory = () => {
    return (
        <>
            <div className="list-item">
                <div className="rank">
                    <span>
                        <img src={ImgHistory} alt="text"></img>
                    </span>
                </div>
                <div className="name">
                    <h4>HISTORY</h4>
                </div>
            </div>
        </>
    )
}
export const TitleScience = () => {
    return (
        <>
            <div className="list-item">
                <div className="rank">
                    <span>
                        <img src={ImgScience} alt="text"></img>
                    </span>
                </div>
                <div className="name">
                    <h4>SCIENCE</h4>
                </div>
            </div>
        </>
    )
}
export const TitleArt = () => {
    return (
        <>
            <div className="list-item">
                <div className="rank">
                    <span>
                        <img src={ImgArt} alt="text"></img>
                    </span>
                </div>
                <div className="name">
                    <h4>ART</h4>
                </div>
            </div>
        </>
    )
}
