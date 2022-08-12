import React from 'react'
import { FaHeart } from 'react-icons/fa'
import 'components/Favorite/Favorite.scss'
import { Link } from 'react-router-dom'

export const Favorite = ({ likedArticles }) => {
    return (
        <>
            <Link to={`/favorite`}>
                <div className="list3-item">
                    <div className="rank-cat">
                        <FaHeart className="heart" style={{ color: 'red' }} />
                        <span>{likedArticles}</span>
                    </div>
                </div>
            </Link>
        </>
    )
}
