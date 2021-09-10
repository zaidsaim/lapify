import React from 'react'
import { useHistory } from "react-router-dom"
import '../src/css/TopSellingBrands.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from '../src/Sell-components/Data'
function TopSellingBrands() {
    const history = useHistory()
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
    <>
            <div className="container"> 

            <h1 style={{ fontFamily: "Montserrat" }}>Top Selling Brands</h1>

            <div className="top-container">
           

            <Carousel responsive={responsive}> 
            

                <div className=" top-brand" >
                    <a title="Sell Old Apple">
                    
                        <div>
                            <span><img onClick={() => history.push({
                                pathname: '/product',
                                state: Product.Apple
                            })} className="img-fluid" alt="Apple" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/1071214e-b44f.jpg" />
                            </span>
                        </div>
                    </a></div>

                 <div className="top-brand" >

                    <a title="Sell Old Xiaomi" >
                        <div>
                            <span><img onClick={() => history.push({
                                pathname: '/product',
                                state: Product.Xiaomi
                            })}
                                className="img-fluid" alt="Xiaomi" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/cb96df6e-080f.jpg" />
                            </span>
                        </div>
                    </a></div>

                        <div className=" top-brand" >
                    <a title="Sell Old Samsung">
                        <div>
                            <span>
                                <img className="img-fluid" onClick={() => history.push({
                                    pathname: '/product',
                                    state: Product.Samsung
                                })}
                                    alt="Samsung" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg" /></span>
                        </div>
                    </a></div>

                        <div className=" top-brand" >
                    <a title="Sell Old Lenovo">
                        <div >
                            <span>
                                <img className="img-fluid" onClick={() => history.push({
                                    pathname: '/product',
                                    state: Product.Lenovo
                                })} alt="Lenovo" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/4834825a-7f10.jpg" /></span>
                        </div>
                    </a></div>

                   

                        <div className=" top-brand" >
                    <a title="Sell Old Sony" >
                        <div >
                            <span>
                                <img className="img-fluid" onClick={() => history.push({
                                    pathname: '/product',
                                    state: Product.Sony
                                })} alt="Sony" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/125aada5-a86f.jpg" /></span>
                        </div>
                    </a></div>
                        
            </Carousel>
                </div></div>
        </>
 )
}

export default TopSellingBrands;
