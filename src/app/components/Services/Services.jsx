import React from 'react'
import './Services.css'
import nature from '../../assets/Nature.jpg'

const Services = () => {
  return (
    <div className='services'>
        <img src={nature}/>
        <div className='text'>
            <h1>Meie teenused</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
    </div>
  )
}

export default Services