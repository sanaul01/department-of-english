import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import React from 'react';
import banner1 from "../../../../images/banner1.png.jpg"

const services = [
    {
        name: "Iliad",
        writer: "Homer",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388189079l/1372.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/home'

    },
    {
        name: "Agamemnon",
        writer: "Aeschylus",
        image: "https://i0.wp.com/www.josbd.com/wp-content/uploads/2015/12/Agamemnon.jpg?fit=260%2C336&ssl=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/home'

    },
    {
        name: "Medea",
        writer: "Euripides",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328868366l/752900.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/20-poetry'

    },
    {
        name: "The Frogs",
        writer: "Aristophanes",
        image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781625580771/the-frogs-9781625580771_hr.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/20-poetry'

    },
    {
        name: "Phaedra",
        writer: "Seneca",
        image: "https://m.media-amazon.com/images/I/51muqPP68iL.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/20-poetry'

    },
]

const CTHome = () => {
    return (
        <Grid>
            <Grid container >
                <Grid>
                    <img style={{ width: '100%', height: '100%' }} src={banner1} alt="" />
                </Grid>
                <Grid item xs={12} md={12} style={{ margin: '20px 0 20px 0' }}>
                    <Typography variant="h4" style={{ fontWeight: 'bold' }}>Classics in Translation</Typography>
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

export default CTHome;