import React from 'react';
import './Banks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';


const Banks = () => {
const banks = [
  {
    name: 'SEB',
    logo: '/assets/seb-logo.png', // See tee peab olema õige sinu projektis
    pros: [
      'Tugev äriklientide ja suurettevõtete teenindus.',
      'Lai valik finantstooteid nii era- kui ka äriklientidele, sh rohelised laenud.',
      'Hea digitaalne pangandusplatvorm ja mobiiliäpp.',
      'Rahvusvaheline taust ja kogemus.'
    ],
    cons: [
      'Väiksem kontorivõrgustik võrreldes Swedbankiga.',
      'Mõned teenustasud võivad olla kõrgemad, eriti teatud tehingute puhul.',
      'Võib olla kohati konservatiivsem uute lahenduste juurutamisel.'
    ],
  },
  {
    name: 'Swedbank',
    logo: '/assets/swebank-logo.png', // See tee peab olema õige sinu projektis
    pros: [
      'Eesti suurim pangakontorite ja sularahaautomaatide võrgustik.',
      'Väga kasutajasõbralik mobiili- ja internetipank.',
      'Laialdane teenuste valik eraisikutele ja VKEdele (väikesed ja keskmised ettevõtted).',
      'Tugev turupositsioon ja usaldusväärsus Eestis.'
    ],
    cons: [
      'Klienditugi võib tipptundidel olla koormatud.',
      'Mõned kliendid on kogenud laenuprotsessi pikkust.',
      'Teenustasud võivad teatud teenuste puhul olla võrdlemisi kõrged.'
    ],
  },
  {
    name: 'LHV',
    logo: '/assets/lhv-logo.png', // See tee peab olema õige sinu projektis
    pros: [
      'Eesti kapitalil põhinev pank, mis rõhutab kohalikku arengut.',
      'Väga soodsad ja head investeerimisvõimalused (nt madalad tehingutasud aktsiatele).',
      'Kaasaegne, kiire ja innovatiivne mobiiliäpp ning digilahendused.',
      'Orienteeritud kiirele teenindusele ja uuendustele, eriti tehnoloogia ja startupide valdkonnas.'
    ],
    cons: [
      'Piiratud kontorivõrgustik, eriti väljaspool suuremaid linnu.',
      'Võib-olla ei paku kõiki spetsiifilisi finantsteenuseid, mida suured rahvusvahelised pangad pakuvad.',
    ],
  },
];


  return (
    <div className="banks-container">
      <h1 className='article-header'>Pankade võrdlus</h1>
      <div className="banks-list">
        {banks.map((bank, index) => (
          <div className="bank-card" key={index}>
            <div className="bank-logo">
              <img src={bank.logo} alt={`${bank.name} logo`} />
            </div>
            <h2>{bank.name}</h2>
            <ul className="bank-features">
              {bank.pros.map((pro, idx) => (
                <li key={`pro-${idx}`} className="feature pro">
                  <FontAwesomeIcon icon={faCheck} /> {pro}
                </li>
              ))}
              {bank.cons.map((con, idx) => (
                <li key={`con-${idx}`} className="feature con">
                    <FontAwesomeIcon icon={faXmark} />
                    {con}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banks;
