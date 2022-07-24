import React from 'react'

import 'styles/Main.scss'
import 'styles/grid.scss'
import { MainArticlesItem } from './MainArticlesItem'
import ArticlesArray from 'utils/ArticlesArray'

export const MainArticlesSection = () => {
    return (
        <>
            {ArticlesArray.filter((articles) => articles.isHome === true).map(
                ({
                    id,
                    link,
                    image,
                    categoryIcon,
                    title,
                    text,
                    date,
                    author,
                    isHome = true,
                    category,
                    fullText,
                }) => (
                    <MainArticlesItem
                        id={id}
                        link={link}
                        image={image}
                        categoryIcon={categoryIcon}
                        title={title}
                        text={text}
                        date={date}
                        author={author}
                        isHome={isHome}
                        category={category}
                        fullText={fullText}
                    />
                )
            )}
        </>
    )
}
