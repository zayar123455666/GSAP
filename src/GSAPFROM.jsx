import React from 'react'
import { useGSAP } from '@gsap/react'
 import gsap from 'gsap';

function GSAPFROM() {
     useGSAP(()=>{
    gsap.from("#green-box",{
     x:250,
     repeat:-1,
     yoyo:true,
     rotation:360,
     duration:2,
     ease:'power1.inOut',
    })
   },[]);
  return (
    <div>
     <div id="green-box" className='w-20 h-20 bg-green-500 rounded-lg'></div>
    </div>
  )
}

export default GSAPFROM