import { React, useState } from 'react'
import 'styles/Main.scss'
import 'styles/grid.scss'
import 'pages/Category/Category.scss'

import { Grid } from '@mui/material'
import ReactPaginate from 'react-paginate'

import 'components/FollowUs/FollowUs.scss'
import articles, { getArticlesObject } from 'utils/ArticlesArray'
import { FavoritePageItem } from './FavoritePageItem'

export const FavoritePage = ({
    likedArticles,
    toggleLikeState,
    addLikedArticles,
    articleLikeState,
    articlesObject = getArticlesObject(articles),
}) => {
    // const [page, setPage] = useState(0)

    // const articlesPerPage = 4
    // const numberOfArticlesVisited = page * articlesPerPage
    // const totalPages = Object.keys(likedArticles).length / articlesPerPage

    // const changePage = ({ selected }) => {
    //     setPage(selected)
    // }

    return (
        <>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {Object.keys(likedArticles)
                    // .slice(
                    //     numberOfArticlesVisited,
                    //     numberOfArticlesVisited + articlesPerPage
                    // )
                    .map((id) => (
                        <FavoritePageItem
                            key={id}
                            id={id}
                            article={articlesObject[id]}
                            liked={likedArticles[id]}
                            toggleLikeState={toggleLikeState}
                            addLikedArticles={addLikedArticles}
                            isLiked={articleLikeState[id]}
                        />
                    ))}
            </Grid>

            {/* <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                pageCount={totalPages}
                onPageChange={changePage}
                containerClassName={'navigationButtons'}
                previousLinkClassName={'previousButton'}
                nextLinkClassName={'nextButton'}
                disabledClassName={'navigationDisabled'}
                activeClassName={'navigationActive'}
            /> */}
        </>
    )
}
// import { Button, Card, CardContent, Grid } from '@mui/material'
// import React from 'react'
// import './CartProductListExtended.scss'
// import DeleteIcon from '@mui/icons-material/Delete'
// import { Quantity } from 'components/Quantity/Quantity'

// export const CartProductListItemExtended = ({
//     product,product={productsObject[productId]}
//     productCount,productCount={productsInCart[productId]}
//     removeProductFromCart,
// }) => {
//     return (
//         <Grid item xs={12} sm={6}>
//             <Card className="cart-product-extended">
//                 <div>
//                     <img
//                         src={product.image}
//                         alt={product.name}
//                         className="media"
//                     />
//                 </div>
//                 <CardContent>
//                     <div>{product.name}</div>
//                     <p>Price for one item : {product.price}</p>
//                     <p>Count: {productCount}</p>
//                     <Quantity count={productCount} />
//                     <br />
//                     <Button
//                         onClick={() => removeProductFromCart(product.id)}
//                         variant="outlined"
//                     >
//                         <DeleteIcon />
//                     </Button>
//                 </CardContent>
//             </Card>
//         </Grid>
//     )
// }
