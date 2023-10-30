'use client'
import React from 'react';
// import {  } from "flowbite-react";
import SearchIcon from '@mui/icons-material/Search';
import { Drawer } from 'flowbite';
import { Divider } from '@mui/material';
function header() {
    return (
        < >


            <div className="bg-[#181818] fixed w-[100%] h-[60px] text-white flex justify-evenly items-center">
<img src="/logo.png" alt="" width={50} />
                <div className="bg-[#3d3d3d] rounded-xl border-none  text-white">
                    <SearchIcon className='border-white border-l-2 h-[40px]' />
                  
                    <input type="search" className='rounded-xl bg-[#3d3d3d] border-none w-[25vh] text-white focus:border-green-500' placeholder='search' name='search' id='search' />
                </div>
            </div>

        </>
    );
}

export default header;