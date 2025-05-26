import React from 'react';
import './Articles.css';
import '../InvestArticle/InvestArticle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPowerOff } from '@fortawesome/free-solid-svg-icons';


function Balance() {
  return (
    <>
      <div className="article-content">
        {/* Pilt otse public/assets kaustast */}
        <img src="/assets/article3.jpg" className="article-hero" alt="Artikli taust" />
        <p className="date">12. Mai 2025</p>
        <div className="article-section">
          <h1 className="article-header">Kuidas leida tasakaal töö ja isikliku elu vahel?</h1>
          <p><strong>Kiire elutempo, pidev infohulk ja kõrged ootused võivad viia läbipõlemiseni.</strong> Töö ja eraelu tasakaalu leidmine on oluline nii vaimse kui ka füüsilise tervise säilitamiseks. Siin on mõned tõhusad nõuanded, mis aitavad sul paremini piiritleda tööelu ja isiklikku aega.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Sea selged töö- ja puhkeaja piirid</h2>
          <p>Kindlaks määratud tööaeg ja sellest kinnipidamine aitavad vältida ületöötamist. <strong>Kui tööpäev lõpeb, siis lülita töömeilid ja -teavitused välja.</strong></p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Planeeri isiklik aeg sama tõsiselt kui tööülesandeid</h2>
          <p>Kalendrisse kirja pandud puhkehetked, pere- või hobiajad on sama tähtsad kui koosolekud. <strong>Austa oma isiklikku aega.</strong></p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Väldi mitut asja korraga tegemist</h2>
          <p>Multitasking viib sageli madalama produktiivsuseni. <strong>Fokusseeri ühele ülesandele korraga ja väldi töötoimingu tegemist puhkeajal.</strong></p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Hoia tervislikku unerütmi</h2>
          <p>Piisav uni taastab nii keha kui vaimu. <strong>Väldi hilisõhtuseid tööülesandeid, mis võivad und segada.</strong></p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Sea prioriteedid paika</h2>
          <p>Sa ei saa teha kõike korraga. <strong>Õpi ütlema “ei” ülesannetele, mis ei ole hädavajalikud või võtavad liigselt energiat.</strong></p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Väärtusta sotsiaalseid suhteid</h2>
          <p>Kohtumised sõprade ja perega loovad tasakaalu ja tugevdavad vaimset heaolu. <strong>Ära lükka suhteid edasi töö tõttu.</strong></p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Kasuta töölt lahkumist päriselt lahkumiseks</h2>
          <p>Kui lahkud töölt, jäta ka vaimselt tööasjad sinna. <strong>Lõõgastu, liigu ja tee midagi, mis sulle rõõmu pakub.</strong></p>

          <div className="article-box">
            <h3><FontAwesomeIcon icon={faPowerOff} className="icon" /> Näpunäide:</h3>
            <p><strong>Väldi ületöötamist, kasutades tehnikat „pomodoro“:</strong> tööta 25 minutit keskendunult ja tee 5-minutiline paus. See suurendab tõhusust ja vähendab väsimust.</p>
          </div>
        </div>

        <div className="article-section">
          <h1 className="article-header">Kokkuvõtteks</h1>
          <p>
            Töö ja eraelu tasakaal ei teki iseenesest – see tuleb teadlikult kujundada. Mida selgemalt suudad piiritleda tööaega ja isiklikku elu, seda suurem on sinu rahulolu, produktiivsus ja heaolu. <strong>Õppides end väärtustama ja puhkamist lubama, ehitad üles kestlikuma elurütmi.</strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default Balance;
