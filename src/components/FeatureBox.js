import React from 'react'
import "./FeatureBox.css"
export default function FeatureBox(props) {
  return (
    <>
    <div className="featureBox">
    <h1 style={{color:"#42A387"}}>{props.heading}</h1>
    <p style={{color:"#42A387"}}>{props.description}</p>
    </div>
    </>
  )
}
