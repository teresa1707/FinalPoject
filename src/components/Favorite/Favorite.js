import React from 'react'
import { FaHeart } from 'react-icons/fa'
import 'components/Favorite/Favorite.scss'
import { Link } from 'react-router-dom'

export const Favorite = ({ likedArticles }) => {
    return (
        <>
            <Link to={`/favorite`} style={{ textDecoration: 'none' }}>
                <div className="list3-item">
                    <div className="rank-cat">
                        <FaHeart className="heart" style={{ color: 'red' }} />
                        <span>
                            {Object.keys(likedArticles).reduce(
                                (sum, id) => sum + likedArticles[id],
                                0
                            )}
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}
