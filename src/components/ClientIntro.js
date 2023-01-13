import React from 'react'
import "./ClientIntro.css"
export default function ClientIntro(props) {
  return (
    <>
    <div className="client-intro">
       <div className="client-name-pic">
       <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" style={{width:"50px",height:"50px",margin:'10px'}} />
        <p style={{color:"#09805E"}}><b>{props.name}</b> <br />{props.position}</p>
        {/* <p style={{color:"#09805E"}}></p> */}
       </div>
        <p style={{color:"#23C497"}}>{props.clientDescription}</p>
    </div>
    </>
  )
}
