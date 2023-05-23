import Button from '@mui/material/Button';
import React from 'react';
import "../css/Navbar.css"
import logo from "../img/Apple-Music-Logo.png"

export const Navbar = () => {
  return (
    <div className='container'>
      <nav className='Navbar' id='Navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='Button'>
          <div className='daftar'>
            <Button variant='text' id='Daftar' color='#212121'>Daftar Sekarang</Button>
          </div>
          <div className='masuk'>
            <Button variant="contained" id='Masuk'>Masuk</Button>
          </div>
        </div>
      </nav>
    </div>
  )
}
