import React from 'react'

import './TitleCutPaper.scss'

const Text = () => (
    <div className="text1">
        {value.split('').map((char, id) => (
            <div className="letter" key={id}>
                <span className="source">{char}</span>
                <span className="shadow">{char}</span>
                <span className="overlay">{char}</span>
            </div>
        ))}
    </div>
)

let value = 'Title'
export const Title = () => (
    <div className="app">
        <Text value={value} />
    </div>
)
