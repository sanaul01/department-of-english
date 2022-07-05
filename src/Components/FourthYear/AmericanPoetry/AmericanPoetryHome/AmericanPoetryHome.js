import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import React from 'react';
import banner1 from "../../../../images/banner1.png.jpg"

const services = [
    {
        name: "Wild Nights Wild Nights I Felt a Funeral in My Brain I Taste a Liquor",
        writer: "Emily Dickinson",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388409753l/108137.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/home'

    },
    {
        name: "When Lilacs Last at My Dooryard Bloomed O Captain, My Captain",
        writer: "W.Whitman",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554834086l/45006675._SX318_.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/home'

    },
    {
        name: "After Apple Picking, The Birches, Mending Wall, The Death of the Hired Man, Doad Not Taken, Acquainted with the Night, Tree at My Window",
        writer: "Robart Fort",
        image: "https://images-na.ssl-images-amazon.com/images/I/71Owz6KXEgL.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/20-poetry'

    },
    {
        name: "The Negro Speaks of Rivers. I, Too, Sing America. The Weary Blues. Harlem",
        writer: "Langston Hughes",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1367492866l/133906.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/20-poetry'

    },
]

const AmericanPoetryHome = () => {
    return (
        <Grid>
            <Grid container >
                <Grid>
                    <img style={{ width: '100%', height: '100%' }} src={banner1} alt="" />
                </Grid>
                <Grid item xs={12} md={12} style={{ margin: '20px 0 20px 0' }}>
                    <Typography variant="h4" style={{ fontWeight: 'bold' }}>American Poetry</Typography>
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

export default AmericanPoetryHome;