import React from 'react'
import "../src/css/work.css"

function WorkBox(props) {
    return (
        <>
        <div className="container-fluid">
        <div className="a-box">
              
          <div className="a-b-img" >
                <img src={props.image} className="svg-img" />

            </div>

            <div className="s-b-text">
                <h2 >{props.title}</h2>
                    <p className="p-text"> 
                    Select your device & tell us about its current condition, and our advanced AI 
                    tech will tailor make the perfect price for you.</p>
            </div>

                </div>
                
                </div>
        </>
    )
}

export default WorkBox;
