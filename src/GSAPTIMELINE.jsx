import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

function GSAPTIMELINE() {
    const timeline=gsap.timeline({
        repeat:-1,repeatDelay:1,yoyo:true
    });

    useGSAP(()=>{
      timeline.to('#yellow-box',{
        x:250,
        rotation:360,
        borderRadius:'100%',
        duration:2,
        ease:'back.inOut'
      });

       timeline.to('#yellow-box',{
        y:250,
        scale:2,
        rotation:360,
        borderRadius:'100%',
        duration:2,
        ease:'back.inOut'
      });

       timeline.to('#yellow-box',{
        x:500,
        rotation:360,
        borderRadius:'8px',
        duration:2,
        scale:1,
        ease:'back.inOut'
      });

    },[]);
  return (
    <div>
        <button className='bg-blue-400 text-white text-xl rounded-md px-3 py-2' onClick={()=>{
            if(timeline.paused()){
                timeline.play();
            }
            else{
                timeline.pause();
            }
        }}>Play/Pause</button>
     <div id="yellow-box" className='w-20 h-20 bg-yellow-500 rounded-lg'></div>
    </div>
  )
}

export default GSAPTIMELINE