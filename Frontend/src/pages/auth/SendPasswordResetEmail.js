import { TextField, Button, Box, Alert, Typography } from "@mui/material";
import { useState } from 'react';
import { useSendPasswordResetEmailMutation } from "../../services/userAuthApi";
import { NavLink } from "react-router-dom";
const SendPasswordResetEmail = () => {
  const [server_error, setServerError] = useState({})
  const [server_msg, setServerMsg] = useState({})
  const [sendPasswordResetEmail, { isLoading }] = useSendPasswordResetEmailMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
    }
    const res = await sendPasswordResetEmail(actualData)
    if (res.error) {
      console.log(typeof (res.error.data.errors))
      console.log(res.error.data.errors)
      setServerMsg({})
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(typeof (res.data))
      console.log(res.data)
      setServerError({})
      setServerMsg(res.data)
      document.getElementById('password-reset-email-form').reset()
    }
  }
  return <>
    <div className="wrapper-page">
      <div className="card">
        <div className="">
          <h3 className="text-center m-0">
            <img src="assets/images/logo.png" height="70" alt="logo" />
          </h3>
          <div className="p-3">
            <h4 className="text-muted font-18 mb-3 text-center">Reset Password</h4>
            <div className="alert alert-info" role="alert">
              Enter your Email and instructions will be sent to you!
            </div>
            <Box component='form' noValidate sx={{ mt: 1 }} id='password-reset-email-form' onSubmit={handleSubmit}>
              <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
              {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
              <Box textAlign='center'>
                <Button type='submit' variant='contained' sx={{ ml:5, mt: 3, mb: 2, px: 5, background:'rgb(122 111 190)', fontSize: 13}}>Reset</Button>
              </Box>
              {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
              {server_msg.msg ? <Alert severity='success'>{server_msg.msg}</Alert> : ''}
            </Box>
          </div>
          <div className="m-t-40 text-center">
            <p>Remember It ? <NavLink exact activeClassName="active" to="/" className="text-primary"> Sign In Here </NavLink> </p>
            <p>© 2022 - 2023  <i className="mdi mdi-heart text-danger"></i>by Bol 7</p>
          </div>
        </div>
      </div>
    </div>

  </>;
};

export default SendPasswordResetEmail;
