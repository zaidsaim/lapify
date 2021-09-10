import React from 'react'
import './PaymentPage.css'
import {Button,Typography} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box,Divider } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import  Bankdetailsslider from './Bankdetailsslider'
import Amazondrawer from './Amazondrawer'
import Flipkartdrawer from './Flipkartdrawer'
import Addupidrawer from './Addupidrawer'

import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import Radio from '@material-ui/core/Radio';
import {NavLink} from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Footer from './Footer'

import PaymentAlert from './PaymentAlert'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AvTimerIcon from '@material-ui/icons/AvTimer';




function PaymentPage() {

  const [open, setOpen] = React.useState(false);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  


    return (
        <>
        <div style={{display:'flex',backgroundColor:'#ebf0ec'}}>
       <div style={{marginLeft:30}}>
       
        <Button variant="contained"  color="#82b74b" style={{backgroundColor:'#82b74b',color:'white',width:120,height:40}}>
        <ArrowBackIcon/>
        <NavLink className="nav-link" to='/Demosedule' style={{color:'white'}}>Back</NavLink>
</Button>

<h1 style={{fontSize:20,marginTop:20}}> Please choose your preferred payment mode</h1>
<Divider style={{marginTop:30,width:'750px'}}/>
<div style={{marginTop:5}}>
        <div style={{marginTop:30,}}>
        <div class="modal" style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',}} id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
     
      <div class="modal-body" style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',borderRadius:20}}>
  
      <img style={{width:40,height:40}} src='https://s3n.cashify.in/paymentMode/img/xhdpi/5cfe104bd9e81.png'/>
      <span style={{marginLeft:40,fontWeight:'bold'}}>Instant Bank Trandfer</span>
      </div>
      <div class="modal-footer">
      <button type="button" style={{backgroundColor:'#82b74b',color:'white'}} class="btn btn-primary" ><Bankdetailsslider link/></button>
        {/*<button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal"><Bankdetailsslider link/></button>*/}
      </div>
    </div>
  </div>
</div>
{/*data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"*/}
<a class="btn btn-primary" variant="contained" style={{width:180,backgroundColor:'#82b74b',color:'white',border:'none'}} data-bs-toggle="modal" href="#exampleModalToggle" role="button">BANK TRANSFER</a>
</div>






<div style={{marginTop:40}}>
      <Button variant="contained" style={{width:180,backgroundColor:'#82b74b',color:'white'}} color="primary" onClick={handleClickOpen}>
       VOUCHER
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <div style={{display:'flex',boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',borderRadius:20,height:80,alignItems:'center'}}>
             
             <img style={{width:50,height:50,marginLeft:10}} src='http://pngimg.com/uploads/amazon/small/amazon_PNG10.png'/>
          <div style={{marginLeft:50}}>
          <labal style={{fontWeight:'bold', marginTop:40}}>Amazon pay gift cart</labal>
          <p >Get 4% gift for am</p>
          </div>
     <div style={{marginLeft:90}}>
          <span style={{color:'#4d9dbd'}}>Read T@C</span>
          <span style={{marginLeft:10}}><Button variant="contained"  style={{backgroundColor:'#82b74b',color:'white'}} color="primary">
            <Amazondrawer />
          </Button> </span>
          </div>
           </div>
          </DialogContentText>
        </DialogContent>
        <Divider/>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <div style={{height:80,alignItems:'center',display:'flex',boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',borderRadius:20}}>
             
             <img style={{width:50,height:50,marginLeft:10}} src='https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-basket-emblem-15.png'/>
          <div style={{marginLeft:50}}>
          <labal style={{fontWeight:'bold'}}>flipkart pay gift cart</labal>
          <p >Get 4% gift for am</p>
          </div>
     <div style={{marginLeft:100}}>
          <span style={{color:'#4d9dbd'}}>Read T@C</span>
          <span style={{marginLeft:10}}><Button variant="contained" style={{backgroundColor:'#82b74b',color:'white'}} color="primary">
            <Flipkartdrawer/>
          </Button> </span>
          </div>
           </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          
        </DialogActions>
      </Dialog>
    
</div>

  







<div style={{marginTop:30,}}>
<button style={{width:180,backgroundColor:'#82b74b',color:'white',border:'none'}} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  UPI
</button>


<div class="modal" style={{marginTop:150}} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="true" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <button type="button" style={{backgroundColor:'#82b74b',color:'white',border:'none'}} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        
      </div>
      <div class="modal-body">
        <img style={{width:40,height:40,justifyContent:'center'}} src='https://s3n.cashify.in/paymentMode/img/xhdpi/5c6fd572a4f5c.png'/>
      <span style={{marginLeft:50}}>UPI</span>
      <span style={{marginLeft:200,}}>
        <button style={{width:100,border:'none',backgroundColor:'#82b74b'}} type="button" class="btn btn-primary">
          <Addupidrawer/>
          </button></span>
      </div>
      <div class="modal-footer">
        

      </div>
    </div>
  </div>
</div>
</div>


    










</div>
    </div>




  
<div style={{marginLeft:5,marginRight:50}}>
              <Box
                boxShadow={3}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{marginRight:50,boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',marginTop:60, width: '25rem', height: '20rem',marginLeft:40,borderRadius:20 }}
              >
                <h1>Price Summary</h1>
                <Divider/>
                <div style={{marginTop:20}}>
                
                <span style={{marginTop:20}}>Base Price</span>
                <span style={{marginLeft:225}}>₹18,320</span>
                </div>
                <Divider style={{marginTop:20}}/>
                 <div>
                <span style={{marginTop:20}}>Pickup Charges</span>
                <span style={{marginLeft:'170px',color:'blue'}}>
                Free
                </span>
                <span style={{marginLeft:'5px'}}><strike> ₹100</strike>
               
                </span>
                </div>
                <Divider style={{marginTop:15}}/>
                
                <div style={{marginTop:15}}>
                <span>Total Amount</span>
                
                <span style={{marginLeft:'210px'}}>
                ₹18,320
                </span>
                </div>
              
              
                
                <Button style={{width:'85%',height:40,borderRadius:10,marginLeft:29,marginTop:30,backgroundColor:'#82b74b',color:'white'}} variant="contained"   endIcon={<ArrowRightAltIcon />} >
                <NavLink exact to='/PaymentPage' className="nav-link" style={{color:'white'}}>  Continue </NavLink></Button>
                     
              </Box>


         



             
<div style={{marginReft:20}}>
      
      <div style={{marginTop:30,marginLeft:40,width:400,borderRadius:10,height:60,backgroundColor:'lightgray',alignItems:'center',display:'flex',}}>
      <img style={{ width:15,height:15,marginLeft:15}} src='https://www.cashify.in/static/buy-back/svgs/whatsapp.svg'/>
        <label style={{marginLeft:10,marginTop:10}}>Get price alerts & updates on <p>Whatsapp</p> </label>
       
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
        style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',marginLeft:40, width: '25rem', height: '12rem',marginTop:35,borderRadius:20 }}
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
      </div>
    
      
<div>
      <Footer/>
</div>




      </>
    )
}

export default PaymentPage
