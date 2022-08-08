import { Card, Container, Grid } from '@mui/material'
import { FollowUs } from 'components/FollowUs/FollowUs'
import React from 'react'
import './AboutPage.scss'
import '../Category/Category.scss'
import '../../styles/Main.scss'
import { SlidingButton } from 'components/MyButton/SlidingButton'

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
        image: 'images/weAreHiring (2).jpg',
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
        return (
            <Container className="container">
                <Grid container mt={'6px'}>
                    <Grid item sm={12} md={3} className="app-header">
                        <Title />
                        <FollowUs />
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

class Title extends React.Component {
    render() {
        return (
            <Card
                style={{ padding: '10px', margin: '20px 0', borderRadius: 8 }}
            >
                <div className="app-title">
                    <div className="app-title-content">
                        <h1>ABOUT US</h1>
                    </div>
                </div>
            </Card>
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
        return (
            <div className="card-body">
                <p className="date">March 20 2015</p>

                <h2>{this.props.title}</h2>

                <p className="body-content">{this.props.text}</p>

                <SlidingButton />
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
