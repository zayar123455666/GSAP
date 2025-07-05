import React from 'react'
import { useGSAP } from '@gsap/react'
 import gsap from 'gsap';
function GSAPTO() {
     useGSAP(()=>{
    gsap.to("#blue-box",{
     x:250,
     repeat:-1,
     yoyo:true,
     rotation:360,
     duration:2,
     ease:'elastic',
    })
   },[]);
  return (
   <div>
     <div id="blue-box" className='w-20 h-20 bg-blue-500 rounded-lg'></div>
    </div>
  )
}

export default GSAPTO