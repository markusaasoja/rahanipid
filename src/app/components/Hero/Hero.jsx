import React from 'react'
import './Hero.css'



const Hero = () => {
  return (
    <>
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Rahalised valikud, mis töötavad sinu kasuks</h1>
            <p>Pankade võrdlus, praktilised nõuanded ja investeerimisideed — kõik ühes kohas.</p>
            <a href='/artiklid'><button className="btn2"><img src='/assets/newspaper.png'/>Vaata artikleid</button></a>
        </div>
    </div>
    </>
  )
}

export default Hero