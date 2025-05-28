import React from 'react'
import '../Articles/Articles.css';
import '../InvestArticle/InvestArticle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt, faPiggyBank, faChartLine, faUniversity, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

function CompoundWorks() {
  return (
    <>
      <div className='article-content'>
        <img src="/assets/growing.jpg" alt="Article" className='article-hero' />
        <p className="date">28. Mai 2025</p>

        <h1 className='article-header'>Kuidas töötab liitintress ja miks see on investorite salarelv?</h1>

        <div className='article-section'>
          <p>Liitintress on üks mõjuvõimsamaid nähtusi investeerimismaailmas. Seda on kutsutud ka "maailma kaheksandaks imeks" ja põhjusega. Kui tavainimene suudab raha koguda teatud summani, siis liitintress võimaldab rahal <strong>kasvada iseenda pealt</strong>. Mida varem alustad, seda suurem on mõju – sest aja jooksul hakkab sinu raha teenima kasumit ja <strong>kasum omakorda teenib uut kasumit</strong>.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Mis on liitintress?</h2>
          <p><strong>Liitintress tähendab seda, et saad tulu mitte ainult oma esialgselt investeeringult, vaid ka juba teenitud intressidelt.</strong> Näiteks kui investeerid 1000 eurot ja teenid 10% tootlust aastas, siis esimesel aastal teenid 100 eurot. Teisel aastal teenid intressi juba 1100 euro pealt, mis teeb 110 eurot. Nii kasvab investeering eksponentsiaalselt.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Aeg on liitintressi parim sõber</h2>
          <p><strong>Mida varem alustad, seda rohkem aega on su rahal kasvada.</strong> Kui investeerid iga kuu 50 eurot 30 aasta jooksul 7% tootlusega, koguneb sul ligi 60 000 eurot omapanusest, aga kokku üle 120 000 euro. See tähendab, et ligi pooled sinu rahast on tekkinud liitintressi mõjul.</p>

        <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Kuidas arvutada liitintressi?</h2>
          <p>
            <strong>Liitintressi valem on:</strong> A = P (1 + r/n)<sup>nt</sup>, kus:<br />
            P on alginvesteering<br />
            r on aastane intressimäär kümnendmurdudes<br />
            n on intressiperioodide arv aastas<br />
            t on aastate arv<br />
            Seda saab lihtsalt arvutada meie <strong><a className='link2' href='/liitintress'>liitintressi kalkulaatoriga</a></strong>.
          </p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Reinvesteerimine on võti</h2>
          <p><strong>Et liitintress tööle hakkaks, peab teenitud tulu investeerima uuesti.</strong> See tähendab, et sa ei võta iga-aastast tootlust välja, vaid jätad selle kasvama. Mida kauem sa seda teed, seda suurem on lõpuks kasum.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Kuidas liitintress aitab finantsvabadusele kaasa?</h2>
          <p><strong>Liitintress loob finantsvõimenduse aja jooksul.</strong> Kui suudad kasvatada portfelli piisavalt suureks, võib selle tootlus hakata katma igapäevaseid kulusid. See ongi paljude jaoks tee finantsvabaduseni – raha töötab sinu eest ka siis, kui sina ei tööta.</p>
        </div>

        <div className='article-section'>
          <h1 className='article-header'>Kus liitintressi kõige paremini rakendada?</h1>

          <div className="app">
            <h3><FontAwesomeIcon icon={faPiggyBank} className="icon" /> Kasvukonto</h3>
            <p>LHV Kasvukonto võimaldab regulaarselt väikeste summadega investeerida fondidesse, mis aja jooksul kasvatavad tootlust. Tänu automaatsele investeerimisele sobib see hästi liitintressi efektiga alustamiseks.</p>
          </div>

          <div className="app">
            <h3><FontAwesomeIcon icon={faUniversity} className="icon" /> Pensionifondid</h3>
            <p>Pensioni kogumine on klassikaline näide liitintressi kasutamisest – investeerid iga kuu ja tootlus koguneb aastate jooksul. Tuleva ja Swedbank pakuvad indeksipõhiseid fonde, kus kulud on madalad ja kasv potentsiaalne.</p>
          </div>

          <div className="app">
            <h3><FontAwesomeIcon icon={faMobileAlt} className="icon" /> Wise / Lightyear</h3>
            <p>Need platvormid võimaldavad investeerida indeksfondidesse ja aktsiatesse. Regulaarselt investeerides ja tulu reinvesteerides saavutad maksimaalse kasvu liitintressi toel.</p>
          </div>

          <div className="app">
            <h3><FontAwesomeIcon icon={faChartLine} className="icon" /> ETF-id</h3>
            <p>Indeksfondid ehk ETF-id sobivad suurepäraselt liitintressi rakendamiseks. Need jälgivad turu keskmist tootlust ja võimaldavad hajutada riske.</p>
          </div>

          <div className="app">
            <h3><FontAwesomeIcon icon={faGlobeEurope} className="icon" /> Automaatsed investeerimisplaanid</h3>
            <p>Platvormid nagu LHV Kasvukonto või Tuleva võimaldavad seadistada automaatse igakuise investeerimise. See aitab distsipliini hoida ja liitintressi maksimaalselt ära kasutada.</p>
          </div>
        </div>

        <div className='article-section'>
          <h1 className='article-header'>Kokkuvõtteks</h1>
          <p>
            Liitintress ei pruugi esmapilgul tunduda midagi imelist, kuid pika aja jooksul võib see muuta väikese investeeringu märkimisväärseks summaks. <strong>Võti on aeg, järjepidevus ja reinvesteerimine.</strong> Alusta juba täna, kasvõi väikeste summadega – ja lase aja jooksul oma rahal enda eest tööle hakata.
          </p>
        </div>
      </div>
    </>
  )
}

export default CompoundWorks;