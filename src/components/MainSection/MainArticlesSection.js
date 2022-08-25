import React from 'react'

import 'components/MainSection/Main.scss'
import 'styles/grid.scss'
import { MainArticlesItem } from './MainArticlesItem'

import articles from 'utils/ArticlesArray'

export const MainArticlesSection = ({
    toggleLikeState,
    articleLikeState,
    addLikedArticles,
    likedArticles,
    removeUnlikedArticle,
}) => {
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
                        <div key={id}>
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
                                toggleLikeState={toggleLikeState}
                                isLiked={articleLikeState[id]}
                                addLikedArticles={addLikedArticles}
                                likedArticles={likedArticles}
                                removeUnlikedArticle={removeUnlikedArticle}
                            />
                        </div>
                    )
                )}
        </>
    )
}
