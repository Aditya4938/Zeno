import React from 'react'
import './Details.css'
export default function Details(props) {
  return (
    <>
    <div className="details-header">
        <h1 style={{color:"#09805E"}}>{props.heading}</h1>
        <p style={{color:"#23C497"}}>{props.point1}</p>
        <p style={{color:"#23C497"}}>{props.point2}</p>
        <p style={{color:"#23C497"}}>{props.point3}</p>
    </div>
    </>
  )
}
