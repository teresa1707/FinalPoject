import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'
import './MyButton.scss'
import 'components/MainSection/Main.scss'
export const SlidingButton = ({ text, handleOpen }) => {
    return (
        <>
            <button className="btn2 btn2-1" onClick={handleOpen}>
                <p style={{ fontWeight: 'bold' }}>{text}</p>
                <h5>
                    <MdDoubleArrow />
                </h5>
            </button>
        </>
    )
}
