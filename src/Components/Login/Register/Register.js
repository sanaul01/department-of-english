import { Button, Container, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@material-ui/core';
import { VisibilityOff, Visibility } from '@material-ui/icons';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@material-ui/core/CircularProgress';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {registerUser, isLoading} = useAuth();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password )

        e.preventDefault();
    }

    /* ========handle shown password1============ */
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



    /* handle shown password2 */
    const [values2, setValues2] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange2 = (prop) => (event) => {
        setValues2({ ...values2, [prop]: event.target.value });
    };
    const handleClickShowPassword2 = () => {
        setValues2({
            ...values2,
            showPassword: !values2.showPassword,
        });
    };
    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };


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
                    >R<span style={{ color: "#B01D14" }}>e</span>g<span style={{ color: "#B01D14" }}>i</span>s<span style={{ color: "#B01D14" }}>t</span>e<span style={{ color: "#B01D14" }}>r</span></Typography>

                    {/* =========Register form============= */}
                    { !isLoading && <form onSubmit={handleLoginSubmit}>
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

                        {/* ============Password part one============= */}
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

                        {/* Confirm password */}
                        <FormControl style={{ marginTop: 10 }}
                            sx={{
                                m: 1,
                                width: '25ch',
                            }}
                            variant="standard"
                            onChange={handleOnChange}
                        >
                            <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                name="password2"
                                type={values2.showPassword ? 'text' : 'password'}
                                value={values2.password}
                                onChange={handleChange2('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword2}
                                            onMouseDown={handleMouseDownPassword2}
                                        >
                                            {values2.showPassword ? <VisibilityOff /> : <Visibility />}
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
                        >Register</Button>

                    </form>}
                    {isLoading && <CircularProgress/>}

                    <br />
                    <Grid style={{ marginTop: "20px" }}>
                        <NavLink to="/login"
                            style={{
                                textDecoration: 'none',

                                color: "#1B5E20",

                            }}>
                            <Button 
                            variant="text" 
                            style={{ 
                                fontWeight: "bold", 
                            }}>
                                Al ready registered?<span style={{ color: "#B01D14" }}> Please login</span>
                            </Button>

                        </NavLink>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;