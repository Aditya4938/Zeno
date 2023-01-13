import React from 'react'
import Details from './Details'
import Subscribe from './Subscribe'
import companyImg from'./companyImg.png'
import './Footer.css'
export default function Footer() {
  return (
    <>
    <div className="contactUs">
        <img src={companyImg} alt="" srcset="" style={{width:"90px",height:"50px",margin:'80px'}}/>
        <Details heading="Company" point1="Home" point2="Inventory"point3="Checkout"/>
        <Details heading="About Us" point1="Who are we" point2="What we do"point3="Our Reach"/>
        <Subscribe/>
    </div>
    </>
  )
}
