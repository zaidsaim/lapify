import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from '@material-ui/core';
import {NavLink} from "react-router-dom"
import Footer from '../Footer'
import '../css/SystemConfiguration.css'
import Box from '@material-ui/core/Box';
import {Divider} from '@material-ui/core'

function SystemConfiguration(props) {
   
const [processor, setProcessor]=React.useState()
const [ram, setRam]=React.useState()
const [harddisk, setHarddisk]=React.useState()




const handleChange1 = (event) => {
    localStorage.setItem('Procesor', event.target.value.toString());

    setProcessor(event.target.value);
    console.warn("hello");
};


const handleChange2 = (event) => {
    localStorage.setItem('RAM', event.target.value.toString());

    setRam(event.target.value);
    console.warn("hello");
};



const handleChange3 = (event) => {
    localStorage.setItem('HardDisk', event.target.value.toString());

    setHarddisk(event.target.value);
    console.warn("hello");
};




    return (
        <>
        <div style={{display:'flex'}}>
        <div className="container"style={{marginLeft:120}}>
        <div className="row">
        <div className="col-md-12">
                        <div className="configuration-section" >
                            <h3 style={{ textAlign: "center", marginTop:20 }}>Select The System Configuration Of Your Device?</h3>

                           <Form>
                                <div style={{ margin:20}}>
                                    <Form.Group     
                                     onChange={handleChange1}
                                     value={processor}
                                        controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Processor</Form.Label>
                                       
                                        <Form.Control    as="select">
                                        
                                    
                                          <option>Intel Core i5</option>
                                            <option>Intel Core i7</option>
                                            <option>Intel Core i9</option>
                                            <option>Intel Core i9 10 Gen</option>
                                            <option>Intel Core M</option>
                                            <option>Intel Core M3 6 Gen</option>
                                        </Form.Control>
                                    </Form.Group></div>


                                <div style={{ margin: 20 }}>
                                    <Form.Group 
                                    onChange={handleChange2}
                                    controlId="exampleForm.ControlSelect1">
                                        <Form.Label>RAM</Form.Label>
                                        <Form.Control as="select">
                                            <option>1 GB</option>
                                            <option>1.5 GB</option>
                                            <option>2 GB</option>
                                            <option>3 GB</option>
                                            <option>4 GB</option>
                                            <option>6 GB</option>
                                        </Form.Control>
                                    </Form.Group></div>

                                <div style={{ margin: 20 }}>
                                    <Form.Group 
                                    onChange={handleChange3}
                                    controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Hard Disk</Form.Label>
                                        <Form.Control as="select">
                                        
                                            <option>60 GB HDD</option>
                                            <option>80 GB HDD</option>
                                            <option>100 GB HDD</option>
                                            <option>120 GB HDD</option>
                                            <option>200 GB HDD</option>
                                            <option>500 GB HDD</option>
                                        </Form.Control>
                                    </Form.Group></div>

                            </Form><br />
                            
                            <div>
                                <Button variant="contained" style={{ height: 40,marginBottom:"5%", marginLeft:"40%",backgroundColor:'#82b74b',color:'white'}} >

                                    <NavLink className="nav-link" style={{color:'white'}} exact to="/AdditionalFeatures" > Continue </NavLink>

                                </Button>

                            </div>


                        </div>

                    </div>

                    {/* <div className="col-md-4">
                        <p>Data</p>
                    </div> */}

                </div>
            </div>
            <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '45rem', height: '27.5rem' ,marginRight:150,marginLeft:0,borderRadius:20,    boxShadow: '0px 10px 12px rgba(0,0,0,0.1)'}}
      >
        <img style={{width:90,height:90}} src='https://s3n.cashify.in/cashify/product/img/xxhdpi/e21c1388-ddcd.jpg'/>
        <span style={{marginLeft:20,fontWeight:'bold'}}>
       Pavilion Series
       </span>
       <Divider style={{marginTop:10}}/>
       <p style={{margin:'20px 0 0 20px',fontWeight:'bold'}}>Device Evaluation</p>  
       <p style={{margin:'30px 0 0 20px'}}>   Does the Laptop Switch ON? </p>
   
       <div style={{marginLeft:20}}> 
       <p styl={{marginTop:40}}>   System Configuration </p> 
       <li>{processor}</li> 
      
       <li>{ram}</li>
       <li>{harddisk}</li>
       </div>
       
      </Box>
      </div>
            
            <Footer/>
            
        </>
    )
}

export default SystemConfiguration;
