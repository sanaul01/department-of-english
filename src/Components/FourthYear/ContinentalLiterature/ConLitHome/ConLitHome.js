import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import React from 'react';
import banner1 from "../../../../images/banner1.png.jpg"

const services = [
    {
        name: "Metamorphosis",
        writer: "Franz Kafka",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1646444605l/485894._SY475_.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/home'

    },
    {
        name: "The Outsider",
        writer: "Albert Camus",
        image: "https://i.pinimg.com/originals/66/89/de/6689de8abe3537c631a52d957e408cd2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/home'

    },
    {
        name: "Mother Courage and Her Children",
        writer: "Bertolt Brecht",
        image: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale/jackets/9781408125755.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/20-poetry'

    },
    {
        name: "A Doll's House",
        writer: "Henrik Ibsen",
        image: "https://www.thoughtco.com/thmb/mE4k_s3lHiXZcFRgk36769DaEeE=/942x1500/filters:fill(auto,1)/51eo9q02poL-56b7d52b3df78c0b1363a6a6.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/20-poetry'

    },
    {
        name: "Crime and Punishment",
        writer: "Fyodor Dostoyevsky",
        image: "https://m.media-amazon.com/images/I/41AM6pjaZhL.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/20-poetry'

    },
]

const ConLitHome = () => {
    return (
        <Grid>
            <Grid container >
                <Grid>
                    <img style={{ width: '100%', height: '100%' }} src={banner1} alt="" />
                </Grid>
                <Grid item xs={12} md={12} style={{ margin: '20px 0 20px 0' }}>
                    <Typography variant="h4" 
                    style={{ 
                        fontWeight: 'bold' 
                    }}>Continental Literature</Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Grid item xs={12} md={12}>
                        <Grid container justifyContent="center">
                            {services.map((service, index) => (
                                <Grid key={index} item xs={12} md={4}>
                                    <NavLink to={`${service.lk}`}
                                        style={{
                                            textDecoration: 'none',
                                            color: 'black'
                                        }}>
                                        <Card
                                            sx={{ maxWidth: 345 }}
                                            style={{
                                                margin: '10px'
                                            }}>
                                            <CardActionArea>
                                                <img
                                                    style={{
                                                        width: "70%",
                                                        height: "400px",
                                                        marginTop: '15px',
                                                        borderRadius: '5px'
                                                    }}
                                                    src={service.image} alt="" />
                                                <CardContent>
                                                    <Typography style={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                                                        {service.name}
                                                    </Typography>
                                                    <Typography
                                                        style={{
                                                            fontWeight: 500,
                                                            color: "darkRed"
                                                        }}>
                                                        "{service.writer}"
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {service.description}...<NavLink to={`${service.lk}`}>see more</NavLink>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </NavLink>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ConLitHome;