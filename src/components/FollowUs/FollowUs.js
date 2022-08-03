import React from 'react'
import { SocialMedia } from 'components/SocialMedia/SocialMedia'
import { Card } from '@mui/material'
import './FollowUs.scss'

export const FollowUs = () => {
    return (
        <>
            <Card
                className="cardStyle"
                style={{
                    borderRadius: 8,
                    width: '100%',
                }}
            >
                <h1 className="title2">Follow us</h1>
                <div className="text2">
                    <p style={{ padding: '0 0 20px 10px' }}>We are here :</p>
                    <SocialMedia />
                </div>
            </Card>
        </>
    )
}
