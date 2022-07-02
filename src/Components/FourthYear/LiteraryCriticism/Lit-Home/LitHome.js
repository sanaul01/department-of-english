import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import banner1 from "../../../../images/banner1.png.jpg"

const services = [
    {
        name: "Fluride Treatment",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",

    },
    {
        name: "Cavity Filling",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",

    },
    {
        name: "Teeth Whitening",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",

    }
]

const LitHome = () => {

    return (
        <Grid>
            <Grid container spacing={2}>
                <Grid>
                    <img style={{ width: '100%', height: '100%' }} src={banner1} alt="" />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography variant="h4" style={{fontWeight: 'bold'}}>Criticism</Typography>
                </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container justifyContent="center" style={{marginLeft: 15}} spacing={3}>
                            {services.map((service, index) => (
                                <Grid key={index} item xs={12} md={12}>
                                    <Typography style={{textAlign: "left"}}>
                                        {service.name}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Grid container justifyContent="center" style={{marginLeft: 15}} spacing={3}>
                            {services.map((service, index) => (
                                <Grid key={index} item xs={12} md={12}>
                                    <Typography style={{textAlign: "left"}}>
                                        {service.name}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Grid container justifyContent="center" style={{marginLeft: 15}} spacing={3}>
                            {services.map((service, index) => (
                                <Grid key={index} item xs={12} md={12}>
                                    <Typography style={{textAlign: "left"}}>
                                        {service.name}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
            </Grid>
        </Grid>
    );
};

export default LitHome;