import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'
import './MyButton.scss'
import '../../styles/Main.scss'
export const SlidingButton = ({ text }) => {
    text = 'Find Out More'
    return (
        <>
            <button className="btn2 btn2-1">
                <p>{text}</p>
                <h5>
                    <MdDoubleArrow />
                </h5>
            </button>
        </>
    )
}
