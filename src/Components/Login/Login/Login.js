import { Button, Container, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@material-ui/core';
import { VisibilityOff, Visibility } from '@material-ui/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import banner1 from "../../../images/banner1.jpg"


const Login = () => {
    const handleLoginSubmit = (e) => {

        e.preventDefault();
    }

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    console.log(values.password)
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ marginTop: 55 }}>
                    <Typography variant="body1" gutterBottom
                        style={{
                            fontWeight: 'bold',
                            fontSize: 35,
                            color: "#1B5E20",
                        }}
                    >L<span style={{ color: "#B01D14" }}>o</span>g<span style={{ color: "#B01D14" }}>i</span>n</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            style={{ width: "250px" }}
                            id="standard-basic"
                            label="Name"
                            variant="standard"
                        />
                        <br />
                        <TextField
                            style={{ width: "250px" }}
                            id="standard-basic"
                            label="Email"
                            type="email"
                            variant="standard"
                        />
                        <br />
                        <FormControl style={{ marginTop: 10 }}
                            sx={{
                                m: 1,
                                width: '25ch',
                            }}
                            variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <br />

                        <Button style={{
                            background: "#1B5E20",
                            width: "100px",
                            marginTop: "20px",
                            fontWeight: "bold",
                            color: "white"
                        }}
                        >Login</Button>

                    </form>
                    <Button
                        style={{
                            background: "#1B5E20",
                            width: "250px",
                            marginTop: "20px",
                            color: "white",
                            fontWeight: "bold",
                        }}>
                        google sing in
                    </Button>
                    <br />
                    <Grid style={{ marginTop: "20px" }}>
                        <NavLink to="/register"
                            style={{
                                textDecoration: 'none',
                                fontWeight: "bold",
                                color: "#1B5E20",

                            }}>
                            If you not register <span style={{ color: "#B01D14" }}>Please register</span>

                        </NavLink>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ height: 520 }}
                        src="https://img.favpng.com/15/6/17/primary-education-school-learning-png-favpng-9KFrhfc28Ddc7vqEpMdnWhFBW_t.jpg" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;