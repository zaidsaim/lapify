import React from 'react'
import { Button,Box,Divider } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import Radio from '@material-ui/core/Radio';
import {NavLink} from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Footer from './Footer'
import Addressdetails from './Addressdetails'
import PaymentAlert from './PaymentAlert'




function Address() {
    return (
        <>
           <div style={{backgroundColor:'#ebf0ec'}}>
       <div style={{display:'flex',backgroundColor:'#ebf0ec'}}>
        <div style={{margin:'10px 0 0 10px',}}>
      
            <Button variant="contained" style={{backgroundColor:'#82b74b',color:'white',marginLeft:10,width:130,height:40}}>
            <ArrowBackIcon/>
            <NavLink className="nav-link" exact to='/checkout' style={{color:'white'}}> BACK</NavLink>
</Button>

  </div>
  <div>
<div style={{marginLeft:10,}}>
<h1 style={{marginTop:70,fontSize:24}}>Address</h1>
<span style={{marginLeft:'20%'}}><Button style={{backgroundColor:'#82b74b',color:'white',marginLeft:'50%'}} variant="contained">
<AddIcon/>
  ADD NEW
</Button></span>
<p>Please add your address</p>
</div>
   <div>
<Grid container >
           
           <Box
             boxShadow={2}
             bgcolor="background.paper"
             m={1}
             p={1}
             style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',marginTop:'20',marginLef:'20', width: '42rem', height: '11rem',borderRadius:20,}}
           >
         
           <div style={{padding:5,}}>
            <Radio />
           <HomeIcon style={{backgroundColor:'white',color:'orange'}}/><span style={{marginLeft:10,fontWeight:'bold'}}>HOME</span>
           </div>
           <div style={{marginLeft:42}}>
           <label>Noida,Uttar Pradesh</label>
           <p>Ycf, Gff, Noida, Uttar Pradesh, 201301</p>
           <div style={{display:'flex'}}>
           <span style={{color:'red'}}><Addressdetails/></span><labal style={{color:'red',marginLef:90}}><PaymentAlert tittle='delete'/></labal>
           </div>
           </div>
           
           </Box>
      </Grid>
      </div>
</div>






             <Box
                boxShadow={3}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',marginTop:60, width: '25rem', height: '20rem',marginLeft:40,borderRadius:20 }}
              >
                <h1>Price Summary</h1>
                <Divider/>
                <div style={{marginTop:20}}>
                
                <span style={{marginTop:20,}}>Base Price</span>
                <span style={{marginLeft:200}}>₹18,320</span>
                </div>
                <Divider style={{marginTop:20}}/>
                 <div>
                <span style={{marginTop:20}}>Pickup Charges</span>
                <span style={{marginLeft:'150px',color:'blue'}}>
                Free
                </span>
                <span style={{marginLeft:'5px'}}>
                ₹100
                </span>
                </div>
                <Divider style={{marginTop:15}}/>
                
                <div style={{marginTop:15}}>
                <span>Total Amount</span>
                
                <span style={{marginLeft:'190px'}}>
                ₹18,320
                </span>
                </div>
              
              
       
                <Button style={{backgroundColor:'#82b74b',color:'white',width:'85%',height:40,borderRadius:10,marginLeft:29,marginTop:30}} variant="contained"   endIcon={<ArrowRightAltIcon />} >
                <NavLink className="nav-link" exact to='/Demosedule' style={{color:'white'}}> Continue</NavLink>
                </Button>
                   
              </Box>


              </div>



             
<div style={{marginLeft:10}}>
      
      <div style={{marginTop:20,borderRadius:10,marginLeft:865,width:400,height:60,backgroundColor:'lightgray',alignItems:'center',display:'flex',}}>
      <img style={{ width:15,height:15,marginLeft:15}} src='https://www.cashify.in/static/buy-back/svgs/whatsapp.svg'/>
        <label style={{marginLeft:20,marginTop:10}}>Get price alerts & updates on <p>Whatsapp</p> </label>
       
        <div class="form-check form-switch" style={{marginLeft:'auto',}}>
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
  <label class="form-check-label" for="flexSwitchCheckChecked"></label>
  </div>
</div>


      <Box>
      <Box
        boxShadow={2}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)', width: '25rem',marginLeft:860, height: '12rem',marginTop:35,borderRadius:20 }}
      >
        <strong> Payment Options</strong>
        <div style={{marginTop:10  ,justifyContent:'space-between',marginLeft:20,padding:10,border:'2px gray'}}>
          <img style={{width:80,height:35,border:'1px solid'}} src='https://www.cashify.in/static/buy-back/options/upi.png'/>
          <img style={{width:80,height:35,border:'1px solid'}}  src='https://www.cashify.in/static/buy-back/options/paytm.png'/>
          <img style={{width:80,height:35,border:'1px solid'}} src='https://www.cashify.in/static/buy-back/options/amazon.png'/>
          <img style={{width:80,height:35,border:'1px solid'}} src='https://www.cashify.in/static/buy-back/options/paytm.png'/>
        </div>

        <div style={{marginTop:10  ,justifyContent:'space-between',marginLeft:20,padding:10,border:'2px gray'}}>
          <img style={{width:80,height:35,border:'1px solid'}} src='https://www.cashify.in/static/buy-back/options/airtel.png'/>
          <img style={{width:80,height:35,border:'1px solid'}}  src='https://www.cashify.in/static/buy-back/options/croma.png'/>
          <img style={{width:80,height:35,border:'1px solid'}} src='https://www.cashify.in/static/buy-back/options/flipkart.png'/>
          <img style={{width:80,height:35,border:'1px solid'}} src='https://www.cashify.in/static/buy-back/options/tatacliq.png'/>
        </div>
      </Box>
      </Box>
      <Box>
     
      </Box>
      </div>
      </div>
<div style={{marginTop:30}}>
      <Footer/>
</div>

            
          





        </>
    )
}

export default Address
