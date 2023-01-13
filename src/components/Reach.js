import React from 'react'
import Button from './Button'
import './Reach.css'
import reachworld from './reachworld.png'
export default function Reach() {
  return (
    <>
    <div className="world-reach">
      <h1 style={{color:'#23C497'}}>Our Reach</h1>
      <p>Advertising on our platform gives you <br />
        direct access to the audience you wish to target.</p>
        <Button/>
        <img src={reachworld} alt="" style={{width:'95%',height:'80%',justifyContent:'center'}}/>
    </div>

    </>
  )
}
