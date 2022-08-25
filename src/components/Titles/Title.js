import { Card } from '@mui/material'
import React from 'react'
import './Title.scss'

export const Title = ({ titleText }) => {
    return (
        <Card style={{ padding: '10px', margin: '20px 0', borderRadius: 8 }}>
            <div className="app-title">
                <div className="app-title-content">
                    <h1 className="mainTitle">{titleText}</h1>
                </div>
            </div>
        </Card>
    )
}
