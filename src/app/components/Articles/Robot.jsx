import React from 'react';

import '../Articles/Articles.css';
import '../InvestArticle/InvestArticle.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faRobot, faMobileAlt, faPiggyBank, faChartLine, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { faBuilding, faCoins, faHome, faWallet } from '@fortawesome/free-solid-svg-icons'

function RoboAdvisorsEstonia() {
  return (
    <>
      <div className='article-content'>
        <img src="/assets/robots.jpg" alt="Robo-advisor" className='article-hero' />
        <p className="date">31. Mai 2025</p>

        <h1 className='article-header'>Robo-nõustajad: kas tasub usaldada automatiseeritud investeerimist?</h1>

        {/* Mis on robo-nõustaja + Eesti turul */}
<div className='article-section'>
  <p><strong>Robo-nõustaja on automatiseeritud investeerimisplatvorm,</strong> mis loob sinu profiili alusel hajutatud portfelli ning haldab seda sinu eest. Tavaliselt esitatakse kasutajale küsimusi riskitaluvuse, eesmärkide ja investeerimishorisondi kohta ning selle info põhjal soovitatakse sobiv varade jaotus.</p>
      <p>
    Enne automatiseeritud investeerimise alustamist tasub põhjalikult <strong>uurida erinevaid platvorme</strong> ning nende <strong>tingimusi</strong>. Iga teenusepakkuja võib erineda nii <strong>tasude</strong>, <strong>investeerimisvõimaluste</strong> kui ka <strong>turvalisuse</strong> osas. Tutvu kindlasti <strong>tasustruktuuriga</strong> ja <strong>investeerimisstrateegiatega</strong>, mida platvorm kasutab. Samuti on oluline seada <strong>isiklikud eesmärgid</strong> – kas soovid säästa pensioniks, koguda raha konkreetseks projektiks või lihtsalt kasvatada oma vara pika aja jooksul. Ilma selge sihita on keeruline hinnata, kas valitud strateegia töötab sinu kasuks.
  </p>
  
<div className="app">
  <h3><FontAwesomeIcon icon={faCircle} className="circle green" /> Robo-nõustaja plussid</h3>
  <p>
    <strong>Taskukohasus:</strong> Madalad teenustasud võrreldes traditsiooniliste finantsnõustajatega.<br />
    <strong>Ligipääsetavus:</strong> Sobib hästi algajale – pole vaja finantsturge sügavuti mõista.<br />
    <strong>Automaatika:</strong> Aitab hoida distsipliini, investeerib regulaarselt ja hajutatult.<br />
    <strong>Objektiivsus:</strong> Puudub inimlik kallutatus või emotsioonidel põhinev otsustamine.
  </p>
</div>

<div className="app">
  <h3><FontAwesomeIcon icon={faCircle} className="circle" /> Miinused ja riskid</h3>
  <p>
    <strong>Isikupärastamise puudumine:</strong> Algoritmid ei pruugi arvestada kõiki erijuhtumeid või eluolukordi.<br />
    <strong>Liigne sõltuvus tehnoloogiast:</strong> Veateated, tarkvaravead või süsteemirikete risk.<br />
    <strong>Piiratud investeerimisvalikud:</strong> Mõned platvormid pakuvad ainult piiratud arvul fonde või strateegiaid.
  </p>
</div>
  <p>
    Alusta võimalusel <strong>väikeste summadega</strong>, et testida platvormi <strong>usaldusväärsust</strong> ja <strong>kasutajamugavust</strong>. Jälgi, kas teenus toimib sujuvalt, kas <strong>aruandlus on arusaadav</strong> ja kas <strong>investeeringute liikumine vastab sinu ootustele</strong>. Pea meeles, et isegi kõige arenenumad algoritmid ei suuda tururiske täielikult kõrvaldada – <strong>hinnakõikumised</strong> ja <strong>majanduslikud ebakindlused</strong> on alati osa investeerimisest. Oluline on olla <strong>teadlik</strong>, mitte tegutseda pimesi, ja hoida enda teadmised ajakohased, et teha targemaid finantsotsuseid ka automatiseeritud süsteemide abil.
  </p>
</div>


<div className='article-section'>
  <h1 className='article-header'>Kus kasutada Roboinvestoreid?</h1>

  <div className="app">
    <h3><FontAwesomeIcon icon={faBuilding} className="circle" /> LHV Kasvukonto</h3>
    <p>Automaatne investeerimine valitud fondidesse. Kasvukonto ei ole klassikaline robo-nõustaja, kuid pakub sarnast funktsionaalsust algajale investorile. LHV on üks tuntumaid ja usaldusväärsemaid Eesti panganduse ja investeerimise pakkujaid.</p>
  </div>

  <div className="app">
    <h3><FontAwesomeIcon icon={faCoins} className="icon" /> Mintos</h3>
    <p>Mintos Invest & Access on üks juhtivaid Euroopa peer-to-peer laenuplatvorme, mis kasutab automatiseeritud investeerimisstrateegiaid ja algoritme rahapaigutuseks.</p>
  </div>

  <div className="app">
    <h3><FontAwesomeIcon icon={faHome} className="icon" /> Estateguru</h3>
    <p>Estateguru Auto Invest võimaldab automaatselt investeerida kinnisvaralaenudesse, kasutades platvormi seatud eelistusi ja riskiprofiili.</p>
  </div>

  <div className="app">
    <h3><FontAwesomeIcon icon={faChartLine} className="icon" /> Betterment</h3>
    <p>USA-st pärit Betterment on üks kuulsamaid robo-nõustajaid maailmas, mis pakub täielikult automatiseeritud investeerimist koos personaalse riskihaldusstrateegiaga.</p>
  </div>

  <div className="app">
    <h3><FontAwesomeIcon icon={faWallet} className="icon" /> Wealthfront</h3>
    <p>Wealthfront on samuti USA robo-nõustaja, tuntud oma lihtsa kasutajaliidese ja laia investeerimisstrateegiate valiku poolest, mis sobib nii algajatele kui edasijõudnutele.</p>
  </div>
</div>



        {/* Kokkuvõte */}
        <div className='article-section'>
          <h1 className='article-header'>Kokkuvõte</h1>
          <p>
            Robo-nõustajad Eestis ja maailmas muutuvad järjest populaarsemaks. Nende suurimad eelised on madalad kulud, automatiseeritus ja kättesaadavus. Kuid <strong>täielik usaldus ei tähenda pimesi investeerimist</strong> – investor peab siiski mõistma, kuidas süsteem töötab ja millised on võimalikud riskid. Olles teadlik ja järjepidev, võib robo-nõustaja olla väärtuslik tööriist teel finantseesmärkideni.
          </p>
        </div>
      </div>
    </>
  );
}

export default RoboAdvisorsEstonia;
