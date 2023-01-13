import React from 'react'
import Button from './Button'
import './Introduction.css'
export default function Introduction() {
  return (
    <>
    <div className="intro">
        <div className="intro-left">
        <h1 style={{color:"#23C497"}}>We help your company <br />
            to grow by making it <br />
            visible through</h1>
        <p>
        Zeno Media offers broadcasters solutions <br />
        to power their radio station and is proudly <br />
        the largest diaspora focused streaming <br />
        company in the world. Connecting <br />
        immigrant diaspora communities <br />
        to their favourite stations is our <br />
        speciality.
        </p>
        <Button/>
        </div>
        <div className="intro-right">
            <img src="https://ifelldh.tec.mx/sites/g/files/vgjovo1101/files/4380_web_1_0.jpg" alt="" />
        </div>
    </div>
    </>
  )
}
