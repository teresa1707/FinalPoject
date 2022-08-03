import React from 'react'

import './TitleCutPaper.scss'

const Text = ({ value }) => (
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

export const Title = () => (
    <div className="app">
        <Text value="put your text here" />
    </div>
)
