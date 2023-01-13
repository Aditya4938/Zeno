import React from 'react';
import Button from './Button';
import './WhatWeDo.css';
// import teamwork from "./Images/teamwork.png"
const WhatWeDo =()=>{
    return(
        <>
        <div className="WhatWeDo">
            <div className="WhatWeDo-img">
                <img src="https://www.inmation.com/hs-fs/hubfs/career/in-teamwork.png?width=726&height=641&name=in-teamwork.png" alt=""  style={{width:'400px',height:'400px'}}/>
            </div>
            <div className="WhatWeDo-description"><h1 style={{color:"#42A387"}}>What we do</h1>
            <p>Since our inception in 2011, our goal has always
                been to help broadcasters both big and small
                successes. Beginning with a single service,
                over the past decade, our service offering has
                greatly expanded to include world-class streaming,
                a self-serve radio management platform,
                mobile apps, the Zeno.fm web directory, and more.</p>
                <Button/>
            </div>

        </div>

        </>
    )
}
export default WhatWeDo;