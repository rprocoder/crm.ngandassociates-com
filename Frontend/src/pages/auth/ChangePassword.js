import { Box, TextField, Button, Alert, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useChangeUserPasswordMutation } from "../../services/userAuthApi";
import { getToken } from "../../services/LocalStorageService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unSetUserToken } from "../../features/authSlice";
import { removeToken } from "../../services/LocalStorageService";
import { unsetUserInfo } from "../../features/userSlice";

const ChangePassword = () => {
  const [server_error, setServerError] = useState({});
  const [server_msg, setServerMsg] = useState({});
  const [changeUserPassword] = useChangeUserPasswordMutation();
  const { access_token } = getToken();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get("password"),
      password2: data.get("password2"),
    };
    const res = await changeUserPassword({ actualData, access_token });
    if (res.error) {
      setServerMsg({});
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      console.log(res.data);
      setServerError({});
      setServerMsg(res.data);
      document.getElementById("password-change-form").reset();
    }
  };
  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "" }));
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate("/");
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myData = useSelector((state) => state.user);
  return (
    <>
      <div class="wrapper-page">
        <div class="card">
          <div class="">
            <h3 class="text-center m-0">
              <img src="assets/images/logo.png" height="80" alt="logo" />
            </h3>
            <div class="p-3">
              <h4 class="text-muted font-18 m-b-5 text-center">
                Welcome Back !
              </h4>
              <p class="text-muted text-center"> Change Your Password</p>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  maxWidth: 600,
                  mx: 4,
                }}
              >
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                  id="password-change-form"
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="New Password"
                    type="password"
                    id="password"
                  />
                  {server_error.password ? (
                    <Typography
                      style={{ fontSize: 12, color: "red", paddingLeft: 10 }}
                    >
                      {server_error.password[0]}
                    </Typography>
                  ) : (
                    ""
                  )}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password2"
                    label="Confirm New Password"
                    type="password"
                    id="password2"
                  />
                  {server_error.password2 ? (
                    <Typography
                      style={{ fontSize: 12, color: "red", paddingLeft: 10 }}
                    >
                      {server_error.password2[0]}
                    </Typography>
                  ) : (
                    ""
                  )}
                  <Box textAlign="center">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        background: "rgb(122 111 190)",
                        mt: 3,
                        mb: 2,
                        px: 5,
                        fontSize: 13,
                      }}
                    >
                      {" "}
                      Update{" "}
                    </Button>
                  </Box>
                  {server_error.non_field_errors ? (
                    <Alert severity="error">
                      {server_error.non_field_errors[0]}
                    </Alert>
                  ) : (
                    ""
                  )}
                  {server_msg.msg ? (
                    <Alert severity="success">{server_msg.msg}</Alert>
                  ) : (
                    ""
                  )}
                </Box>
              </Box>
            </div>
          </div>
        </div>
        <div class="m-t-40 text-center">
          <p>
            If You Change Your Password Sucessfully ?{" "}
            <NavLink
              exact
              activeClassName="active"
              to="/"
              class="text-primary"
              onClick={handleLogout}
            >
              Login Now
            </NavLink>
          </p>
          <p>
            © 2022 - 2023 <i class="mdi mdi-heart text-danger"></i>by Bol 7
          </p>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
