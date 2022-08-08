import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import articles from 'utils/ArticlesArray'
import './Menu.scss'

export const Menu = () => {
    return (
        <>
            <div className="menu">
                <nav className="navigation">
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
            </div>
        </>
    )
}
