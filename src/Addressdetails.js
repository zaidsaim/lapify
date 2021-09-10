import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import SearchIcon from '@material-ui/icons/Search';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';


const useStyles = makeStyles({
  list: {
    width: 500,
  },
  fullList: {
    width: 900,
    padding:20,
  },
});

export default function Addressdetails({props}) {
  const classes = useStyles();
  {/*const [location, setLocation]=useState('');
  const [flatno, setFlatno]=useState('');
  const [landmark, setLandmark]=useState('');
  const [pincode, setPincode]=useState('');
  const [city, setCity]=useState('');
  const [state, setState]=useState('');
const [alternateno, setAlternateno]=useState('');*/}
  const [state, setState] = React.useState({
  
  });
 
const [selectedValue, setSelectedValue]=React.useState()

const [location, setLocation]=React.useState()

const [enterflatno, setEnterflatno]=React.useState()
const [landmark, setLandmark]=React.useState()
const [pincode, setPincode]=React.useState()
const [city, setCity]=React.useState()
const [alternateno, setAlternateno]=React.useState()
const [states, setStates] = React.useState()


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
      <h1 style={{fontSize:20}}>Address</h1>
      <SearchIcon style={{marginTop:18}}/>
      <TextField
          label="Search your location here"
          id="margin-none"
        
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
         
          className={classes.textField}
         
          style={{width:450}}
        />
        <div>
        <Button style={{marginTop:10,backgroundColor:'#82b74b',color:'white'}} variant="contained">
 <LocationSearchingIcon/> <span style={{marginLeft:10}}>Use my current location</span>
</Button>
</div>
  <div>
      
      <TextField
          label="Enter flat no/house no/office"
          id="margin-none"
          value={enterflatno}
          onChange={(e)=>setEnterflatno(e.target.value)}
          className={classes.textField}
         
         
          style={{width:450}}
        />
        </div>
        <div>
      
      <TextField
          label="Landmark"
          id="margin-none"
          value={landmark}
          onChange={(e)=>setLandmark(e.target.value)}
          className={classes.textField}
          
          style={{width:450}}
        />
        </div>
        <div>
      
      <TextField
          label="Pincode"
          id="margin-none"
          value={pincode}
          onChange={(e)=>setPincode(e.target.value)}
          className={classes.textField}
        
          style={{width:450}}
        />
        </div>
        <div>
      
      <TextField
          label="City"
          id="margin-none"
          value={city}
          onChange={(e)=>setCity(e.target.value)}
          className={classes.textField}
      
          style={{width:450}}
        />
        </div>
        <div>
      
      <TextField
          label="State"
          id="margin-none"
          value={states}
          onChange={(e)=>setStates(e.target.value)}
          className={classes.textField}
      
          style={{width:450}}
        />
        </div>
        <div>
      
      <TextField
          label="Alternate Number(Optional)"
          id="margin-none"
          value={alternateno}
          onChange={(e)=>setAlternateno(e.target.value)}
          className={classes.textField}
         
          style={{width:450}}
        />
        </div>
        <p style={{marginTop:20}}>Save as</p>



  




  <div>
    <Radio
      checked={selectedValue === 'a'}
      onChange={handleChange}
      value="a"
      name="radio-button-demo"
      inputProps={{ 'aria-label': 'A' }}
    ></Radio><span>HOME</span>
    <Radio
      checked={selectedValue === 'b'}
      onChange={handleChange}
      value="b"
      name="radio-button-demo"
      style={{marginLeft:20}}
      inputProps={{ 'aria-label': 'B' }}
    ></Radio><span>OFFICE</span>
      <Radio
      checked={selectedValue === 'c'}
      onChange={handleChange}
      value="c"
      name="radio-button-demo"
      inputProps={{ 'aria-label': 'c' }}
    ></Radio><span>OTHER</span>
  </div>
  <Button style={{width:'80%',marginLeft:45,marginBottom:20,backgroundColor:'#82b74b',color:'white'}} variant="contained" color="primary">
  Primary
</Button>
      </div>
      </form>
      
      
  );

  return (
    <>
    <div>
      {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <labal labal="edit" onClick={toggleDrawer(anchor, true)}>edit</labal>
          
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
        
      ))}
    </div>
   
    </>
  );
}