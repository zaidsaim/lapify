import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core'
import exactvalue from '../images/exactvalue.jpg';
import TopSellingBrands from '../TopSellingBrands'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Footer from '../Footer'
import '../css/Version.css'
import {addToCart} from '../Redux/actions/cartAction'
import  {useDispatch} from 'react-redux'
import { useSelector} from 'react-redux'
import { useHistory } from 'react-router';
{/*import {getProductDetails} from '../Redux/actions/productAction'
import {addToCart} from '../Redux/actions/cartAction'
import  {useDispatch} from 'react-redux'
import { useSelector} from 'react-redux'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';*/}

////////////////Showing Exact Value/////////////////////////
function Version(props,match) {

  const dispatch = useDispatch()

  const [product,setProduct]=useState(JSON.parse(localStorage.getItem('Version')))
//   const product = useSelector(state => state.getProductDetails)

  const addItemCart=()=>{
console.log("shahid")
    // dispatch(addToCart())
     props.history.push({
                pathname: '/device-Specification/DeviceSwitch',
               
                 })
    
    }

     
useEffect(() => {
    getDataFromSession()       
 
}, [dispatch])
  
const getDataFromSession=()=>{
    var data = JSON.parse(localStorage.getItem('Version'))
    console.log("calling getdata",data.Name)
    console.log("calling product",product)
    
}


    return (
        <>
        <div className="container">
                            
             {console.log("hello from version", props.location.state)} 

                        <div className="version-section" >
                    <div className="row">
                    <div className="col-md-4">
                           
                        <span> 

                            <img className="img-fluid" style={{ paddingLeft: 50 }}
                                src={product.Url} />
                            
                            <p style={{ paddingLeft: 80}}>{product.Name}</p>
                            
                            </span></div>

                            <div className="col-md-4">

                        <div >
                                        <h3 className="price">Price</h3>
                                        <p className="price-data">{product.Price}</p>
                            </div>



                <div>
                   <Button variant="contained" style={{ height: 40,marginLeft:10,backgroundColor:'#82b74b',color:'white'}} size="large" 
                   onClick={()=> addItemCart()}
                   endIcon={<ArrowRightAltIcon />} >
Get Exact Value
                    {/* <NavLink className="nav-link"  style={{color:'white'}} exact to="/Device-Specification/DeviceSwitch" > Get Exact Value</NavLink> */}
                        </Button>
                        
                            </div>
                            </div>

                             
                            <div className="col-md-4">

                            <img src={exactvalue} alt="exact value" className="banner-img" />
                            </div>
                            
                            </div>
                
                            </div>
            </div>
                            




   
    
         

          

  {/* <Card >
   <CardContent>
           <img src={product.detailsUrl}/>
           </CardContent>
</Card>*/}





  

 







                        <TopSellingBrands />
                        <Footer />
                           
          
            
        </>

        
    )
}

export default Version;


 
 

