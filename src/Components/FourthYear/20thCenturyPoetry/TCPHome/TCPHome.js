import { Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import React from 'react';
import banner1 from "../../../../images/banner1.png.jpg"

const services = [
    {
        name: "The Lake Isle of Innisfree, Easter 1916, The Second Comming, Sailing to Byzantium",
        writer: "W.B.Yeats",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387703814l/1270881.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk:'/home'

    },
    {
        name: "The Love Song of J.Alfred Prufrock, The Wast Land",
        writer: "T.S.Eliot",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388198313l/79936.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk:'/home'

    },
    {
        name: "Poem in October",
        writer: "Dylan Thomas",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348344294i/99275.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk:'/20-poetry'

    },
    {
        name: "Morning Song, Words, The Rival, Crossing he Water",
        writer: "Sylvia Plath",
        image: "https://fivebooks.com/app/uploads/books/BC_006274058X.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk:'/20-poetry'

    },
]

const TCPHome = () => {
    return (
        <Grid>
            <Grid container >
                <Grid>
                    <img style={{ width: '100%', height: '100%' }} src={banner1} alt="" />
                </Grid>
                <Grid item xs={12} md={12} style={{margin: '20px 0 20px 0'}}>
                    <Typography variant="h4" style={{ fontWeight: 'bold' }}>Tentieth Century Poetry</Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Grid item xs={12} md={12}>
                        <Grid container justifyContent="center">
                            {services.map((service, index) => (
                                <Grid key={index} item xs={12} md={4}>
                                    <NavLink to={`${service.lk}`} 
                                    style={{
                                        textDecoration:'none', 
                                        color:'black'
                                    }}>
                                    <Card 
                                    sx={{maxWidth: 345}} 
                                    style={{
                                        margin: '10px'
                                    }}>
                                        <CardActionArea>
                                            <img 
                                            style={{ 
                                                width:"70%", 
                                                height:"400px", 
                                                marginTop: '15px', 
                                                borderRadius: '5px'
                                            }} 
                                            src={service.image} alt="" />
                                            <CardContent>
                                                <Typography style={{fontWeight: 'bold'}} gutterBottom variant="h5" component="div">
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

export default TCPHome;