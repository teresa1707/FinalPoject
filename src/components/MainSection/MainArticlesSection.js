import React from 'react'

import 'styles/Main.scss'
import 'styles/grid.scss'
import { MainArticlesItem } from './MainArticlesItem'

import articles from 'utils/ArticlesArray'

export const MainArticlesSection = () => {
    return (
        <>
            {articles
                .filter((article) => article.isHome === true)
                .map(
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
                            key={id}
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
