




import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './css/Login.css'
import Footer from './Footer'
//import OTPInput, { ResendOTP } from "otp-input-react";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  //////////////////////////////otp///////////////////////
  const [otp,setOtp] =useState("");

  ///////////////////////////////////////////////////////////////

    return (
  <>
        <div className="box" style={{height:400,width:500  }} >
        <div className="Login">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
              <Form.Group size="lg" controlId="otp">
                <Form.Label>OTP</Form.Label>
                <Form.Control
                  type="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()} className="button">
              Login
        </Button>
          </Form>
          </div></div>

        <Footer/>

  </>
    )
}


export default Login;








{/*
  
 */}