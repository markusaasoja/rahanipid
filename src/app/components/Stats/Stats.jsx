import React from 'react'
import './Stats.css'

function Stats() {
  return (
    <div className='stats-container'>
      <div className='stats'>
        <div className='stat'>
          <h2>1 740</h2>
          <p>Keskmine brutopalk</p>
        </div>
        <div className='stat'>
          <h2>40%</h2>
          <p>Säästavad ja investeerivad</p>
        </div>
        <div className='stat'>
          <h2>700 000</h2>
          <p>Inimest III sambas</p>
        </div>
        <div className='stat'>
          <h2>300 000+</h2>
          <p>Krediitkaartide võlad</p>
        </div>
        <div className='stat'>
          <h2>70%</h2>
          <p>Tööjõu osalus</p>
        </div>
      </div>
    </div>
  )
}

export default Stats