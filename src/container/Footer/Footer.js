import React from 'react'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import '../../styles/Main.scss'

export const Footer = () => {
    return (
        <>
            <div className="wrapper-beige">
                <Container className="footer">
                    <Grid container>
                        <Grid item xs={12} sm={4}>
                            <div>
                                <h4 className="title4">Where we are</h4>

                                <p>10, avenue de champs Elisée</p>
                                <p>75008 PARIS, FRANCE</p>
                                <p>mail:name@domaine.com</p>
                                <p>tel: +33(0)123456789</p>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <div>
                                <h4 className="title4">Title</h4>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Alias nemo iusto ab eum
                                    consequuntur suscipit magni voluptatum
                                    dicta, corrupti recusandae.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div>
                                <h4 className="title4">Title</h4>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Alias nemo iusto ab eum
                                    consequuntur suscipit magni voluptatum
                                    dicta, corrupti recusandae.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className="wrapper-dark">
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={10} className="footer-end">
                            <div>©2022 Teresa V | All rights reserved</div>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <a href="#Top_bar">
                                <img
                                    className="footer-img"
                                    src="./assets/arrow-up-20.png"
                                    alt=""
                                />
                            </a>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}
