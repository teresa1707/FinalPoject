import React from 'react'
import 'styles/Main.scss'
import 'styles/grid.scss'

import ArticlesArray from 'utils/ArticlesArray'

import { ArticleItem } from './ArticleItem'

export const ArticlePage = () => {
    return (
        <>
            {ArticlesArray.map(
                ({
                    id,
                    link,
                    image,
                    categoryIcon,
                    title,
                    fullText,
                    date,
                    author,
                    category,
                }) => (
                    <ArticleItem
                        id={id}
                        link={link}
                        image={image}
                        categoryIcon={categoryIcon}
                        title={title}
                        fullText={fullText}
                        date={date}
                        author={author}
                        category={category}
                    />
                )
            )}
        </>
    )
}
