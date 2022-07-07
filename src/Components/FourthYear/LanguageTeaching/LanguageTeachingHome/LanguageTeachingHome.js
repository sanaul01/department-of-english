import { Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import React from 'react';
import banner1 from "../../../../images/banner1.png.jpg"

const services = [
    {
        name: "Approaches and Methods of Language Teaching",
        writer: "",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1397425679l/20308441.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        lk: '/home'

    },
    
]

const LanguageTeachingHome = () => {
    return (
        <Grid>
            <Grid container >
                <Grid>
                    <img style={{ width: '100%', height: '100%' }} src={banner1} alt="" />
                </Grid>
                <Grid item xs={12} md={12} style={{ margin: '20px 0 20px 0' }}>
                    <Typography variant="h4" style={{ fontWeight: 'bold' }}>Approaches and Methods of Language Teaching</Typography>
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

export default LanguageTeachingHome;