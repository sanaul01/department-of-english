import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import banner1 from "../../../../images/banner1.png.jpg"
import { lightGreen } from '@material-ui/core/colors';
import { useEffect } from 'react';

// const services = [
//     {
//         name: "Pride and Prejudice",
//         writer: "Jane Austen",
//         image:"https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
//         lk:'/home'

//     },
//     {
//         name: "A Tale of Two Cities",
//         writer: "Charles Dickens",
//         image: "https://images.penguinrandomhouse.com/cover/9780451530578",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
//         lk:'/home'

//     },
//     {
//         name: "Jane Eyre",
//         writer: "Charlotte Bronte",
//         image: "https://images-na.ssl-images-amazon.com/images/I/61c1BiBgvdL.jpg",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
//         lk:'/20-poetry'

//     },
//     {
//         name: "Tess of the D'Urbervilles",
//         writer: "Thomas Hardy",
//         image: "https://kbimages1-a.akamaihd.net/fb3736f2-341c-483e-889d-1199900a9b4e/1200/1200/False/tess-of-the-d-urbervilles-148.jpg",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
//         lk:'/20-poetry'

//     },
// ]

const NineteenCenturyNovelHome = () => {

    const [novels, setNovels] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/19th_century_novel")
            .then(res => res.json())
            .then(data => setNovels(data))
    }, []);

    return (
        <Grid>
            <Grid container >
                <Grid>
                    <img style={{ width: '100%', height: '100%' }} src={banner1} alt="" />
                </Grid>
                <Grid item xs={12} md={12} style={{ margin: '20px 0 20px 0' }}>
                    <Typography variant="h4" style={{ fontWeight: 'bold' }}>Nineteen Century Novel</Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Grid item xs={12} md={12}>
                        <Grid container justifyContent="center">
                            {novels.map((novel, index) => (
                                <Grid key={index} item xs={12} md={4}>
                                    <NavLink to={`/detail/:${novel._id}`}
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
                                                    src={novel.image} alt="" />
                                                <CardContent>
                                                    <Typography style={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                                                        {novel.name}
                                                    </Typography>
                                                    <Typography
                                                        style={{
                                                            fontWeight: 500,
                                                            color: "darkRed"
                                                        }}>
                                                        "{novel.writer}"
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {novel.description}...<NavLink to={`/detail/:${novel._id}`}>see more</NavLink>
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