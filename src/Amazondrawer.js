import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import LockIcon from '@material-ui/icons/Lock';

import {TextField,Button} from '@material-ui/core'



const useStyles = makeStyles({
  list: {
    width: 500,
  },
  fullList: {
    width: 900,
    padding:20,
  },
});

export default function Amazondrawer({props}) {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('');
  const [state, setState] = React.useState({
  
  });


  const [checked, setChecked] = React.useState(true);

 

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <form >
     
      <div style={{padding:30}}>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <strong style={{fontSize:30}}>Add Amazon Pay Gift Card</strong> 
      <div> 
      <TextField
          label="Enter Email"
          id="margin-none"
          
          className={classes.textField}
          
          style={{width:450}}
        />
        </div> 
       <p style={{marginTop:30,fontSize:12}}>An OTP will be sent to this email. Voucher code will be sent to this email only.</p>
       <p style={{marginTop:0,fontSize:12}}>Make sure you have added correct email.</p> 
       <div style={{backgroundColor:'#e3dada',justifyContent:'center',marginTop:40,width:'100%', fontSize:13,display:'flex',alignItems:'center'}}>
     <LockIcon style={{width:12,height:30,alignItems:'center'}}/> <span>Your account is encrypted and 100% safe with us</span>
     </div>
     <Button style={{marginTop:10,width:'100%',backgroundColor:'#82b74b',color:'white'}} variant="contained" color="primary">
  Add Account
</Button>

  </div>
    </form>
      
      
  );

  return (
    <>
    <div>
      {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <labal labal="edit" onClick={toggleDrawer(anchor, true)}>Link</labal>
          
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
        
      ))}
    </div>
   
    </>
  );
}