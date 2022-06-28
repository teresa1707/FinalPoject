import React from 'react'
import 'styles/Main.scss'
import { MainDarkSection } from 'components/MainDarkSection/MainDarkSection'
import { MainSection } from 'components/MainSection/MainSection'
import { Route, Routes, useRoutes } from 'react-router-dom'
import { CategoryPage } from 'pages/Category/CategoryPage'
import { GalleryPage } from 'pages/Gallery/GalleryPage'
import { ContactPage } from 'pages/Contact/ContactPage'
import { ArtCategoryPage } from 'pages/Category/Art/ArtCategoryPage'
import { HistoryCategoryPage } from 'pages/Category/History/HistoryCategory'
import { ScienceCategoryPage } from 'pages/Category/Science/ScienceCategoryPage'
import Slider from 'container/Slider/Swiper'
import { ArticlePage } from 'components/Article/ArticlePage'

export const Main = () => {
    return (
        <>
            <Slider />
            <div className="wrapper-dark">
                <MainDarkSection />
            </div>

            <div className="wrapper">
                <Routes>
                    <Route path="/" element={<MainSection />} />

                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Routes>
                    <Route path="/articles/:id" element={<ArticlePage />} />
                    <Route path="/art" element={<ArtCategoryPage />} />
                    <Route path="/history" element={<HistoryCategoryPage />} />
                    <Route path="/science" element={<ScienceCategoryPage />} />
                </Routes>
            </div>
        </>
    )
}
