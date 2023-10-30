import img from '@/app/Data/img';
import React from 'react';

function Nav() {
    return (
        <>
            <div className="w-[100%]  text-white bg-[#3d3d3d] fixed top-[92vh] flex items-center justify-evenly overflow-hidden">
                {
                    img.map(e=>{
                        return <img src={e.shekhimg} alt="" width={60} height={80} className='rounded-full p-[5px] '/>
                    })
                }
            </div>
        </>
    );
}

export default Nav;