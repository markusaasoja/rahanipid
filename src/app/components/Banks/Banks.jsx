import React from 'react';
import './Banks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';


const Banks = () => {
  const banks = [
    {
      name: 'SEB',
      logo: '/assets/seb-logo.png',
      pros: [
        'Madalamad intressimäärad laenudel',
        'Usaldusväärne ja stabiilne',
        'Laialdane pangaautomaatide võrgustik',
        'Hea äriklientide teenindus',
      ],
      cons: [
        'Vana disainiga mobiiliäpp',
        'Teenustasud ülekannete eest',
        'Piiratud investeerimistooted',
      ],
    },
    {
      name: 'Swedbank',
      logo: '/assets/swebank-logo.png',
      pros: [
        'Kõige enam filiaale Eestis',
        'Populaarne tööandja',
        'Laialdased investeerimisvõimalused',
        'Kasutajasõbralik veebikeskkond',
      ],
      cons: [
        'Kõrged teenustasud väiksematele kontodele',
        'Aeg-ajalt aeglane klienditugi',
        'Pikaajalised laenuprotsessid',
      ],
    },
    {
      name: 'LHV',
      logo: '/assets/lhv-logo.png',
      pros: [
        'Eesti kapitalil põhinev pank',
        'Konkurentsivõimelised investeerimistasud',
        'Kaasaegne ja kiire mobiiliäpp',
        'Keskendub innovatsioonile ja startupidele',
      ],
      cons: [
        'Vähem filiaale väiksemates linnades',
        'Kõik teenused pole veel võrdsed suurpankadega',
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
