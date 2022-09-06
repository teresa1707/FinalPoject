import React, { useState } from 'react'
import ReviewsArr from './ReviewsArr'
import { Card, TextField } from '@mui/material'
import './Reviews.scss'
import { MyButton } from 'components/MyButton/MyButton'

export const Reviews = () => {
    const [reviews, setReviews] = useState(ReviewsArr)
    const [newReview, setNewReview] = useState({
        name: '',
        text: '',
    })

    const handleName = (e) =>
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    const handleText = (e) =>
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))

    const reviewSend = (e) => {
        e.preventDefault()
        setNewReview({
            name: '',
            text: '',
        })
        setReviews((value) => {
            return [...value, newReview]
        })
    }
    let text = 'Leave your review'
    return (
        <>
            <Card style={{ padding: '10px', borderRadius: 8 }}>
                <div className="app-title">
                    <div className="app-title-content">
                        <h1 className="mainTitle">Reviews</h1>
                        {reviews.map(({ name, text }, i) => (
                            <Card className="reviews-block-item" key={i}>
                                <div className="reviews-block-item">
                                    Name: {name}
                                </div>
                                <div className="reviews-block-item">
                                    Message: {text}
                                </div>
                            </Card>
                        ))}
                        <h3>Please leave review about this product</h3>

                        <form>
                            <div>
                                <TextField
                                    size="small"
                                    label="Name"
                                    margin="normal"
                                    value={newReview.name}
                                    onChange={handleName}
                                />
                            </div>
                            <div>
                                <TextField
                                    size="small"
                                    label="Text"
                                    margin="normal"
                                    value={newReview.text}
                                    onChange={handleText}
                                />
                            </div>
                            <br />
                            <MyButton
                                variant="contained"
                                handleClose={reviewSend}
                                text={text}
                            />
                        </form>
                    </div>
                </div>
            </Card>
        </>
    )
}
