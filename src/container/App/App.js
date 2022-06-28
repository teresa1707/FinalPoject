import React from 'react'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { Footer } from '../Footer/Footer'

import CssBaseline from '@mui/material/CssBaseline'

export const App = () => {
    return (
        <>
            <CssBaseline />

            <Header />

            <Main />
            <Footer />
        </>
    )
}
