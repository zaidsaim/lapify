import React from 'react';
import DealsData from "./DealsData";
import buyoffer from "../src/images/buyoffer.png";
import repairoffer from "../src/images/repairoffer.png";
import exchangeoffer from "../src/images/exchangeoffer.png";
import "../src/css/Deals.css"

function Deal() {
    return (
        <>

        <div id="deal">

                <h1 style={{ fontFamily: "Montserrat", paddingLeft: 30 }}>Hot Deals</h1>

        <div className="a-container">

        <DealsData image={buyoffer}/>
        <DealsData image={repairoffer}/>
        <DealsData image={exchangeoffer}/>

        </div>
            
        </div>
        </>
    )    
}

export default Deal;
