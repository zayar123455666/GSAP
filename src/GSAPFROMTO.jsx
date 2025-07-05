import React from 'react'
import { useGSAP } from '@gsap/react'
 import gsap from 'gsap';

function GSAPFROMTO() {

     useGSAP(()=>{
    gsap.fromTo("#red-box",
        {
         x:0,
         borderRadius:'0%',
         rotation:0,

        },
        {
     x:250,
     borderRadius:'100%',
     repeat:-1,
     yoyo:true,
     rotation:360,
     duration:2,
     ease:'bounce.out',
    })
   },[]);

  return (
    <div>
     <div id="red-box" className='w-20 h-20 bg-red-500 rounded-lg'></div>
    </div>
  )
}

export default GSAPFROMTO