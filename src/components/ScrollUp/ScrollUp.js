import React from 'react'
import './ScrollUp.scss'
import { IoIosArrowDropupCircle } from 'react-icons/io'

export function ScrollUp({ height }) {
    const [showButton, setShowButton] = React.useState(false)
    const scrollToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }

    React.useEffect(() => {
        const handleScroll = (event) => {
            if (document.documentElement.scrollTop > height) {
                setShowButton(true)
            } else if (!showButton) {
                setShowButton(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <button
            className={showButton ? 'scroll-to-top-btn' : 'hidden'}
            onClick={scrollToTop}
        >
            <IoIosArrowDropupCircle
                style={{
                    width: '60px',
                    height: '60px',
                    color: '#dcdad3',
                    position: 'relative',
                    top: '-7px',
                    left: '-7px',
                }}
            />
        </button>
    )
}
