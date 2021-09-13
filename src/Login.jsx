




import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './css/Login.css'
import Footer from './Footer'
import axios from 'axios'
//import OTPInput, { ResendOTP } from "otp-input-react";


function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

const url=''

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  const [data,setData]=useState({
    email:'',
    password:'',
    
})

const submit=(e)=>{
e.PreventDefault()
axios.post(url,{
    email:data.email,
    password:data.password,
    //iduser:parseInt(data.iduser)
    //or
    //  iduser:data.iduser
})
   .then(res=>{
       console.log(res.data)
   })
}

const handle=(e)=>{
   const newdata={...data}
   newdata[e.target.id]=e.target.value
   setData(newdata)
   console.log(newdata)
}





  // function handleSubmit(event) {
  //   event.preventDefault();
  // }
  //////////////////////////////otp///////////////////////
  const [otp,setOtp] =useState("");

  ///////////////////////////////////////////////////////////////

    return (
  <>
        <div className="box" style={{height:400,width:500  }} >
        <div className="Login">
          <Form onSubmit={submit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                id='email'
                value={data.email}
                onChange={(e)=>handle(e)}
                //onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id='password'
                value={data.password}
                onChange={(e)=>handle(e)}
                //onChange={(e) => setPassword(e.target.value)}
                //disabled={!validateForm()}
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
              
            <Button block size="lg" type="submit"  className="button">
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