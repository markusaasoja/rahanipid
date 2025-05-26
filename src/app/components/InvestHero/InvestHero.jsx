import React from 'react';
import './InvestHero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function InvestHero() {
  return (
    <div className='invest-hero'>
      <h1>Investeerimise juhend algajale</h1>
      <p>
        Investeerimine võib esmapilgul tunduda keeruline ja riskantne, kuid õigete teadmiste ja
        läbimõeldud otsuste abil on see suurepärane viis oma raha kasvatamiseks. Üha rohkem inimesi
        mõistab, et pelgalt raha säästmisest ei piisa – raha peab töötama sinu heaks. Selles juhendis
        anname ülevaate investeerimise põhitõdedest, tutvustame erinevaid varaklasse ja toome välja,
        kuidas alustada investeerimist väikeste summadega, vältides levinumaid vigu.
      </p>
      <ul className="invest-checklist">
        <li>
          <FontAwesomeIcon icon={faCircleCheck} className="check-icon" /> Mis on investeerimine
        </li>
        <li>
          <FontAwesomeIcon icon={faCircleCheck} className="check-icon" /> Investeerimisvõimalused
        </li>
        <li>
          <FontAwesomeIcon icon={faCircleCheck} className="check-icon" /> Kuidas alustada
        </li>
        <li>
          <FontAwesomeIcon icon={faCircleCheck} className="check-icon" /> Investeerimisstrateegiad
        </li>
        <li>
          <FontAwesomeIcon icon={faCircleCheck} className="check-icon" /> Tööriistad ja kalkulaatorid
        </li>
      </ul>
    </div>
  );
}

export default InvestHero;
