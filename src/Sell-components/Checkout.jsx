import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {Button,Divider} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Form } from 'react-bootstrap';
import HelpIcon from '@material-ui/icons/Help';
import Footer from '../Footer'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { NavLink } from 'react-router-dom';
import Price from '../cart/Price'
import { useEffect } from 'react';
//
import { useSelector,useDispatch } from 'react-redux';
//

function Checkout() {
const {cartItems}= useSelector(state => state.cart);

 const dispatch = useDispatch()


useEffect(() =>{
   console.log(cartItems)
   
}, [])
        



  
    return (
        <>
         <div style={{backgroundColor:'#ebf0ec'}}>
        <div style={{marginTop:20,marginLeft:100,}} >
        <Button variant="contained"  color="#82b74b" style={{backgroundColor:'#82b74b',color:'white',width:120,height:40}}>
        <ArrowBackIcon/>
        <NavLink className="nav-link" to='/' style={{color:'white'}}>Back</NavLink>
</Button>




      

 </div>

        
           
           <div style={{display:'flex',marginLeft:70}}>
              <Box
                boxShadow={2}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{display:'flex',boxShadow: '0px 10px 12px rgba(0,0,0,0.1)', width: '48rem', height: '22rem',marginLeft:30,borderRadius:20,display:'flex'}}
              >
  

 <img src='https://s3n.cashify.in/cashify/product/img/xhdpi/e21c1388-ddcd.jpg'
                    style={{width:200,height:200,margin:'40px 0 0 50px'}}
                />
             <>  
{/*{
  cartItems.map(item=>(
    <img src={item.Url}/> 
  ))
}*/}
 </> 

                <Box style={{margin:'20px 0 0 40px',}}>
                    <h1>Pavilion Series</h1>
                    <p> Selling price 18320</p>
                    <p> {cartItems.price}</p>
                    
                    <Box
                boxShadow={2}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',backgroundColor:'#ebf0ec'  ,borderRadius:10,width: '27rem', height: '6rem',marginTop:50}}
              ><p>The value is based on the condition of the product mentioned by you.
Click Here to See your Device report</p>
<div style={{alignItems:'center',display:'flex',justifyContent:'space-between',marginTop:80}}>
<img src='https://www.cashify.in/static/buy-back/quote/safe.svg' style={{width:30,height:30}}/>
<span >Safe & Secure</span>
<img src='https://www.cashify.in/static/buy-back/quote/doorstep.svg' style={{width:30,height:30}}/>
<span >Free Doorstep</span>
<img src='https://www.cashify.in/static/buy-back/quote/no_haggling.svg' style={{width:30,height:30}}/>
<span >No Haggling</span>
</div>
              </Box>
                </Box>
              </Box>
              
              <Box
                boxShadow={3}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)', width: '25rem', height: '20rem',marginLeft:35,borderRadius:20 }}
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
                <span style={{marginLeft:'190px'}}>
                <span>Free</span>       <strike>₹100</strike> 
                </span>
                </div>
                <Divider style={{marginTop:15}}/>
                <div>
                <span style={{marginTop:20}}>Add Promo code</span>
                <span style={{marginLeft:'190px'}}>
                Apply
                </span>
                </div>
                <Divider style={{marginTop:20,color:'gray'}}/>
                <div style={{marginTop:15}}>
                <span>Total Amount</span>
                
                <span style={{marginLeft:'210px'}}>
                ₹18,320
                </span>
                </div>
              
              
             
                <Button style={{backgroundColor:'#82b74b',color:'white',width:'85%',height:35,borderRadius:10,marginLeft:29,marginTop:15,}} variant="contained"   endIcon={<ArrowRightAltIcon />} >
                <NavLink className="nav-link" style={{color:'white'}} exact to='/Address'> Get Paid</NavLink></Button>
                     
              </Box> 
             
              </div>
             
          

            


























           
  <Grid container>
  
      <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)', width: '48rem', height: '17rem',marginLeft:100,borderRadius:20, }}
      >
      <div style={{display:'flex',alignItems:'center'}}>
        <img style={{width:35,height:35,padding:5}} src='https://www.cashify.in/static/buy-back/quote/discount.svg'/>
        <span style={{fontSize:20,marginLeft:5,fontWeight:'bold'}}> Special Offers*</span>
        </div>
        <p style={{marginLeft:40}}> This is where your smile gets wider. Earn extra with these exclusive offer !</p>
       
        <Box style={{display:'flex',}}>
     <Box
        boxShadow={2}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',backgroundColor:'#ebf0ec', width: '14rem', height: '10rem',borderRadius:10 }}
      >
       <div >
       <div >
    <Radio style={{justifySelf:'flex-start'}}/>
           <label>Flipkart Gift Card</label>
           </div>
           <div style={{marginLeft:20,}}>
          
           <ul>
           <li>Get 6% Extra for</li>
           <li>Flipkart</li>
           <li>You Get</li>
           <li>₹37,020</li>
           
           </ul>
          
       </div>
       </div>
      </Box>
      <Box
        boxShadow={2}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)', backgroundColor:'#ebf0ec',width: '14rem', height: '10rem',borderRadius:10 }}
      >
        <div >
       <div >
    <Radio style={{justifySelf:'flex-start'}}/>
           <label>Flipkart Gift Card</label>
           </div>
           <div style={{marginLeft:20,}}>
          
           <ul>
           <li>Get 6% Extra for</li>
           <li>Flipkart</li>
           <li>You Get</li>
           <li>₹37,020</li>
           
           </ul>
          
       </div>
       </div>
      </Box>
      <Box >
      </Box>
      </Box>
      </Box>
      
      <div>
      <div>
      <div style={{marginLeft:35,borderRadius:10,height:60,backgroundColor:'lightgray',alignItems:'center',display:'flex',}}>
      <img style={{ width:15,height:15,marginLeft:15}} src='https://www.cashify.in/static/buy-back/svgs/whatsapp.svg'/>
        <label style={{borderRadius:10,marginLeft:10,marginTop:10}}>Get price alerts & updates on <p>Whatsapp</p> </label>
       
        <div class="form-check form-switch" style={{marginLeft:'auto',}}>
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
  <label class="form-check-label" for="flexSwitchCheckChecked"></label>
  </div>
