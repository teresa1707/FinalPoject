import React from 'react'
import { SocialMedia } from 'components/SocialMedia/SocialMedia'
import { Card } from '@mui/material'

export const FollowUs = () => {
    return (
        <>
            <Card style={{ padding: '10px', margin: '20px', borderRadius: 8 }}>
                <div className="title2 followUs-border">Follow us</div>
                <div className="text2">
                    <p>We are here :</p>
                    <SocialMedia />
                </div>
            </Card>
        </>
    )
}
