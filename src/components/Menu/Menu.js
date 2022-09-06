import { Favorite } from 'components/Favorite/Favorite'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'

import './Menu.scss'

export const Menu = ({ likedArticles }) => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen((prev) => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    return (
        <>
            <div className="menu ">
                {' '}
                <nav className="mainMenu">
                    <ul className="ul">
                        <li className="li">
                            <Link to="/" className="nav-item">
                                home
                            </Link>
                        </li>
                        <li className="dropdown ">
                            <span className="nav-item li">Category</span>
                            <div className="dropdown-content">
                                <Link to="/history">History</Link>
                                <Link to="/art">Art</Link>
                                <Link to="/science">Science</Link>
                            </div>
                        </li>
                        <li className="li">
                            <Link to="/about" className="nav-item">
                                about us
                            </Link>
                        </li>
                        <li className="li">
                            <Link to="/contact" className="nav-item">
                                contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="navBar">
                    <button onClick={handleToggle}>
                        {navbarOpen ? (
                            <MdClose
                                style={{
                                    color: '#dfd7c6',
                                    width: '30px',
                                    height: '30px',
                                }}
                            />
                        ) : (
                            <FiMenu
                                style={{
                                    color: '#dfd7c6',
                                    width: '30px',
                                    height: '30px',
                                }}
                            />
                        )}
                    </button>
                    <div>
                        <ul
                            className={`menuNav ${
                                navbarOpen ? 'showMenu' : ''
                            }`}
                        >
                            <li className="li">
                                <Link
                                    to="/"
                                    className="active-link a"
                                    onClick={() => closeMenu()}
                                >
                                    home
                                </Link>
                            </li>
                            <li className="li ">
                                <Link
                                    to="/categoryMobile"
                                    className="active-link a"
                                    onClick={() => closeMenu()}
                                >
                                    Category
                                </Link>
                            </li>
                            <li className="li">
                                <Link
                                    to="/about"
                                    className="active-link a"
                                    onClick={() => closeMenu()}
                                >
                                    about us
                                </Link>
                            </li>
                            <li className="li">
                                <Link
                                    to="/contact"
                                    className="a active-link"
                                    onClick={() => closeMenu()}
                                >
                                    contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
