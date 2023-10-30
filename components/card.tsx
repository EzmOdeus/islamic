'use client'
import React, { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import id from '../app/Data/Data'
function Card() {

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
console.log(windowSize.innerWidth);
    const opts = {
        height: windowSize.innerWidth > 700 ? '200':'300',
        width: windowSize.innerWidth>700?'400': '530',
    }
   
    return (
        <div className='p-3' >
             <div className="flex justify-between max-md:justify-center items-center flex-wrap max-md:w-[100%]">
               {
                id.map(e=>{
                    // console.log(e.id);
                    return <div className="" key={e.id}>
                        {/* <img src={e.img} alt="#" /> */}
                        <YouTube videoId={e.id} opts={opts} className='pb-3 rounded-md'></YouTube>
                    </div>
                    
                })
               }
               
            </div>
            </div>
            
    );
}

export default Card;
        
    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }