import React,{useContext, useState} from 'react'
import Footer from '../Footer'
import Downoad from '../GetApp'
import getapp1 from '../images/download3.jpg'
import { useHistory } from "react-router-dom";
import '../css/LaptopSeries.css'
import { stringify } from 'querystring';
/////////////////////Showing Laptop Series page/////////////////////////////
export default function Laptopss(props) {

const history =useHistory()
const [data,setData]=useState(JSON.parse(localStorage.getItem('Brand')))


const demo=()=>{
    console.log('printing products data',localStorage.getItem('Version'))
   
}


const handleOnClick=(data)=>{
    // console.log("calling handle event",JSON.parse(data))
     history.push({
         pathname:"/Version",
      state:data
        
        })

        localStorage.setItem('Version',JSON.stringify(data))
}



    return (
        <>
        {/* {console.log("hello",props.data)} */}
        <div className="container">
        <button onClick={demo}> data</button>
                {/* <div className="series-section">  </div> */}

                <span>
                <h3 style={{ textAlign: "center", fontFamily: "Montserrat",marginTop:20}}>Select Products</h3>
                </span>
    
                    <div className="container" >
                       
                        <div className="row" >
                    {
                        data.map(e=>(<>
                            <div className="col-md-4" 
                             onClick={()=>handleOnClick(e)}>
   
                            {console.log("objects",e)}
                            <div className="brand-series">
                                <img src={e.Url} alt="" />
                                    <p className="series-name">{e.Name}</p>
                                    </div>
                            </div>
                        </>))
                    }
                </div>
                
            </div>
                     
            </div>
                       <Downoad image={getapp1} title="Hello!"/>
               
                   <Footer/>
            
            </>
        
    )
}

