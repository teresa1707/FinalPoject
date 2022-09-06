import React from 'react'
import { FaHeart } from 'react-icons/fa'
import 'components/Favorite/Favorite.scss'
import { Link } from 'react-router-dom'

export const Favorite = ({ likedArticles }) => {
    return (
        <>
            <div className="list3-item">
                <div className="rank-cat">
                    <FaHeart
                        className="heart"
                        style={{ color: 'red', fontSize: '16px' }}
                    />
                    <span>
                        {Object.keys(likedArticles).reduce(
                            (sum, id) => sum + likedArticles[id],
                            0
                        )}
                    </span>
                </div>
            </div>
        </>
    )
}
