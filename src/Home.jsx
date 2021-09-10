import React from 'react'
import Deal from './Deal'
import Crousel from './Crousel'
import Footer from './Footer'
import Work from './Work'
import GetApp from "./GetApp"
import getapp1 from "../src/images/download3.jpg"
import Testinomial from './Testinomial'
import TopSellingBrands from './TopSellingBrands'

const Home  = ()=>{
    return(
       <>
    <Crousel/>
    <Work/>
    <Deal/>
    <TopSellingBrands/>
    <Testinomial/>
    <GetApp image={getapp1} title="Hello!"/>
    
    <Footer/>
       </>
    )
}

export default Home;