import React,{useState} from 'react'
import '../css/FunctionProperly.css'
import { Button } from '@material-ui/core';
import { NavLink } from "react-router-dom"
import Footer from '../Footer'
import Box from '@material-ui/core/Box';
import {Divider} from '@material-ui/core'
function FunctionProperly({confirm,generation,ram,disk,size,graphics}) {

    const Data=[];

    const [x,setX]=useState(false)
    const [divStyle,setDivStyle]=useState({color:'none'})

   

    return (
        <>
        <div className="container" style={{display:'flex'}}>
       
                   
        <div className="row">
            <div className="col-md-12">
                        <div className="function-container">
                            <h3 className="function-heading">Does Your Device Function Properly?</h3>

                            
                                <div className="row" style={{marginLeft:10}}>
                                    <div className="col-md-3 box ">
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5f6d93d81a185.png" /></div><br />
                                    <div className="p-box"><p>Screen not working,discoloration, blurr, line/spots</p></div>
                                    </div>

                                    <div className="col-md-3 box">
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5f6d9a590140d.png" /></div><br />
                                        <div className="p-box"><p>Keyboard not working;key(s) missing/not working</p></div>
                                    </div>

                                    <div className="col-md-3 box">
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5f6d948a350ad.png" /></div><br />
                                        <div className="p-box"><p>CD/DVD Drive not working</p></div>
                                    </div>

                                    <div className="col-md-3 box">
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5f6d9550f0840.png" /></div><br />
                                    <div className="p-box"><p>Touchpad not working;Left/Right click faulty  </p></div>
                                    </div>
                                </div>

                            <div className="row" style={{ marginLeft: 10 }}>

                                    <div className="col-md-3 box">
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5f6d95a5ac0f1.png" /></div><br />
                                    <div className="p-box"><p>Battery dead;backup less than 30 minutes </p></div>
                                    </div>

                                    <div className="col-md-3 box">
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5f6d9550f0840.png" /></div><br />
                                    <div className="p-box"><p>Speakers not working;faulty/cracked sound </p></div>
                                    </div>

                                    <div className="col-md-3  box">
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5f6d99c29aea7.png" /></div><br />
                                    <div className="p-box"><p>Wifi not working </p></div>
                                    </div>

                                    <div className="col-md-3  box">
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5f6d9a0b13af8.png" /></div><br />
                                    <div className="p-box"><p>Faulty charger;wire cut,Not available </p></div>
                                    </div>
                                </div>

                            <div className="row" style={{ marginLeft: 10 }}>
                                    <div className="col-md-3 box">
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5f6d9ab75f1f6.png" /></div><br />
                                 <div className="p-box"><p>USB port not working</p></div>
                                    </div>
                                    <div className="col-md-3 box">
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5fe9b91df29e6.png" /></div><br />
                                    <div className="p-box"><p>Webcam not working </p></div>
                                    </div>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-3"></div>
 

                                </div>
                 

                            <div className="text-center" style={{margin:"2%" }}>
                                <Button variant="contained" style={{backgroundColor:'#82b74b',color:'white',height:40}} >

                                    <NavLink className="nav-link" exact to="/Age" style={{color:'white'}} > Continue </NavLink>

                                </Button>

                            </div>
            </div>
                    </div>


            {/* <div className="col-md-4">

                            <p>div for device evaluation</p>
            </div>  */}
       
                </div>
                <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '27rem', height: '74.5rem' ,marginLeft:30,borderRadius:20,    boxShadow: '0px 10px 12px rgba(0,0,0,0.1)'}}
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
       <li> {confirm}</li> 
       <li>{generation}</li>
       <li> {ram}</li>
       </div>
       <div style={{marginLeft:20}}>
       <p style={{marginTop:20}}> Additional Features</p>
       <li> {disk}</li> 
       <li> {size}</li>
       <li> {graphics}</li>
       </div>
      </Box>
      </div>
            

            <Footer/>
        </>
    )
}

export default FunctionProperly;
