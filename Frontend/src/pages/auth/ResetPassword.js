import { TextField, Button, Box, Alert, Typography } from "@mui/material";
import { useState } from 'react';
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { useResetPasswordMutation } from "../../services/userAuthApi";

const ResetPassword = () => {
  const [server_error, setServerError] = useState({})
  const [server_msg, setServerMsg] = useState({})
  const [resetPassword] = useResetPasswordMutation()
  const { id, token } = useParams()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get('password'),
      password2: data.get('password2'),
    }
    const res = await resetPassword({ actualData, id, token })
    if (res.error) {
      setServerMsg({})
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      setServerError({})
      setServerMsg(res.data)
      document.getElementById('password-reset-form').reset()
      setTimeout(() => {
        navigate("")
      }, 3000)
    }

  }
  return <>
    <div class="wrapper-page">
      <div class="card">
        <div style={{textAlign:"center"}}>
          <h3 class="text-center m-0">
            <img src="/assets/images/logo.png" height="80" alt="logo" />
          </h3>
          <div class="p-3">
            <h4 class="text-muted font-18 m-b-5 text-center">Welcome Back !</h4>
            <p class="text-muted text-center"> Reset Your Password</p>
            <Box component='form' noValidate sx={{ mt: 1 }} id='password-reset-form' onSubmit={handleSubmit}>
              <TextField margin='normal' required fullWidth id='password' name='password' label='New Password' type='password' />
              {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
              <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm New Password' type='password' />
              {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""}
              <Box textAlign='center'>
                <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Save</Button>
              </Box>
              {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
              {server_msg.msg ? <Alert severity='success'>{server_msg.msg}</Alert> : ''}
            </Box>
          </div>
          <div className="m-t-40 text-center">
            {/* <p>Remember It ? <NavLink exact activeClassName="active" to="/" className="text-primary"> Sign In Here </NavLink> </p> */}
            <p>© 2022 - 2023  <i className="mdi mdi-heart text-danger"></i>by Bol 7</p>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default ResetPassword;

