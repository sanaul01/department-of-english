import { Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const NinethNovelPostData = () => {
    const [loadData, setLoadData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoadData = { ...loadData }
        newLoadData[field] = value;
        setLoadData(newLoadData);
    };

    const handleDataSubmit = (e)=>{
        const nineteenNovel = {
            ...loadData,
        }
        fetch('http://localhost:5000/19th_century_novel', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(nineteenNovel)
        })
        .then(res => res.json())
        .then(data=>{
            if(data.insertedId){
                alert('added successfully')
            }
        })
        e.preventDefault()
    }

    return (
        <div>
            <Grid container >
                <Grid item xs={12} md={12} style={{marginTop:30}}>
                    <Typography 
                    variant="h4" 
                    style={{
                        fontWeight: 'bold' 
                    }}>
                        19th Century Novel post data
                    </Typography>
                    <form onSubmit={handleDataSubmit} style={{marginTop:30}}>
                        <TextField
                            style={{ width: "90%" }}
                            id="standard-basic"
                            label="Title:"
                            type="text"
                            name="title"
                            onBlur={handleOnBlur}
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            style={{width: "90%", marginTop: "15px" }}
                            id="standard-basic"
                            label="Image url:"
                            name="image"
                            onBlur={handleOnBlur}
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            style={{width: "90%", marginTop: "15px" }}
                            id="standard-basic"
                            label="Writer Name:"
                            type="text"
                            name="writer"
                            onBlur={handleOnBlur}
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            style={{ width: "90%", marginTop: "15px"}}
                            id="outlined-multiline-static"
                            label="Details:"
                            type="text"
                            name="description"
                            multiline
                            rows={8}
                            onBlur={handleOnBlur}
                            variant="outlined"
                        />
                        <br />
                        <Button 
                        variant="container" 
                        type="submit"
                        style={{ 
                            width: "90%", 
                            marginTop: "15px", 
                            background: "#1B5E20",
                            fontWeight: "bold",
                            color: "white"
                        }} 
                        >
                            Submit
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default NinethNovelPostData;