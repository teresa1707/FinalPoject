import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import articles from 'utils/ArticlesArray'
import './Menu.scss'

export const Menu = ({ id = articles.id, category = articles.category }) => {
    console.log(articles.category)
    return (
        <>
            <div className="menu">
                <nav className="navigation">
                    <ul className="ul">
                        <li className="li">
                            <NavLink to="/" className="nav-item">
                                home
                            </NavLink>
                        </li>
                        <li className="dropdown">
                            <div className="nav-item">Category</div>
                            <div className="dropdown-content">
                                <Link to={`/${category}`}>History</Link>
                                <Link to="/art">Art</Link>
                                <Link to="/science">Science</Link>
                            </div>
                        </li>
                        <li className="li">
                            <NavLink to="/about" className="nav-item">
                                about us
                            </NavLink>
                        </li>
                        <li className="li">
                            <NavLink to="/contact" className="nav-item">
                                contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
