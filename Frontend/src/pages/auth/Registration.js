import { TextField, FormControlLabel, Checkbox, Button, Box, Alert, Typography } from '@mui/material';
import { useState } from 'react';
import "react-phone-number-input/style.css";
import { useNavigate, Link } from 'react-router-dom';
import { useRegisterUserMutation } from '../../services/userAuthApi'
import { storeToken } from '../../services/LocalStorageService';

const Registration = () => {
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      password: data.get('password'),
      password2: data.get('password2'),
      tc: data.get('tc'),
    }
    const res = await registerUser(actualData)
    if (res.error) {
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(typeof (res.data))
      console.log(res.data)
      storeToken(res.data.token)
      navigate('/')
    }
  };

  return <>
    <div class="wrapper-page">
      <div class="card">
        <div class="">
          <h3 class="text-center m-0">
            <img src="assets/images/logo.png" height="80" alt="logo" />
          </h3>
          <div class="p-3">
            <h4 class="text-muted font-18 m-b-5 text-center">Welcome Back !</h4>
            <p class="text-muted text-center">Sign up to continue to NG Associates</p>
            <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
              <TextField margin='normal' required fullWidth id='name' name='name' label='Name' />
              {server_error.name ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.name[0]}</Typography> : ""}
              <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
              {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
              <TextField margin='normal' required fullWidth id='phone' name='phone' label='Phone Number' />
              {server_error.phone ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.phone[0]}</Typography> : ""}
              {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
              <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
              {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
              {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
              <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm Password' type='password' />
              {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""}
              {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
              <FormControlLabel control={<Checkbox value={true} color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
             <br></br> {server_error.tc ? <span style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.tc[0]}</span> : ""}
              <Box textAlign='right'>
                  <Button type='submit' variant='contained' sx={{ background: 'rgb(122 111 190)', px: 2, fontSize: 12, mt: -10 }}>Register</Button>
              </Box>
              <Link to="/phonesignup">
                <div className="d-grid gap-2 mt-3">
                  <Button variant="success" required fullWidth style={{ background: "#58db83", color: "white", marginBottom: "20px" }} type="Submit">
                    Register Your Mobile Number 
                  </Button>
                </div>
              </Link>
            </Box>
          </div>
        </div>
      </div>
      <div className="m-t-40 text-center">
        <p>Already have an account ? <Link to="/" className="text-primary"> Login Now</Link> </p>
        <p>© 2022 - 2023 <i className="mdi mdi-heart text-danger"></i>by Bol 7</p>
      </div>
    </div>
  </>;
};

export default Registration;
