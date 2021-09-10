import React,{useState} from 'react'
import { RadioGroup,Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import '../css/PhysicalCondition.css'
import Footer from '../Footer'
import {NavLink} from "react-router-dom"
import Box from '@material-ui/core/Box';
import {Divider} from '@material-ui/core'
 import VarificationMobileDrawer from '../drawer/VarificationMobileDrawer'


function PhysicalCondition() {
    const [physical,setPhysical]=useState("");
    const conditionChange =(event)=>{
        setPhysical(event.target.value)
    };
    return (
        <>
        <div className="container" style={{display:'flex',}}>
        <div className="row">
        <div className="col-md-12">
        <div className="physical-section">
                
                                <h3 style={{ textAlign: "center", paddingTop:20, fontFamily: "Montserrat" }}>
                                Select the Physical condition of your device</h3>
                    

                <FormControl>

                    <RadioGroup value={physical} onChange={conditionChange}>
                   
                        <label className="labelage">
                            <span aria-disabled="false">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                            <div className="physical-box" >
                                            
                                         
                                                <FormControlLabel value="Flawless"  style={{border:'none'}} control={   <NavLink to='/checkout'>  <Radio></Radio>  </NavLink>} label="Flawless" >
                                             
                                                </FormControlLabel>
                                                <ul className="li-text">
                                                    <li>No scratches on the device</li>
                                                    <li>No sign of usage on the device</li>
                                                    <li>No dents or cracks on the device</li>
                                                </ul>
                                           
                                            </div>
                                    </div>
                                    <div className="col-md-4">
                                            <div className="physical-box" >
                                                             
                                                <FormControlLabel value="Good" control={<NavLink to='/checkout'>  <Radio></Radio>  </NavLink>} label="Good" />
                                               
                                                    <ul className="li-text">
                                                    <li>Normal Sign Of Usage</li>
                                                    <li>Minor Scratches on the device</li>
                                                    <li>No dents or cracks on the device</li>
                                                </ul>
                                               
                                            </div>
                                    </div>
                                    <div className="col-md-4">
                                            <div className="physical-box" >
                                          
                                                <FormControlLabel className="nav-link" value="Average" control={<NavLink to='/checkout'>  <Radio/> </NavLink>} label="Average" />
                                              
                                                     <ul className="li-text">
                                                    <li>Major Scratches/Dents on device </li>
                                                    <li>Loose/Broken Hinges/Discoloration of device</li>
                                                    <li>Screw(s) missing from device</li>
                                                    <li>Panel intact with cracks</li>
                                                </ul>
                                             

                                            </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                                <div className="physical-box" >
                                              
                                                    <FormControlLabel value="Below Average" control={<NavLink to='/checkout'>  <Radio></Radio>  </NavLink>} label="Below Average" />
                                               
                                                
                                                        <ul className="li-text">
                                                        <li>Physical damage on device </li>
                                                        <li>Multiple scratches or dents on device</li>
                                                        <li>Broken hinges on device panel</li>
                                                        <li>Parts missing from device</li>
                                                    </ul>

                                                </div>

                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4"></div>
                                    </div>
                                </div>
                            </div>
                                
                             
                                
                                
                            </span>

                        </label>
                    </RadioGroup>
                   
                </FormControl>
               
            </div>
                    </div>

                    {/* <div className="col-md-4">
                        <h1>Data</h1>
                    </div> */}

                </div>
                <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '27rem', height: '37.5rem' ,marginLeft:30,borderRadius:20,    boxShadow: '0px 10px 12px rgba(0,0,0,0.1)'}}
      >
        <img style={{width:90,height:90}} src='https://s3n.cashify.in/cashify/product/img/xxhdpi/e21c1388-ddcd.jpg'/>
        <span style={{marginLeft:20,fontWeight:'bold'}}>
       Pavilion Series
       </span>
       <Divider style={{marginTop:10}}/>
       <p style={{margin:'20px 0 0 20px',fontWeight:'bold'}}>Device Evaluation</p>  
       <p style={{margin:'30px 0 0 20px'}}>   Does the Laptop Switch ON? </p>
       <li style={{margin:'10px 0 0 20px'}}>Yes</li>
       <div style={{marginLeft:20}}> 
       <p styl={{marginTop:20}}>   System Configuration </p> 
       <li>Intel Core i5 7th Gen </li> 
       <li>4 GB</li>
       <li> 1 TB HDD</li>
       </div>
       <div style={{marginLeft:20}}>
       <p style={{marginTop:20}}> Additional Features</p>
       <li> Touch Screen available</li> 
       <li> 14-15 inch</li>
       <li> Graphics Card available</li>
       </div>
      </Box>
            </div>
            <Footer />
        </>
    )
}

export default PhysicalCondition;
