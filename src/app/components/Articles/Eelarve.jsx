import React from 'react';
import './Articles.css';
import '../InvestArticle/InvestArticle.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faMobileAlt, faPiggyBank, faChartLine, faUniversity, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';


function Eelarve() {
  return (
    <>
      <div className="article-content">
        {/* Changed here to use public/assets/article2.jpg */}
        <img src="/assets/article4.jpg" className="article-hero" alt="Artikli taust" />
        <p className="date">10. Mai 2025</p>
        <div className="article-section">
          <h1 className="article-header">Kuidas koostada isiklikku eelarvet?</h1>
          <p><strong>Enne investeerimist on oluline oma rahaasjad kontrolli alla saada.</strong> Isiklik eelarve aitab sul mõista, kuhu su raha kulub, ja loob aluse säästmiseks ning investeerimiseks.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Kaardista oma sissetulekud ja kulud</h2>
          <p><strong>Kirjuta üles kõik oma sissetulekud (palk, toetused, lisaallikad)</strong> ning kuised püsikulud (üüri- või laenumaksed, kommunaalid, toit, transport). Kasuta selleks Excelit, Google Sheetsi või spetsiaalseid äppe nagu Monefy või YNAB (You Need a Budget).</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Sea kulukategooriad</h2>
          <p>Jaga oma kulud kategooriatesse: elamiskulud, toit, transport, meelelahutus, säästud ja muud. See aitab sul näha, kus saaksid kulusid vähendada ja rohkem säästa.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Määra säästueesmärk ja investeerimisvõimekus</h2>
          <p><strong>Peale kulude jaotamist selgub, kui palju saad igakuiselt kõrvale panna.</strong> Soovitatav on alustada 10–20% säästmisega oma sissetulekust. Kui säästud on olemas, saab selle osa suunata investeerimiseks.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Jälgi ja kohanda regulaarselt</h2>
          <p>Eelarve koostamine ei ole ühekordne tegevus. Iga kuu tuleks eelarvet uuendada ja analüüsida, kas püsid eesmärkides või on vaja midagi muuta. <strong>Regulaarne jälgimine aitab luua harjumust ja vältida ülekulutamist.</strong></p>
          
          <div className="article-box">
            <h3><FontAwesomeIcon icon={faPiggyBank} className="icon" /> Näpunäide:</h3>
            <p><strong>Kasuta reeglit 50/30/20</strong>: 50% hädavajalikeks kuludeks, 30% soovideks ja 20% säästmiseks või investeerimiseks.</p>
          </div>
        </div>
        <div className="article-section">
          <h1 className="article-header">Kokkuvõtteks</h1>
          <p>
            Kokkuvõttes on eelarve koostamine tähtis samm oma rahalise vabaduse saavutamiseks. See aitab sul paremini mõista, kuhu su raha kulub, ning võimaldab sul teha teadlikke otsuseid oma raha haldamiseks. <strong>Regulaarne eelarve jälgimine aitab sul hoida oma rahalised eesmärgid kontrolli all ja saavutada tasakaalu säästude ning igapäevaste kulutuste vahel.</strong> Alusta täna ja tee esimene samm oma finantsvabaduse poole!
          </p>
        </div>
      </div>
    </>
  );
}

export default Eelarve;
