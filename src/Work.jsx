import React from 'react';
import WorkBox from "./WorkBox";
import featureimage1 from "../src/images/feature_1.png";
import featureimage2 from "../src/images/feature_2.png";
import featureimage3 from "../src/images/feature_3.png";
import  "../src/css/work.css"
import DoubleArrowTwoToneIcon from '@material-ui/icons/DoubleArrowTwoTone';

function Work() {
    return (
        <>   
           
          <div className="container-fluid">
                
        <div id="work">

         <h2 className="h1">
                        <DoubleArrowTwoToneIcon />  How It Works</h2>
                         

            <div className="a-container">
                        

                <WorkBox image={featureimage1} title="Check Price" />
                <WorkBox image={featureimage2} title="Schedule Pickup" />
                <WorkBox image={featureimage3} title="Get Paid" />
                
                    </div>     

        </div>
        </div>
        </>
    )
}

export default Work;
