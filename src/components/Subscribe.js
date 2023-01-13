import React from 'react'
import './Subscribe.css'
export default function Subscribe() {
  return (
    <>
    <div className="newsletter">
        <h1 style={{color:"#09805E"}}>Subscribe to <br /> Our Newsletter</h1>
        <input className='email'type="text" value="Enter Your Email" /><br />
        <button className='subscription' type="submit">Subscribe</button>
    </div>
    </>
  )
}
