import React from 'react'
import 'components/MainSection/Main.scss'
import { MainDarkSection } from 'components/MainDarkSection/MainDarkSection'
import { MainSection } from 'components/MainSection/MainSection'
import { Route, Routes } from 'react-router-dom'
import { ContactPage } from 'pages/Contact/ContactPage'
import { AboutPage } from 'pages/About/AboutPage'
import { HistoryCategoryPage } from 'pages/Category/History/HistoryCategory'
import { ScienceCategoryPage } from 'pages/Category/Science/ScienceCategoryPage'
import Slider from 'container/Slider/Swiper'
import { ArticleItem } from 'components/Article/ArticleItem'
import { ArtCategoryPage } from 'pages/Category/Art/ArtCategoryPage'
import { NoMatch } from 'pages/NoMatch/NoMatch'
import { FavoritePage } from 'pages/FavoritePage/FavoritePage'
import articles from 'utils/ArticlesArray'
import { ScrollUp } from 'components/ScrollUp/ScrollUp'

export const Main = ({
    toggleLikeState,
    articleLikeState,
    addLikedArticles,
    likedArticles,
    removeUnlikedArticle,
    handleOpen,
    handleClose,
    open,
}) => {
    let id = articles.map((article) => article.id)
    return (
        <>
            <div className="wrapper">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Slider />
                                <MainDarkSection />
                                <MainSection
                                    toggleLikeState={toggleLikeState}
                                    articleLikeState={articleLikeState}
                                    addLikedArticles={addLikedArticles}
                                    likedArticles={likedArticles}
                                    removeUnlikedArticle={removeUnlikedArticle}
                                    handleOpen={handleOpen}
                                    handleClose={handleClose}
                                    open={open}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/favorite"
                        element={
                            <>
                                <MainDarkSection />
                                <FavoritePage
                                    likedArticles={likedArticles}
                                    removeUnlikedArticle={removeUnlikedArticle}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <>
                                <MainDarkSection />
                                <AboutPage />
                            </>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <>
                                <MainDarkSection />
                                <ContactPage
                                    handleOpen={handleOpen}
                                    handleClose={handleClose}
                                />
                            </>
                        }
                    />

                    <Route
                        path="/history"
                        element={
                            <>
                                <MainDarkSection />
                                <HistoryCategoryPage
                                    likedArticles={likedArticles}
                                    toggleLikeState={toggleLikeState}
                                    articleLikeState={articleLikeState}
                                    addLikedArticles={addLikedArticles}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/science"
                        element={
                            <>
                                <MainDarkSection />
                                <ScienceCategoryPage
                                    likedArticles={likedArticles}
                                    toggleLikeState={toggleLikeState}
                                    articleLikeState={articleLikeState}
                                    addLikedArticles={addLikedArticles}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/art"
                        element={
                            <>
                                <MainDarkSection />
                                <ArtCategoryPage
                                    likedArticles={likedArticles}
                                    toggleLikeState={toggleLikeState}
                                    articleLikeState={articleLikeState}
                                    addLikedArticles={addLikedArticles}
                                />
                            </>
                        }
                    />

                    <Route
                        path="/:category/:id"
                        element={
                            <>
                                <MainDarkSection />
                                <ArticleItem
                                    toggleLikeState={toggleLikeState}
                                    articleLikeState={articleLikeState}
                                    addLikedArticles={addLikedArticles}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/categoryMobile"
                        element={<MainDarkSection />}
                    />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
                <ScrollUp height={200} />
            </div>
        </>
    )
}
