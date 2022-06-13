import React from 'react'

import './TitleCutPaper.scss'

const Text = ({ value }) => (
    <div className="text1">
        {value.split('').map((char) => (
            <div className="letter">
                <span className="source">{char}</span>
                <span className="shadow">{char}</span>
                <span className="overlay">{char}</span>
            </div>
        ))}
    </div>
)

export const Title = () => (
    <div className="app">
        <Text value="Welcome . to . my . website . React" />
    </div>
)

// ReactDOM.render(<Title />, document.body)
