import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import React from 'react';
import banner1 from "../../../../images/banner1.png.jpg"

const services = [
    {
        name: "Pride and Prejudice",
        writer: "Jane Austen",
        image:"https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk:'/home'

    },
    {
        name: "A Tale of Two Cities",
        writer: "Charles Dickens",
        image: "https://images.penguinrandomhouse.com/cover/9780451530578",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk:'/home'

    },
    {
        name: "Jane Eyre",
        writer: "Charlotte Bronte",
        image: "https://images-na.ssl-images-amazon.com/images/I/61c1BiBgvdL.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk:'/20-poetry'

    },
    {
        name: "Tess of the D'Urbervilles",
        writer: "Thomas Hardy",
        image: "https://kbimages1-a.akamaihd.net/fb3736f2-341c-483e-889d-1199900a9b4e/1200/1200/False/tess-of-the-d-urbervilles-148.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk:'/20-poetry'

    },
]

const NineteenCenturyNovelHome = () => {
    return (
        <Grid>
            <Grid container >
                <Grid>
                    <img style={{ width: '100%', height: '100%' }} src={banner1} alt="" />
                </Grid>
                <Grid item xs={12} md={12} style={{margin: '20px 0 20px 0'}}>
                    <Typography variant="h4" style={{ fontWeight: 'bold' }}>Nineteen Century Novel</Typography>
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

export default NineteenCenturyNovelHome;