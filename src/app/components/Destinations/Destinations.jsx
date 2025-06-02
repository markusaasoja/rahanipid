import React from 'react'
import './Destinations.css'


const Destinations = () => {
  return (
    <>
    <h1 className='article-header'>
      Populaarsemad artiklid
    </h1>
      <a href="/kuidas-alustada-eestis" className='popular'>
        <div className='popular-content'>
          <h2>Kuidas alustada investeerimist Eestis</h2>
          <p>Paljud inimesed soovivad investeerida, kuid ei tea, kust alustada. Esialgu võib investeerimine tunduda keeruline ja hirmutav, eriti kui puuduvad varasemad teadmised rahandusest või kogemused väärtpaberitega. Tegelikult on Eestis investeerimise alustamine muutunud lihtsamaks kui kunagi varem — olemas on mitmeid digitaalseid platvorme, madalad alustamiskulud ning rohkelt tasuta infot ja koolitusi.</p>
          <p className='date'>Mai 20 2025</p>
        </div>
        <img src='/assets/article.jpg' alt="Investment article" />
      </a>
    <div className='destinations'>
  <a href="/kuidas-hinnata-aktsiaid" className='destination'>
    <img src='/assets/vaartus.jpg' alt="Budget planning" />
    <div className='destination-content'>
      <h2>Kuidas hinnata aktsiate väärtust?</h2>
      <p>Juuni 2 2025</p>
    </div>
  </a>

  <a href="/sektorite-analuus" className='destination'>
    <img src='/assets/sectors.jpg' alt="Money saving tips" />
    <div className='destination-content'>
      <h2>Sektorite analüüs: Kus peituvad parimad investeerimisvõimalused?</h2>
      <p>Juuni 2 2025</p>
    </div>
  </a>

  <a href="/kuidas-leida-tasakaal" className='destination'>
    <img src='/assets/article3.jpg' alt="Work-life balance" />
    <div className='destination-content'>
      <h2>Kuidas leida tasakaal töö ja isikliku elu vahel?</h2>
      <p>Mai 7 2025</p>
    </div>
  </a>
</div>

  <a href="/artiklid" className="link">Vaata kõiki artikleid</a>
    </>
  )
}

export default Destinations