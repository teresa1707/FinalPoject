import React from 'react'
import 'styles/Main.scss'
import { MainDarkSection } from 'components/MainDarkSection/MainDarkSection'
import { MainSection } from 'components/MainSection/MainSection'
import { Route, Routes } from 'react-router-dom'
import { AboutPage } from 'pages/Gallery/AboutPage'
import { ContactPage } from 'pages/Contact/ContactPage'

import { HistoryCategoryPage } from 'pages/Category/History/HistoryCategory'
import { ScienceCategoryPage } from 'pages/Category/Science/ScienceCategoryPage'
import Slider from 'container/Slider/Swiper'
import { ArticleItem } from 'components/Article/ArticleItem'
import { ArtPageItem } from 'pages/Category/Art/ArtPageItem'
import { ArtCategoryPage } from 'pages/Category/Art/ArtCategoryPage'

import { CategoryPage } from 'pages/Category/CategoryPage'

export const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Slider />} />
            </Routes>
            <Routes>
                <Route path="/" element={<MainDarkSection />} />
            </Routes>

            <Routes>
                <Route path="/" element={<MainSection />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/:category/" element={<CategoryPage />} />
                <Route path="/history" element={<HistoryCategoryPage />} />
                <Route path="/science" element={<ScienceCategoryPage />} />
                <Route path="/art" element={<ArtCategoryPage />} />
                <Route path="/history" element={<HistoryCategoryPage />} />
                <Route
                    path="/category/science"
                    element={<ScienceCategoryPage />}
                />
                <Route
                    path="/articles/:category/:id"
                    element={<ArticleItem />}
                />
            </Routes>
        </>
    )
}
