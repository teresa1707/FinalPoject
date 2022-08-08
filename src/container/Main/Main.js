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

export const Main = () => {
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
                                <MainSection />
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
                                <HistoryCategoryPage />
                            </>
                        }
                    />
                    <Route
                        path="/science"
                        element={
                            <>
                                <MainDarkSection />
                                <ScienceCategoryPage />
                            </>
                        }
                    />
                    <Route
                        path="/art"
                        element={
                            <>
                                <MainDarkSection />
                                <ArtCategoryPage />
                            </>
                        }
                    />

                    <Route
                        path="/article/:id"
                        element={
                            <>
                                <MainDarkSection />
                                <ArticleItem />
                            </>
                        }
                    />
                </Routes>
            </div>
        </>
    )
}
