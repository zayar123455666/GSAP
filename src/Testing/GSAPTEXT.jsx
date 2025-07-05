import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

function GSAPTEXT() {
    useGSAP(()=>{
         gsap.to('#text',{
            ease:"power1.inOut",
            opacity:1,
            y:0,
         })

         gsap.fromTo('.para',
            { 
                opacity:0,
                y:20,

         },
         {
                opacity:1,
                y:0,
                delay:1,
                stagger:0.1,
         })
    },[])
  return (
    <div>
          <h1 id='text' className='opacity-0 translate-y-10'>GSAP Text</h1>
           <p className='mt-5 text-gray-500 para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempora, temporibus vitae voluptas nostrum a consequuntur? Explicabo porro est rem
             laboriosam, cumque, sit esse ut tenetur, vitae praesentium totam id deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe deleniti dignissimos incidunt quos minima ad ut nostrum vitae et deserunt eum, facilis eligendi id est,
              illo repellendus consectetur. Debitis, tempore.
           </p>
            <p className='mt-5 text-gray-500 para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempora, temporibus vitae voluptas nostrum a consequuntur? Explicabo porro est rem
             laboriosam, cumque, sit esse ut tenetur, vitae praesentium totam id deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe deleniti dignissimos incidunt quos minima ad ut nostrum vitae et deserunt eum, facilis eligendi id est,
              illo repellendus consectetur. Debitis, tempore.
           </p>
            <p className='mt-5 text-gray-500 para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempora, temporibus vitae voluptas nostrum a consequuntur? Explicabo porro est rem
             laboriosam, cumque, sit esse ut tenetur, vitae praesentium totam id deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe deleniti dignissimos incidunt quos minima ad ut nostrum vitae et deserunt eum, facilis eligendi id est,
              illo repellendus consectetur. Debitis, tempore.
           </p>
    </div>
  )
}

export default GSAPTEXT