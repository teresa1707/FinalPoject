import { Card, Container, Grid } from '@mui/material'
import { FollowUs } from 'components/FollowUs/FollowUs'
import React from 'react'
import './AboutPage.scss'
import '../Category/Category.scss'
import 'components/MainSection/Main.scss'
import { SlidingButton } from 'components/MyButton/SlidingButton'
import { Title } from 'components/Titles/Title'

import { Agenda } from 'components/Agenda/Agenda'

const PostsData = [
    {
        category: 'OUR STUFF ',
        title: 'Meet our team',
        text: "CNN purchased Casey Neistat's Beme app for $25million.",
        image: 'images/IMG_0682.jpg',
    },
    {
        category: 'OUR INSPIRATIONS',
        title: 'Nomad Lifestyle',
        text: 'Learn our tips and tricks on living a nomadic lifestyle',
        image: 'images/art9.jpg',
    },
    {
        category: 'OUR PARTNERS',
        title: 'React and the WP-API',
        text: 'The first ever decoupled starter theme for React & the WP-API',
        image: 'images/partners.jpg',
    },
    {
        category: 'NEWS',
        title: 'CNN Acquire BEME',
        text: "CNN purchased Casey Neistat's Beme app for $25million.",
        image: 'images/weAreHiring (1).jpg',
    },
    {
        category: 'JOIN US',
        title: 'We are hiring',
        text: 'Learn our tips and tricks on living a nomadic lifestyle',
        image: 'images/IMG_0682.jpg',
    },
    {
        category: 'HOW TO IMPROVE',
        title: 'Your feedback',
        text: 'The first ever decoupled starter theme for React & the WP-API',
        image: 'images/IMG_0682.jpg',
    },
]

// Start App

export class AboutPage extends React.Component {
    constructor() {
        super()

        this.state = {
            posts: {},
        }
    }
    UNSAFE_componentWillMount() {
        this.setState({
            posts: PostsData,
        })
    }

    render() {
        let titleText = 'ABOUT US'
        return (
            <Container className="container">
                <Grid container mt={'6px'}>
                    <Grid item sm={12} md={3} className="app-header">
                        <Title titleText={titleText} />
                        <Card
                            style={{
                                padding: '10px',
                                borderRadius: 8,
                            }}
                        >
                            <div className="app-title">
                                <h1 className="mainTitle">
                                    {/* <Agenda /> */}
                                </h1>
                            </div>
                        </Card>
                    </Grid>

                    <Grid
                        item
                        sm={12}
                        md={9}
                        className="app-card-list"
                        id="app-card-list"
                    >
                        {Object.keys(this.state.posts).map((key) => (
                            <CardItem
                                key={key}
                                index={key}
                                details={this.state.posts[key]}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

class CardHeader extends React.Component {
    render() {
        const { image, category } = this.props

        return (
            <div className="card-header">
                <img src={image} alt="" />
                <h4 className="card-header--title">{category}</h4>
            </div>
        )
    }
}

class CardBody extends React.Component {
    render() {
        let text = 'FIND OUT MORE'
        return (
            <div className="card-body">
                <p className="date">March 20 2015</p>

                <h2>{this.props.title}</h2>

                <p className="body-content">{this.props.text}</p>

                <SlidingButton text={text} />
            </div>
        )
    }
}

class CardItem extends React.Component {
    render() {
        return (
            <Card className="card">
                <CardHeader
                    category={this.props.details.category}
                    image={this.props.details.image}
                />
                <CardBody
                    title={this.props.details.title}
                    text={this.props.details.text}
                />
            </Card>
        )
    }
}
