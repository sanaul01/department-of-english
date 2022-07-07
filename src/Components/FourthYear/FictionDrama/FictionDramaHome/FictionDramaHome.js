import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import React from 'react';
import banner1 from "../../../../images/banner1.png.jpg"

const services = [
    {
        name: "Young Goodman Brown",
        writer: "Nathanial Hawthorne",
        image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781625581358/young-goodman-brown-9781625581358_hr.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/home'

    },
    {
        name: "The Hairy Ape",
        writer: "Eugene O'Neil",
        image: "https://images-na.ssl-images-amazon.com/images/I/51OOdsr6YyL._SX322_BO1,204,203,200_.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/home'

    },
    {
        name: "The Sun Also Rises",
        writer: "Ernest Hemingway",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/The_Sun_Also_Rises_%281st_ed._cover%29.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/20-poetry'

    },
    {
        name: "Seize the Day",
        writer: "Saul Bellow",
        image: "https://images-na.ssl-images-amazon.com/images/I/811NGMk65bL.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/20-poetry'

    },
    {
        name: "Beloved",
        writer: "Toni Morrison",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1283721619l/1031607.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/20-poetry'

    },
]

const FictionDramaHome = () => {
    return (
        <Grid>
            <Grid container >
                <Grid>
                    <img style={{ width: '100%', height: '100%' }} src={banner1} alt="" />
                </Grid>
                <Grid item xs={12} md={12} style={{ margin: '20px 0 20px 0' }}>
                    <Typography variant="h4" style={{ fontWeight: 'bold' }}>American Literature: Fiction and Drama</Typography>
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

export default FictionDramaHome;