import { Favorite } from 'components/Favorite/Favorite'
import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.scss'

export const Menu = ({ likedArticles }) => {
    return (
        <>
            <div className="menu">
                <nav className="navigation">
                    <ul className="ul">
                        <li className="li">
                            <Favorite likedArticles={likedArticles} />
                        </li>

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
            </div>
        </>
    )
}
