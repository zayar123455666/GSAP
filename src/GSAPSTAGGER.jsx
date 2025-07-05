import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

function GSAPSTAGGER() {
    useGSAP(()=>{
  gsap.to('.stagger-box',{
    y:250,
    borderRadius:'100%',
    rotate:360,
    repeat:-1,
    yoyo:true,
    stagger:{
      amount:1.5,
      grid:[2,1],
      axis:'y',
      from:'center',
    
    }
  })
    },[]);
  return (
    <div className='flex items-center gap-2 '>
        <div className=" stagger-box w-20 h-20 bg-blue-100 rounded-md"></div>
        <div className="stagger-box w-20 h-20 bg-blue-200 rounded-md"></div>
        <div className="stagger-box w-20 h-20 bg-blue-300 rounded-md"></div>
        <div className="stagger-box w-20 h-20 bg-blue-400 rounded-md"></div>
        <div className="stagger-box w-20 h-20 bg-blue-500 rounded-md"></div>
    </div>
  )
}

export default GSAPSTAGGER