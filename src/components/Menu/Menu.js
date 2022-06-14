import React from 'react'

import './Menu.scss'

export const Menu = () => {
    return (
        <>
            <div className="menu">
                <nav className="navigation">
                    <ul>
                        <li>
                            <a className="nav-item" href="#category">
                                home
                            </a>
                        </li>
                        <li>
                            <a className="nav-item" href="#category">
                                category
                            </a>
                        </li>
                        <li>
                            <a className="nav-item" href="#category">
                                blog
                            </a>
                        </li>
                        <li>
                            <a className="nav-item" href="#category">
                                gallery
                            </a>
                        </li>
                        <li>
                            <a className="nav-item" href="#category">
                                contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
