import React from 'react'
import 'styles/Main.scss'
import { MainDarkSection } from 'components/MainDarkSection/MainDarkSection'
import { MainSection } from 'components/MainSection/MainSection'
import { Route, Routes } from 'react-router-dom'
import { AboutPage } from 'pages/About/AboutPage'
import { ContactPage } from 'pages/Contact/ContactPage'
import { HistoryCategoryPage } from 'pages/Category/History/HistoryCategory'
import { ScienceCategoryPage } from 'pages/Category/Science/ScienceCategoryPage'
import Slider from 'container/Slider/Swiper'
import { ArticleItem } from 'components/Article/ArticleItem'

import { ArtCategoryPage } from 'pages/Category/Art/ArtCategoryPage'
import { Container } from '@mui/material'

export const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Slider />} />
            </Routes>

            <MainDarkSection />

            <div className="wrapper">
                <Container>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <MainSection />
                                </>
                            }
                        />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />

                        <Route
                            path="/:category"
                            element={<HistoryCategoryPage />}
                        />
                        <Route
                            path="/:category"
                            element={<ScienceCategoryPage />}
                        />
                        <Route
                            path="/:category"
                            element={<ArtCategoryPage />}
                        />

                        <Route
                            path="/:category/:id"
                            element={<ArticleItem />}
                        />
                    </Routes>
                </Container>
            </div>
        </>
    )
}