</div>
</div>

      <Box style={{}}>
      <Box
        boxShadow={2}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)', width: '25rem',marginLeft:35, height: '12rem',flexDirection:'row',marginTop:35,borderRadius:10 }}
      >
        <strong> Payment Options</strong>
        <div style={{backgroundColor:'lightgray',marginTop:10  ,justifyContent:'space-between',marginLeft:20,padding:10,border:'2px gray'}}>
          <img style={{width:80,height:35}} src='https://www.cashify.in/static/buy-back/options/upi.png'/>
          <img style={{width:80,height:35}}  src='https://www.cashify.in/static/buy-back/options/paytm.png'/>
          <img style={{width:80,height:35}} src='https://www.cashify.in/static/buy-back/options/amazon.png'/>
          <img style={{width:80,height:35}} src='https://www.cashify.in/static/buy-back/options/paytm.png'/>
        </div>

        <div style={{backgroundColor:'lightgray',marginTop:10  ,justifyContent:'space-between',marginLeft:20,padding:10,border:'2px gray'}}>
          <img style={{width:80,height:35}} src='https://www.cashify.in/static/buy-back/options/airtel.png'/>
          <img style={{width:80,height:35}}  src='https://www.cashify.in/static/buy-back/options/croma.png'/>
          <img style={{width:80,height:35}} src='https://www.cashify.in/static/buy-back/options/flipkart.png'/>
          <img style={{width:80,height:35}} src='https://www.cashify.in/static/buy-back/options/tatacliq.png'/>
        </div>
      </Box>
      </Box>
      <Box>
     
      </Box>
      </div>
   
    
    <Box
        boxShadow={2}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)', width: '48rem', height: '16rem',marginLeft:100,borderRadius:20,marginTop:10, }}
      >
      <div style={{padding:10,}}>
<HelpIcon style={{width:30,height:30}}/><label>FAQS</label>  
      </div>
      <select style={{border:'none',width:700}}>
  <option selected>Open this select menu</option>
  <option value="1"><p>We evaluate devices on the basis of their condition, age, supply, demand & </p><p>value in the resale market. All 
   these factors are accounted for by our AI mechanism to </p>determine the best resale value of your device.</option>

</select>
 <select style={{border:'none',width:700}}>
  <option selected>Open this select menu</option>
  <option value="1">
 <p>We evaluate devices on the basis of their condition, age, supply, demand &  </p>value in the resale market. All <br/>
 <p>these factors are accounted for by our AI mechanism to determine the best resale value of your device.</p>
</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 <select style={{border:'none',width:700}}>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 <select style={{border:'none',width:700}}>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 <select style={{border:'none',width:700}}>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 <select style={{border:'none',width:700}}>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<p style={{marginTop:20,marginLeft:350}}>load more</p>
      </Box>
      </Grid>
      </div>
   
      <Footer />

    </>
          );
        }
       

export default Checkout
