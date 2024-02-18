import {  Button, Alert,} from '@mui/material';
import { useState } from 'react';
import { Form, } from "react-bootstrap";
import "react-phone-number-input/style.css";
import { useNavigate, Link } from 'react-router-dom';
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "./UserAuthContext";


const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError(" Your Mobile Number Verified Sucessfully  ");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/Registration");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div class="wrapper-page">
        <div class="card">
          <div class="">
            <h3 class="text-center m-0">
              <img src="assets/images/logo.png" height="80" alt="logo" />
            </h3>
            <div class="p-3">
              <h4 class="text-muted font-18 m-b-5 text-center">Welcome Back !</h4>
              <p class="text-muted text-center">Verify Your Mobile Number to Signin NG Associates</p>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <PhoneInput placeholder="Enter Mobile Number*" required fullWidth id='phone' style={{ height: "60px", marginBottom: "-20px", fontSize: "15px", }} defaultCountry="IN" value={number} onChange={setNumber} />
                  <div id="recaptcha-container"></div>
                </Form.Group>
                <div className="button-right">
                  <Link to="/">
                    <Button style=
                      {{ background: "#a9aaab", color: "white" }} variant="secondary">Cancel</Button>
                  </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button style={{ background: "#58db83", color: "white" }} type="submit" variant="primary">
                    Send Otp
                  </Button>
                </div>
              </Form>

              <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
                <Form.Group className="mb-3" controlId="formBasicOtp" >
                  <Form.Control
                    type="otp"
                    placeholder="Enter OTP"
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </Form.Group>
                <div className="button-right">
                  <Link to="/">
                    <Button style={{ background: "#a9aaab", color: "white" }} variant="secondary" >Cancel</Button>
                  </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button style={{ background: "#58db83", color: "white" }}  type="submit" variant="primary">
                    Verify
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="m-t-40 text-center">
        <p>© 2022 - 2023 <i className="mdi mdi-heart text-danger"></i>by Bol 7</p>
      </div>
    </>
  );
};

export default PhoneSignUp;