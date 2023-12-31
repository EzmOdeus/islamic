'use client'
import React, { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import id from '../app/Data/Data'
import useWindowSize from '@rooks/use-window-size';
function Card() {
    const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();

console.log(innerWidth);
    const opts = {
        height: innerWidth! > 700 ? '200':'300',
        width: innerWidth!>700?'400': '530',
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

