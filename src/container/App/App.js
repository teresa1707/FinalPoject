import React, { useState } from 'react'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { Footer } from '../Footer/Footer'
import { omit } from 'lodash'
import CssBaseline from '@mui/material/CssBaseline'

export const App = () => {
    const [articleLikeState, setArticleLikeState] = useState({})
    const [likedArticles, setLikedArticles] = useState({})
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const removeUnlikedArticle = (id) => {
        setLikedArticles((prevState) => omit(prevState, id))
        setArticleLikeState((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

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
                      [id]: (prevState[id] || 0) - 1,
                  }
                ? omit(prevState, id)
                : { ...prevState }
        )
    }

    return (
        <>
            <CssBaseline />

            <Header
                likedArticles={likedArticles}
                articleLikeState={articleLikeState}
            />

            <Main
                handleOpen={handleOpen}
                handleClose={handleClose}
                toggleLikeState={toggleLikeState}
                articleLikeState={articleLikeState}
                addLikedArticles={addLikedArticles}
                likedArticles={likedArticles}
                removeUnlikedArticle={removeUnlikedArticle}
                open={open}
            />
            <Footer />
        </>
    )
}
