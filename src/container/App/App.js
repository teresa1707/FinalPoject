import React, { useState } from 'react'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { Footer } from '../Footer/Footer'

import CssBaseline from '@mui/material/CssBaseline'

export const App = () => {
    const [articleLikeState, setArticleLikeState] = useState({})
    const [likedArticles, setLikedArticles] = useState({})

    const toggleLikeState = (id) =>
        setArticleLikeState((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))

    const addLikedArticles = (id, isLiked) => {
        setLikedArticles((prevState) =>
            isLiked === false
                ? {
                      ...prevState,
                      [id]: (prevState[id] || 0) + 1,
                  }
                : {
                      ...prevState,
                      [id]: (prevState[id] || 0) - 1 && delete prevState[id],
                  }
        )
    }

    return (
        <>
            <CssBaseline />

            <Header likedArticles={likedArticles} />

            <Main
                toggleLikeState={toggleLikeState}
                articleLikeState={articleLikeState}
                addLikedArticles={addLikedArticles}
                likedArticles={likedArticles}
            />
            <Footer />
        </>
    )
}
