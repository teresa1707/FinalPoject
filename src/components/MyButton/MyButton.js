import React from 'react'
import './MyButton.scss'

export const MyButton = ({ text, handleClose }) => {
    return (
        <button className="myButton" onClick={handleClose}>
            {text}
        </button>
    )
}
