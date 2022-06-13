import React from 'react'

import './Menu.scss'

export const Menu = () => {
    return (
        <>
            <div className="menu">
                <nav className="navigation">
                    <ul>
                        <li>
                            <a className="nav-item" href="#">
                                home
                            </a>
                        </li>
                        <li>
                            <a className="nav-item" href="#category">
                                category
                            </a>
                        </li>
                        <li>
                            <a className="nav-item" href="#">
                                blog
                            </a>
                        </li>
                        <li>
                            <a className="nav-item" href="#">
                                gallery
                            </a>
                        </li>
                        <li>
                            <a className="nav-item" href="#">
                                contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
