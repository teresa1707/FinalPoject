import React, { useState } from 'react'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { Footer } from '../Footer/Footer'

import CssBaseline from '@mui/material/CssBaseline'

export const App = () => {
    const [articleLikeState, setArticleLikeState] = useState({})
    // const [likedArticles, setLikedArticles] = useState({})

    const toggleLikeState = (id) =>
        setArticleLikeState((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))

    // const addLikedArticles = (id) => {
    //     setLikedArticles((prevState) =>
    //         Object.assign({}, prevState, {
    //             [productId]: prevState[productId] || 0 + count,
    //         })
    //     )
    // }
    return (
        <>
            <CssBaseline />

            <Header />

            <Main
                toggleLikeState={toggleLikeState}
                articleLikeState={articleLikeState}
                // addLikedArticles={addLikedArticles}
            />
            <Footer />
        </>
    )
}
