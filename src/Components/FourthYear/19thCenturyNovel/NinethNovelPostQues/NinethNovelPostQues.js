import { Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const NinethNovelPostQues = () => {

    const [loadData, setLoadData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoadData = { ...loadData }
        newLoadData[field] = value;
        setLoadData(newLoadData);
    };

    const handleDataSubmit = (e)=>{
        const nineteenNovelQuestions = {
            ...loadData,
        }
        fetch('http://localhost:5000/19th_century_novel_questions', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(nineteenNovelQuestions)
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
                <Grid item xs={12} md={12} style={{marginTop:20, marginBottom: 20}}>
                    <Typography 
                    variant="h4" 
                    style={{
                        fontWeight: 'bold' 
                    }}>
                        19th Century Novel post Question
                    </Typography>
                    <form onSubmit={handleDataSubmit} style={{marginTop:30}}>
                        <TextField
                            style={{ width: "90%" }}
                            id="standard-basic"
                            label="Question"
                            type="text"
                            name="question"
                            onBlur={handleOnBlur}
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            style={{width: "90%", marginTop: "15px" }}
                            id="standard-basic"
                            label="Year"
                            name="year"
                            onBlur={handleOnBlur}
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            style={{ width: "90%", marginTop: "15px"}}
                            id="outlined-multiline-static"
                            label="Answer:"
                            type="text"
                            name="answer"
                            multiline
                            rows={8}
                            onBlur={handleOnBlur}
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            style={{ width: "90%", marginTop: "15px"}}
                            id="outlined-multiline-static"
                            label="Bangla Translet"
                            type="text"
                            name="translet"
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

export default NinethNovelPostQues;