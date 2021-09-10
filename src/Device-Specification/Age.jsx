import React,{useState} from 'react'
import { Button } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import { RadioGroup } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import '../css/Age.css'
import Footer from '../Footer'
import Box from '@material-ui/core/Box';
import {Divider} from '@material-ui/core'
import Card from '@material-ui/core/Card';

  function Age() {
      
   const [age,setAge]=useState("");

       const agechange =(event)=>{
    setAge(event.target.value);
     };
 return (
        <>
        <div className="container" style={{display:'flex',}}>
        <Card style={{width:800,height:500,borderRadius:20, boxShadow: '0px 10px 12px rgba(0,0,0,0.1)'}}>
        <h3 style={{paddingTop:40, textAlign:"center", fontFamily:"monospace"}}>Age Of Your device?</h3>
     <FormControl>
    <RadioGroup value={age} onChange={agechange}>
         <label>
        <span aria-disabled="false">
        
        <div className="col-md-4 age-box" >
        <FormControlLabel value="Less than 1 yaer(in warranty)" control={<Radio />} label="Less than 1 year(in warranty)" /></div>
        <div className="col-md-4 age-box">
        <FormControlLabel value="Between 1 and 3 years" control={<Radio />} label="Between 1 and 3 years" /></div>
        <div className=" col-md-4 age-box">
        <FormControlLabel value="More than 3 year" control={<Radio />} label="More than 3 years" /></div>
                                         
        </span>

        </label>
    </RadioGroup>

</FormControl>

            <div>
                <Button variant="contained" style={{backgroundColor:'#82b74b',color:'white',marginBottom:20, marginTop:30, height: 40, marginLeft:"40%" }} >

                    <NavLink className="nav-link" style={{color:'white'}} exact to="/PhysicalCondition" > Continue </NavLink>

                </Button>

                </div>
                
                </Card>
                

                 {/* <div className="col-md-4">
                     <h1>data</h1>
                 </div> */}
            
             <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '30rem', height: '31rem' ,marginLeft:30,borderRadius:20,    boxShadow: '0px 10px 12px rgba(0,0,0,0.1)'}}
      >
        <img style={{width:90,height:90}} src='https://s3n.cashify.in/cashify/product/img/xxhdpi/e21c1388-ddcd.jpg'/>
        <span style={{marginLeft:20,fontWeight:'bold'}}>
       Pavilion Series
       </span>
       <Divider style={{marginTop:10}}/>
       <label style={{margin:'5px 0 0 20px',fontWeight:'bold',fontSize:16}}>Device Evaluation</label>  
       <div> 
       <label style={{margin:'5px 0 0 20px',fontSize:16}}>   Does the Laptop Switch ON? </label>
       <li style={{margin:'0px 0 0 20px',fontSize:13}}>Yes</li>
       </div> 
       <div style={{marginLeft:20,fontSize:13}}> 
       <label style={{marginTop:16,fontSize:16}}>   System Configuration </label> 
       <li>Intel Core i5 7th Gen </li> 
       <li>4 GB</li>
       <li> 1 TB HDD</li>
       </div>
       <div style={{fontSize:13,marginLeft:20}}>
       <label style={{marginTop:15,fontSize:16}}> Additional Features</label>
       <li > Touch Screen available</li> 
       <li > 14-15 inch</li>
       <li > Graphics Card available</li>
       </div>
      </Box>
         </div>
                <Footer/>
        </>
    )
}

export default Age;
