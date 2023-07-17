import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navcontainer'>
      <div className='navwrapper'>
        <div className='menu'>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/about'>About</Link>
            </ul>
        </div>
        <div className='name'>
        <img className='img1' src='../Images/logo.png' alt='homeimmmmmg'></img>
        </div>
        <div className='menu2'>
            <ul>
                <Link to='/contact'>Contacts</Link>
                <Link to='/cart'>View Cart</Link>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
