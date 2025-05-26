import React from 'react';
import './Articles.css';
import '../InvestArticle/InvestArticle.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPiggyBank } from '@fortawesome/free-solid-svg-icons';


function Tips() {
  return (
    <>
      <div className="article-content">
        {/* Muudetud src pildi laadimiseks public/assets kaustast */}
        <img src="/assets/article2.jpg" className="article-hero" alt="Artikli taust" />
        <p className="date">10. Mai 2025</p>
        <div className="article-section">
          <h1 className="article-header">10 nutikat nõuannet, kuidas säästa raha igapäevaelus</h1>
          <p><strong>Raha säästmine ei tähenda loobumist, vaid targemaid valikuid.</strong> Siin on kümme praktilist nippi, mis aitavad sul igapäevaselt kulusid vähendada ilma elukvaliteeti ohverdamata.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Tee ostunimekiri ja pea sellest kinni</h2>
          <p>Spontaansed ostud on üks suurimaid raharaiskajaid. <strong>Planeeri oma poekäigud ette</strong> ja väldi emotsioonil põhinevaid oste.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Väldi toiduraiskamist</h2>
          <p>Kasuta enne uue ostmist ära kodus olemasolev toit. <strong>Valmista toitu korraga mitmeks päevaks</strong> ja külmuta ülejäägid.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Võrdle hindu ja kasuta sooduspakkumisi</h2>
          <p><strong>Ära osta kohe esimesest kohast.</strong> Kasuta hinnavõrdlussaite või äppe ning jälgi kampaaniaid.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Vähenda impulssoste veebis</h2>
          <p>Lisa toode ostukorvi ja oota 24 tundi enne ostu sooritamist. <strong>Kui toode pole enam vajalik, väldi kulutust.</strong></p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Kasuta ühistransporti või liiguta jalgsi</h2>
          <p><strong>Auto pidamine on kallis.</strong> Kui võimalik, käi tööle jalgsi, rattaga või kasuta ühistransporti.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Tühista kasutud tellimused ja liikmelisused</h2>
          <p>Kontrolli, milliseid teenuseid sa tegelikult kasutad. <strong>Tühista need, mida pole viimase kuu jooksul avanud.</strong></p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Õpi ise valmistama kohvi ja toitu</h2>
          <p>Kohvikust kohvi ostmine iga päev võib aastas tähendada sadu eurosid. <strong>Valmista hommikukohv ja lõunasöök ise kaasa.</strong></p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Osta kasutatud esemeid</h2>
          <p>Riided, mööbel ja elektroonika ei pea alati olema uued. <strong>Vaata järelturult – see on keskkonna- ja rahakotisõbralikum.</strong></p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Seadista automaatne säästmine</h2>
          <p><strong>Pane igakuiselt automaatselt osa palgast kõrvale.</strong> Nii ei teki kiusatust kogu raha ära kulutada.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Tee väljakutseid – näiteks „mitte midagi osta nädal”</h2>
          <p>Pane ennast proovile ja <strong>väldi mitme päeva jooksul kõikide mittevajalike kulutuste tegemist.</strong></p>

          <div className="article-box">
            <h3><FontAwesomeIcon icon={faPiggyBank} className="icon" /> Boonusnipp:</h3>
            <p><strong>Pane säästetud raha kohe eraldi kontole,</strong> et seda ei kulutataks kogemata igapäevasteks ostudeks.</p>
          </div>
        </div>

        <div className="article-section">
          <h1 className="article-header">Kokkuvõtteks</h1>
          <p>
            Raha säästmine algab väikestest, kuid teadlikest otsustest. Kui pöörad tähelepanu oma igapäevastele harjumustele ja kulutustele, võid märgata märkimisväärseid muudatusi juba lühikese ajaga. Pole vaja loobuda mugavustest – piisab sellest, kui eelistad nutikamaid valikuid. Oluline on järjepidevus ja eesmärgipärasus. Iga säästetud euro on samm rahalise kindluse suunas.
          </p>
        </div>
      </div>
    </>
  );
}

export default Tips;
