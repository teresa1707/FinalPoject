import React from 'react'

import 'components/Favorite/Favorite.scss'

export const FavoriteMapPage = ({ likedArticles }) => {
    return <>{Object.keys(likedArticles).map((id) => likedArticles[id])}</>
}
