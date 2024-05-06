
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Button from './Button'

const Header = () => {
  return (
    <header className='border rounded-full  my-4'>
        <nav className='flex justify-between items-center px-4 py-4'>
            <div className='pl-2'>
                <Link to={"/"}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className='flex gap-4'>
                <Button btnType='secondary-cta'>Get Projects</Button>
                <Button btnType='primary-cta'>Meet your candiadates</Button>
            </div>
        </nav>
    </header>
  )
}

export default Header