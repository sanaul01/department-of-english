import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import React from 'react';
import banner1 from "../../../../images/banner1.png.jpg"

const services = [
    {
        name: "The Study of Poetry",
        writer: "Metthew Arnold",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387054522l/18923913.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk:'/home'

    },
    {
        name: "The Metaphysical Poets",
        writer: "Thomas Stearns Eliot",
        image: "https://pictures.abebooks.com/isbn/9781904919384-us.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk:'/home'

    },
    {
        name: "Introduction to Culture and Imperialism",
        writer: "Edward Said",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1420942888l/869683.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk:'/20-poetry'

    },
    {
        name: "The Rise of English",
        writer: "Terry Eagleton",
        image: "https://imgv2-1-f.scribdassets.com/img/audiobook/566767196/original/30d312e86b/1654677361?v=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk:'/20-poetry'

    },
]

const LitHome = () => {

    return (
        <Grid>
            <Grid container >
                <Grid>
                    <img style={{ width: '100%', height: '100%' }} src={banner1} alt="" />
                </Grid>
                <Grid item xs={12} md={12} style={{margin: '20px 0 20px 0'}}>
                    <Typography variant="h4" style={{ fontWeight: 'bold' }}>Literary Criticism</Typography>
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

export default LitHome;