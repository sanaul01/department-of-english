import { Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NCNDetails = () => {
    const { novelId } = useParams()

    const [novel, setNovel] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/19th_century_novel/${novelId}`)
            .then((res) => res.json())
            .then((data) => setNovel(data))
    }, [])

    return (
        <Grid container style={{ marginTop: 15 }}>

            <Grid item xs={12} md={6}>
                <img src={novel?.image} alt="" style={{ width: '50%', marginBottom: 20 }} />
                <Typography
                    variant="h4"
                    style={{
                        fontWeight: 'bold',
                    }}>
                    {novel?.title}
                </Typography>
                <Typography
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#922B21'
                    }}>
                    "{novel?.writer}"
                </Typography>
                <Grid
                    style={{
                        textAlign: 'left',
                        margin: 20
                    }}>
                    <Typography><span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Short Note:</span> {novel?.description}</Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} >
                <Grid 
                style={{
                    justifyContent: 'center',
                    background: 'orange', 
                    height: 40,
                }}>
                    <Typography 
                    style={{
                        fontSize: 24, 
                        fontWeight: 'bold', 
                        color: 'white', 
                        
                    }}>
                        Questions
                    </Typography>
                </Grid>
                <Grid style={{
                        textAlign: 'left',
                        margin: 20
                    }}>
                    <Typography>
                        1. what is it? <span>[NU: 2018]</span>
                    </Typography>
                    <Typography>
                        1. what is it?
                    </Typography>
                    <Typography>
                        1. what is it?
                    </Typography>
                    <Typography>
                        1. what is it?
                    </Typography>
                    <Typography>
                        1. what is it?
                    </Typography>
                    <Typography>
                        1. what is it?
                    </Typography>
                    <Typography>
                        1. what is it?
                    </Typography>
                    <Typography>
                        1. what is it?
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default NCNDetails;