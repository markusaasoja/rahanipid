import React from 'react';
import '../Articles/Articles.css';
import '../InvestArticle/InvestArticle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function KindlustusValik() {
  return (
    <>
      <div className='article-content'>
        <img src="/assets/insurance.jpg" alt="Kindlustus" className='article-hero' />
        <p className="date">28. Mai 2025</p>

        <h1 className='article-header'>Kuidas valida sobiv kindlustuspakett?</h1>

        <div className='article-section'>
          <p>Kindlustus pakub rahalist kaitset ootamatute riskide vastu ning aitab maandada võimalikke kahjusid. Õige kindlustuspaketi valimine võib aga olla keeruline, sest valikuid on palju ning igaühe vajadused on erinevad.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Määra oma vajadused ja riskid</h2>
          <p>Enne kindlustuslepingu sõlmimist mõtle hoolikalt läbi, milliseid riske soovid katta. Kas vajad autot, kodu, tervist, elu või reisikindlustust? Või hoopis kõike seda korraga? Riskide teadmine aitab valida just sulle sobiva paketi.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Võrdle erinevaid kindlustuspakette</h2>
          <p>Turul on palju erinevaid kindlustuspakkumisi, mis võivad kattuda, kuid sisaldada ka erinevaid tingimusi ja piiranguid. Loe hoolikalt lepingutingimusi, kindlustuskaitse ulatust ja välditavaid erandeid.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Mõista omavastutuse mõistet</h2>
          <p>Omavastutus tähendab summat, mida pead kahjujuhtumi korral ise kinni maksma. Kõrgem omavastutus võib vähendada kindlustusmakseid, kuid tõstab sinu riskipositsiooni kahjujuhtumi korral. Leia tasakaal vastavalt oma riskitaluvusele.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Arvesta oma eelarvega</h2>
          <p>Kindlustusmakseid tuleks valida nii, et need oleksid sinu igakuise eelarvega kooskõlas. Ära vali odavaimat paketti ainult hinna pärast – tähtis on ka kaitse ulatus ja tingimused.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Küsige nõu spetsialistilt</h2>
          <p>Kui kindlustustingimused tunduvad keerulised, ära karda pöörduda kindlustusmaakleri või nõustaja poole. Nad aitavad sul valikuid paremini mõista ja sobivaima lahenduse leida.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Kontrolli, kas kindlustus katab kõik olulised riskid</h2>
          <p>Loe läbi, milliseid juhtumeid kindlustus katab ja milliseid mitte. Näiteks võib kodukindlustuses olla eraldi kaitse vee- või tulekahju vastu, kuid mitte kõiki looduskatastroofe. Kui oled kindel, milliseid riske tahad katta, saad valida vastava paketi.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Vaata üle oma kindlustus regulaarselt</h2>
          <p>Elu muutub ja koos sellega ka vajadused. Kontrolli oma kindlustust vähemalt kord aastas, et veenduda, kas pakett on ikka piisav ja vajadusel kohanda seda.</p>
        </div>

        <div className='article-section'>
          <h1 className='article-header'>Kokkuvõtteks</h1>
          <p>Õige kindlustuspaketi valimine nõuab aega ja põhjalikku kaalumist. <strong>Pane paika oma riskid, võrdle pakkumisi, arvesta oma eelarvega ja ära karda küsida abi.</strong> Nii saad tagada endale ja oma perele turvalisuse ja meelerahu igaks elujuhtumiks.</p>
        </div>
      </div>
    </>
  );
}

export default KindlustusValik;
