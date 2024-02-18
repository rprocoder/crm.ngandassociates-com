import { TextField, Button, Box, Alert, Typography, CircularProgress, FormControlLabel, Checkbox } from '@mui/material';
import { AiFillLock } from "react-icons/ai";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { setUserToken, setUserToken1,setUserToken2,setUserToken3 } from '../../features/authSlice';
import { getToken, storeToken,getToken1, storeToken1,getToken2, storeToken2,getToken3, storeToken3    } from '../../services/LocalStorageService';
import { useLoginUserMutation } from '../../services/userAuthApi';


const UserLogin = () => {
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const navigate1 = useNavigate();
  const navigate2 = useNavigate();
  const navigate3 = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation()
  const dispatch = useDispatch()
  const dispatch1 = useDispatch()
  const dispatch2 = useDispatch()
  const dispatch3 = useDispatch()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password'),
    }
    const res = await loginUser(actualData)
    if (res.error) {
      setServerError(res.error.data.errors)
    }
    if(res.data.roletype === 'Account User')
    {
      storeToken2(res.data.token)
      let { access_token2 } = getToken2()
      dispatch2(setUserToken2({ access_token2: access_token2 }))
      navigate2('/Account')
    }
    else if (res.data.roletype === 'Backend User') {
      storeToken1(res.data.token)
      let { access_token1 } = getToken1()
      dispatch1(setUserToken1({ access_token1: access_token1 }))
      navigate1('/Dashboard1')
    }
    else if(res.data.is_admin === true)
    {
      storeToken3(res.data.token)
      let { access_token3 } = getToken3()
      dispatch3(setUserToken3({ access_token3: access_token3 }))
      navigate3('/Admin')
    }
    else
    {
      storeToken(res.data.token)
      let { access_token } = getToken()
      dispatch(setUserToken({ access_token: access_token }))
      navigate('/Index')
    }
  }
  
  let { access_token } = getToken()
  let { access_token1 } = getToken1()
  let { access_token2 } = getToken2()
  let { access_token3 } = getToken3()

  useEffect(() => {
    dispatch(setUserToken({ access_token: access_token }))
    dispatch1(setUserToken1({ access_token1: access_token1 }))
    dispatch2(setUserToken2({ access_token2: access_token2 }))
    dispatch3(setUserToken3({ access_token3: access_token3 }))
  }, [access_token,access_token1,access_token2,access_token3, dispatch,dispatch1,dispatch2,dispatch3])


  return <>
    {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ""}
    {server_error.email ? console.log(server_error.email[0]) : ""}
    {server_error.password ? console.log(server_error.password[0]) : ""}

    <div class="wrapper-page">
      <div class="card">
        <div class="">
          <h3 class="text-center m-0">
            <img src="assets/images/logo.png" height="80" alt="logo" />
          </h3>
          <div class="p-3">
            <h4 class="text-muted font-18 m-b-5 text-center">Welcome Back !</h4>
            <p class="text-muted text-center">Sign in to continue to NG Associates</p>
            <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
              <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
              {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
              <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
              {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
              <Box textAlign='Left'>
                <FormControlLabel control={<Checkbox value={true} color="primary" name="tc"  id="tc" />} label="Remember me" />
                {server_error.tc ? <span style={{  color: 'red', paddingLeft: 10 }}>{server_error.tc[0]}</span> : ""}
                {isLoading ? <CircularProgress /> : <Button type='submit' variant='contained' sx={{ background: 'rgb(122 111 190)' , mt:-6,ml: "70%", mb: 2, px: 4, fontSize:13}}>Login</Button>}
              </Box>
              <NavLink exact activeClassName="active" to='/sendpasswordresetemail' ><AiFillLock/>Forgot your Password ?</NavLink>
              {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
            </Box>
          </div>
        </div>
      </div>
      <div class="m-t-40 text-center">
        <p>Don't have an account ? <NavLink exact activeClassName="active" to="/Registration" class="text-primary"> Signup Now </NavLink> </p>
        <p>© 2022 - 2023  <i class="mdi mdi-heart text-danger"></i>by Bol 7</p>
      </div>
    </div>

  </>;
};

export default UserLogin;
