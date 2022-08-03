import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'
import './MyButton.scss'
import '../../styles/Main.scss'
export const SlidingButton = () => {
    return (
        <>
            <button className="btn2 btn2-1">
                <p>Find Out More</p>
                <h5>
                    <MdDoubleArrow />
                </h5>
            </button>
        </>
    )
}
