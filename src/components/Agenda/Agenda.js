// App.js
import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
// import './App.css'

export function Agenda() {
    const [date, setDate] = useState([
        new Date(2022, 6, 1),
        new Date(2022, 6, 10),
    ])

    return (
        <div className="app">
            <h1 className="text-center">React Calendar with Range</h1>
            <div className="calendar-container">
                // Calendar component
                <Calendar
                    onChange={setDate}
                    value={date}
                    nextLabel="month>>"
                    nextAriaLabel="Go to next month"
                    next2Label="year>>"
                    next2AriaLabel="Go to next year"
                    prevLabel="<<month"
                    prevAriaLabel="Go to prev month"
                    prev2Label="<<year"
                    prev2AriaLabel="Go to prev year"
                />
            </div>
        </div>
    )
}
