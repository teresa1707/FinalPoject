import React from 'react'
import 'styles/Main.scss'
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
import { FavoritePageItem } from 'pages/FavoritePage/FavoritePageItem'

export const Main = ({
    toggleLikeState,
    articleLikeState,
    addLikedArticles,
    likedArticles,
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
                                    toggleLikeState={toggleLikeState}
                                    articleLikeState={articleLikeState}
                                    addLikedArticles={addLikedArticles}
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
                                <ContactPage />
                            </>
                        }
                    />

                    <Route
                        path="/history"
                        element={
                            <>
                                <MainDarkSection />
                                <HistoryCategoryPage
                                    toggleLikeState={toggleLikeState}
                                    articleLikeState={articleLikeState}
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
                                    toggleLikeState={toggleLikeState}
                                    articleLikeState={articleLikeState}
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
                                    toggleLikeState={toggleLikeState}
                                    articleLikeState={articleLikeState}
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
                                />
                            </>
                        }
                    />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </div>
        </>
    )
}
