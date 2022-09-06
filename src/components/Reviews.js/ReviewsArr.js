export const ReviewsArr = []

export const getArticlesObject = (array) =>
    array.reduce(
        (obj, article) => ({
            ...obj,
            [article.id]: article,
        }),
        {}
    )

export default ReviewsArr
