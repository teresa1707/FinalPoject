import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/bundle'
import '../Slider/swiper.css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper'
import { Grid } from '@mui/material'
import { Button } from 'rsuite'

export default function Slider() {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#faf',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                    auto: true,
                }}
                autoplay={{ delay: 3000 }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    {/* <div className="title" data-swiper-parallax="-300">title 1</div> */}
                    <div className="subtitle" data-swiper-parallax="-200"></div>
                    <div className="text" data-swiper-parallax="-100">
                        <Grid container>
                            <Grid item xs={12} md={6} className="grid-item">
                                <div className="subtitle">
                                    Aliquam hendrerit lorem
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Aliquam dictum mattis
                                    velit, sit amet faucibus felis iaculis nec.
                                    Nulla laoreet justo vitae porttitor
                                    porttitor. Suspendisse in sem justo. Integer
                                    laoreet magna nec elit suscipit, ac laoreet
                                    nibh euismod. Aliquam hendrerit lorem at
                                    elit facilisis rutrum. Ut at ullamcorper
                                    velit. Nulla ligula nisi, imperdiet ut
                                    lacinia nec, tincidunt ut libero. Aenean
                                    feugiat non eros quis feugiat.
                                </p>
                                <Button
                                    appearance="subtle"
                                    className="swiper-button"
                                >
                                    read more...
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6} className="grid-item">
                                <img src="images/history11.jpg" alt=""></img>
                            </Grid>
                        </Grid>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <div className="title" data-swiper-parallax="-300">title 1</div> */}
                    <div className="subtitle" data-swiper-parallax="-200"></div>
                    <div className="text" data-swiper-parallax="-100">
                        <Grid container>
                            <Grid item xs={12} md={6} className="grid-item">
                                <div className="subtitle">Subtitle Two</div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Aliquam dictum mattis
                                    velit, sit amet faucibus felis iaculis nec.
                                    Nulla laoreet justo vitae porttitor
                                    porttitor. Suspendisse in sem justo. Integer
                                    laoreet magna nec elit suscipit, ac laoreet
                                    nibh euismod. Aliquam hendrerit lorem at
                                    elit facilisis rutrum. Ut at ullamcorper
                                    velit. Nulla ligula nisi, imperdiet ut
                                    lacinia nec, tincidunt ut libero. Aenean
                                    feugiat non eros quis feugiat.
                                </p>
                                <Button
                                    appearance="subtle"
                                    className="swiper-button"
                                >
                                    read more...
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6} className="grid-item">
                                <img src="images/science11.jpg" alt=""></img>
                            </Grid>
                        </Grid>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <div className="title" data-swiper-parallax="-300">title 1</div> */}
                    <div className="subtitle" data-swiper-parallax="-200"></div>
                    <div className="text" data-swiper-parallax="-100">
                        <Grid container>
                            <Grid item xs={12} md={6} className="grid-item">
                                <div className="subtitle">Subtitle three</div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Aliquam dictum mattis
                                    velit, sit amet faucibus felis iaculis nec.
                                    Nulla laoreet justo vitae porttitor
                                    porttitor. Suspendisse in sem justo. Integer
                                    laoreet magna nec elit suscipit, ac laoreet
                                    nibh euismod. Aliquam hendrerit lorem at
                                    elit facilisis rutrum. Ut at ullamcorper
                                    velit. Nulla ligula nisi, imperdiet ut
                                    lacinia nec, tincidunt ut libero. Aenean
                                    feugiat non eros quis feugiat.
                                </p>
                                <Button
                                    appearance="subtle"
                                    className="swiper-button"
                                >
                                    read more...
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6} className="grid-item">
                                <img src="images/art11.jpg" alt=""></img>
                            </Grid>
                        </Grid>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
