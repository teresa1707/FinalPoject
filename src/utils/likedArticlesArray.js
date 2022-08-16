const likedArticlesArray = []

export const getArticlesObject = (array) =>
    array.reduce(
        (obj, article) => ({
            ...obj,
            [article.id]: article,
        }),
        {}
    )

export default articles
