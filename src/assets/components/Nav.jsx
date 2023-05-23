import React from 'react'
import logo from "../img/Apple-Music-Logo.png"
import { ButtonComponent } from '../components/Button'
// import Button from '@mui/material/Button';

export const Nav = () => {
  return (
    <nav className='absolute flex w-full h-20 px-[5px] bg-[#F2C94C] drop-shadow-lg'>
        <div className='grid w-1/2 justify-items-start'>
            <img src={logo} alt='logo' className='w-[125px] mx-[32px] py-[20px] hover:drop-shadow-[0_0_7px_rgb(235,228,228,1)]'/>
        </div>
        <div className='grid w-1/2 justify-items-end'>
            <div className='flex mx-[32px] py-[20px]'>
                <div className='px-[15px]'>
                    <ButtonComponent  type='text' id='Daftar' text="Daftar Sekarang"/>
                </div>
                <div className='px-[15px]'>
                    <ButtonComponent type='contained' id='Masuk' text="Masuk"/>
                </div>
            </div>
        </div>
    </nav>
  )
}
