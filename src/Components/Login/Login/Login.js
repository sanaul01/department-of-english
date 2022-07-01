import { Box, Button, Container, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@material-ui/core';
import { VisibilityOff, Visibility } from '@material-ui/icons';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Alert, AlertTitle } from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, singInWithGoogle, authError, loginUser, isLoading} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
    };

    /* ===========Password setting part============= */
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

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleGoogelSingIn =()=>{
        singInWithGoogle(location, navigate)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} style={{ marginTop: 55 }}>
                    <Typography variant="body1" gutterBottom
                        style={{
                            fontWeight: 'bold',
                            fontSize: 35,
                            color: "#1B5E20",
                        }}
                    >L<span style={{ color: "#B01D14" }}>o</span>g<span style={{ color: "#B01D14" }}>i</span>n</Typography>
                    {!isLoading &&<form onSubmit={handleLoginSubmit}>
                        <TextField
                            style={{ width: "250px" }}
                            id="standard-basic"
                            label="Email"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <br />

                        {/* ===========Password part========== */}
                        <FormControl style={{ marginTop: 10 }}
                            sx={{
                                m: 1,
                                width: '25ch',
                            }}
                            variant="standard"
                            name="password"
                            onChange={handleOnChange}
                            >
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                name="password"
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

                        <Button 
                        variant="contained"
                        type='submit'
                        style={{
                            background: "#1B5E20",
                            width: "100px",
                            marginTop: "20px",
                            fontWeight: "bold",
                            color: "white"
                        }}
                        >Login</Button>

                    </form>}

                    {/* ==========Sign in with google============ */}
                    <Button
                        onClick={handleGoogelSingIn}
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
                                
                                color: "#1B5E20",

                            }}>
                            <Button variant="text" style={{fontWeight: "bold",}}>
                            New user?<span style={{ color: "#B01D14" }}> Please register</span>
                            </Button>

                        </NavLink>
                    </Grid>
                    {isLoading && <CircularProgress />}
                    <Grid item xs={3} md={3} style={{margin: "auto"}}>
                    <Box style={{padding: "20px"}}>
                    {user?.email && <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        login successfully
                    </Alert>}
                    {authError && <Alert>{authError}</Alert>}
                    </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;