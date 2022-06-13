import React from 'react'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { Footer } from '../Footer/Footer'

import CssBaseline from '@mui/material/CssBaseline'

import Slider from 'container/Slider/Swiper'

export const App = () => {
    return (
        <>
            <CssBaseline />

            <Header />
            <Slider />
            <Main />
            <Footer />
        </>
    )
}
