import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

function GSAPSCROLLTRIGGER() {
    const ScrollRef=useRef();

    useGSAP(()=>{
      const boxes=gsap.utils.toArray(ScrollRef.current.children);

      boxes.forEach((box)=>{
        gsap.to(box,{
            x:250 * (boxes.indexOf(box)+5),
            rotation:360,
            borderRadius:'100%',
            scale:1.5,
            scrollTrigger:{
                trigger:box,
                start:'bottom bottom',
                end:'top 20%',
                scrub:true,
            },
            ease:'power1.inOut',
        })
      })
    },{scope:ScrollRef})
  return (
    <div className='mt-80 w-full h-screen' ref={ScrollRef}>
         <div id="scroll-pink" className='bg-pink-500 w-20 h-20 rounded-md'></div>
         <div id="scroll-orange" className='bg-orange-500 w-20 h-20 rounded-md'></div>
    </div>
  )
}

export default GSAPSCROLLTRIGGER