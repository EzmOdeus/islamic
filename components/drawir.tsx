'use client'
import id from '@/app/Data/Data';
import React, { useEffect, useState } from 'react';

function drawir() {

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
  return (
    <>
      <div className="bg-[#181818] h-[100vh] sticky top-0 flex-1 px-[25px] py-[20px]  text-white flex flex-col items-center">
        <img src="/logo.png" alt="" className='pb-[30px]' width={100} height={50}/>
        {
          id.map(e => {
            return <>
              <div className="pb-[20px] flex flex-row-reverse ">
                {/* {windowSize.innerWidth > 700 ? e.shekh: null} */}
              <img src={e.shekhimg} alt="" width={50} className='rounded-full '/>
            </div>
            </>
          })
        }
      </div>
    </>
  );
}
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default drawir;