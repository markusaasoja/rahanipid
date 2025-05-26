import React from 'react'
import './InvestArticle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faBullseye, faWallet, faBalanceScale, faChartLine, faFileSignature, faCoins, faBookOpen } from '@fortawesome/free-solid-svg-icons';




function InvestArticle() {
  return (
    <>
    <div className='section'>
        <h1>Mis on investeerimine?</h1>
        <p>Investeerimine on protsess, mille käigus <b>paigutatakse raha või muid ressursse varadesse eesmärgiga kasvatada nende väärtust ajas</b>. Erinevalt säästmisest, kus raha hoitakse turvaliselt näiteks pangakontol, seisneb investeerimise mõte selles, et olemasolev raha „töötab“ sinu eest – see tähendab, et raha aitab sul teenida lisatulu või kasvatab oma väärtust pikema aja jooksul.
            <br></br><br></br>
            Investeerimist võib vaadelda kui teekonda:
            Lühiajaliselt võib investeeringute väärtus kõikuda,

            Kuid pikaajaliselt on investeerimine aidanud paljudel inimestel suurendada oma vara, saavutada rahalisi eesmärke ja kindlustada tulevikku.
        </p>
        <div className='info-box'>
            <h3><FontAwesomeIcon icon={faLightbulb} className='icon' /> Pane tähele!</h3>
            <p>Investeerimine ei ole mõeldud ainult finantsekspertidele ega suurte summadega alustajatele. Tänapäeval saab investeerimist alustada kasvõi paari euroga, tähtis on järjepidevus ja teadlikkus. Mida varem alustad, seda rohkem töötab aeg sinu kasuks – just aeg ja liitintress on investori parimad liitlased.</p>
        </div>
    </div>
        <div className='section'>
        <h1 className='article-header'>Investeerimise võimalused</h1>
        <p>Investeerimiseks on olemas mitmesuguseid võimalusi, mis erinevad oma riski, tootluse ja keerukuse poolest. Algaja investori jaoks on oluline mõista erinevaid varaklasse, et teha teadlikke ja eesmärgipõhiseid otsuseid. Allpool on ülevaade levinumatest investeerimisvõimalustest.</p>
        <br></br>
        <h2><FontAwesomeIcon icon={faCircle} className='circle'/>Aktsiad</h2>
        <p>Aktsiate ostmisel saad sa osa ettevõttest. Kui ettevõte kasvab ja teenib kasumit, võib kasvada ka sinu aktsiate väärtus. Lisaks maksavad paljud ettevõtted aktsionäridele dividende – osa oma kasumist. Aktsiatesse investeerimine on seotud suurema riskiga, kuid pikaajaliselt võib see pakkuda head tootlust.</p>
        <h2><FontAwesomeIcon icon={faCircle} className='circle'/>Investeerimisfondid </h2>
        <p>Fondid koguvad raha paljudelt investoritelt ja investeerivad selle edasi erinevatesse varadesse. Investeerimisfondi haldab professionaalne fondijuht, kes teeb otsuseid sinu eest. Indeksfondid järgivad kindlat turuindeksit (nt S&P 500 või OMXT) ning on kuluefektiivsed ja hajutatud lahendused. Need sobivad hästi algajatele.</p>
        <h2><FontAwesomeIcon icon={faCircle} className='circle'/>Võlakirjad</h2>
        <p>Võlakirjad on sisuliselt laenud, mida sa annad riigile või ettevõttele. Nad maksavad sulle intressi ja tagastavad tähtaja saabudes algse summa. Võrreldes aktsiatega on võlakirjad madalama riskiga, kuid ka tootlus võib olla väiksem.</p>
        <h2><FontAwesomeIcon icon={faCircle} className='circle'/>Kinnisvara</h2>
        <p>Kinnisvarasse investeerimine tähendab tavaliselt korteri, maja või äripinna ostmist eesmärgiga teenida üüritulu ja/või oodata vara väärtuse tõusu. Kinnisvara on pikaajaline ja suhteliselt stabiilne investeering, kuid nõuab suuremat algkapitali ja hooldust.</p>
        <h2><FontAwesomeIcon icon={faCircle} className='circle'/>Ühisrahastus</h2>
        <p>Ühisrahastusplatvormid võimaldavad inimestel ühiselt rahastada projekte, ettevõtteid või anda väikelaene. See võib pakkuda head tootlust, kuid riskid – näiteks laenusaaja maksevõimetus – on samuti suuremad. Soovitatav on alustada väikeste summadega ja valida usaldusväärseid platvorme.</p>
        <h2><FontAwesomeIcon icon={faCircle} className='circle'/>Kuld ja muud väärismetallid</h2>
        <p>Kuld on traditsiooniline „turvasadam“, kuhu investeeritakse ebakindlatel aegadel. See ei maksa intressi ega dividende, kuid säilitab sageli oma väärtuse inflatsiooni ja majanduskriiside korral.</p>
        <h2><FontAwesomeIcon icon={faCircle} className='circle'/>Krüptovaluutad</h2>
        <p>Krüptovaluutad, nagu Bitcoin ja Ethereum, on digitaalsed varad, mille väärtus põhineb turu nõudlusel ja pakkumisel. Need võivad pakkuda kõrget tootlust, kuid on väga kõikuvad ja spekulatiivsed. Krüptovaluutad sobivad ainult neile, kes mõistavad riske ja suudavad võimaliku kaotusega toime tulla.</p>
    </div>

<div className="section">
  <h1>Kuidas alustada investeerimist?</h1>

  <div className="step">
    <div>
      <h2><FontAwesomeIcon icon={faBullseye} className="step-icon" /> 1. Sea oma eesmärgid</h2>
      <p>Mõtle läbi, miks sa soovid investeerida – kas kogud pensioniks, soovid kasvatada sääste või kindlustada tulevikku. Selged eesmärgid aitavad sul valida sobiva investeerimisstrateegia ja ajahorisondi.</p>
    </div>
  </div>

  <div className="step">
    <div>
      <h2><FontAwesomeIcon icon={faWallet} className="step-icon" /> 2. Hinda oma rahalist olukorda</h2>
      <p>Veendu, et sul oleksid igapäevakulud kaetud, meelerahufond olemas ja võlad kontrolli all. Investeerida tuleks ainult seda raha, mida sul pole lähiajal vaja.</p>
    </div>
  </div>

  <div className="step">
    <div>
      <h2><FontAwesomeIcon icon={faBalanceScale} className="step-icon" /> 3. Mõista riske ja vali riskitase</h2>
      <p>Igal investeeringul on risk. Hinda, kui palju kõikumist suudad taluda ja kui kaua raha saad investeerida. Riskitaluvus määrab, kas eelistad stabiilseid või kasvupotentsiaaliga, aga volatiilsemaid varasid.</p>
    </div>
  </div>

  <div className="step">
    <div>
      <h2><FontAwesomeIcon icon={faChartLine} className="step-icon" /> 4. Vali sobiv investeerimisviis</h2>
      <p>Algajale sobivad hästi indeksfondid, investeerimisfondid või väikeste summadega ühisrahastus. Alusta lihtsamatest instrumentidest, kuni sul tekib rohkem teadmisi ja kogemusi.</p>
    </div>
  </div>

  <div className="step">
    <div>
      <h2><FontAwesomeIcon icon={faFileSignature} className="step-icon" /> 5. Ava investeerimiskonto</h2>
      <p>Vali sobiv pank või platvorm, näiteks LHV, Tuleva, Swedbank või Mintos. Kontrolli teenustasusid ja kasutajamugavust enne konto avamist.</p>
    </div>
  </div>

  <div className="step">
    <div>
      <h2><FontAwesomeIcon icon={faCoins} className="step-icon" /> 6. Alusta väikeste summadega</h2>
      <p>Esimene samm ei pea olema suur – ka 10 € kuus aitab alustada. Regulaarne investeerimine aitab vähendada turu kõikumiste mõju ja kasvatab vara ajas.</p>
    </div>
  </div>

  <div className="step">
    <div>
      <h2><FontAwesomeIcon icon={faBookOpen} className="step-icon" /> 7. Õpi pidevalt juurde</h2>
      <p>Uuri ja loe juurde investeerimise kohta. Investeerimisraamatud, podcastid ja koolitused aitavad sul teha teadlikumaid otsuseid ja vältida algajate vigu.</p>
    </div>
  </div>
</div>
<div className="section">
  <h1 className="article-header">Parimad investeerimisrakendused</h1>
  <p><strong>Eestis</strong> on mitmeid investeerimisrakendusi, mis pakuvad erinevaid võimalusi nii algajatele kui ka kogenud investoritele. Need platvormid võimaldavad mugavalt ja turvaliselt investeerida aktsiatesse, fondidesse, ühisrahastusse ning teistesse varaklassidesse otse oma nutiseadmest või arvutist.</p>
  <h2><FontAwesomeIcon icon={faCircle} className="circle" /> LHV</h2>
  <p>Eesti üks suurimaid panku, mis pakub investeerimiskontosid, fondide ostmist ja aktsiatega kauplemist. Väga hea kodumaine tugi ja kasutajaliides.</p>

  <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Tuleva</h2>
  <p>Lihtne ja kuluefektiivne lahendus, keskendudes peamiselt pensioni- ja indeksfondidesse investeerimisele.</p>

  <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Swedbank Investeerimiskonto</h2>
  <p>Pakub laia valikut fondidest ja aktsiatest. Kasutajasõbralik ja kindel valik.</p>

  <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Mintos</h2>
  <p>Euroopa suurim ühisrahastusplatvorm, mis võimaldab investeerida tarbimislaenudesse.</p>

  <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Bondora</h2>
  <p>Eesti päritolu platvorm, mis pakub automaatseid investeerimislahendusi ja Go & Grow funktsiooni algajatele.</p>
<p className='paragraph'><strong>Ülemaailmselt</strong> on palju erinevaid investeerimisrakendusi, mis pakuvad võimalusi nii algajatele kui ka kogenud investoritele. Need platvormid võimaldavad mugavalt ja turvaliselt investeerida aktsiatesse, fondidesse, ühisrahastusse ning teistesse varaklassidesse otse oma nutiseadmest või arvutist.</p>

<h2><FontAwesomeIcon icon={faCircle} className="circle" /> SoFi Active Investing</h2>
<p>Pakub nullkomisjoniga kauplemist, murdosakuid ning laia valikut finantsvahendeid lihtsaks hajutamiseks ja haldamiseks. Uutele kontodele on saadaval kuni $1,000 aktsiate soodustus.</p>

<h2><FontAwesomeIcon icon={faCircle} className="circle" /> Robinhood</h2>
<p>Populaarne platvorm USA turul, mis pakub $0 komisjonitasu aktsiate, optsioonide ja krüptovaluutadega kauplemisel ning võimaldab teha kohe sissemakseid.</p>

<h2><FontAwesomeIcon icon={faCircle} className="circle" /> E*TRADE</h2>
<p>Tugevad analüüsivahendid ja komisjonivabad tehingud aktsiatega (mõned lisatasud võivad kehtida). Sobib aktiivsele investorile.</p>

<h2><FontAwesomeIcon icon={faCircle} className="circle" /> Interactive Brokers</h2>
<p>Funktsiooniderohke platvorm aktiivsele kauplejale, madalad tehingutasud ja lai valik turge üle maailma.</p>

<h2><FontAwesomeIcon icon={faCircle} className="circle" /> Vanguard</h2>
<p>Tuntud indeksfondide ja madalate haldustasudega passiivse investeerimise platvorm.</p>

<h2><FontAwesomeIcon icon={faCircle} className="circle" /> Fidelity</h2>
<p>Sobib eriti algajatele, kes õpivad investeerimist. Pakkudes $0 komisjonitasu USA aktsiate ja ETFide ostmisel ning murdosakuid.</p>

<h2><FontAwesomeIcon icon={faCircle} className="circle" /> Webull</h2>
<p>Pakub täiustatud kauplemis- ja analüüsivahendeid mobiilseadmetele, komisjonivabalt.</p>

</div>

<div className="section">
  <h1 className="article-header">Levinumad investeerimisstrateegiad</h1>

  <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Osta ja hoia</h2>
  <p>Pikaajaline strateegia, kus investeeritakse kindlatesse varadesse ja neid hoitakse mitmeid aastaid.</p>

  <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Hajutamine</h2>
  <p>Raha jaotamine erinevate varade vahel, et vähendada riske – näiteks kombineerides aktsiaid, fonde ja kinnisvara.</p>

  <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Regulaarne investeerimine</h2>
  <p>Igakuiselt investeerimine aitab hajutada tururiske ja kasutab ära liitintressi mõju.</p>

  <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Väärtusinvesteerimine</h2>
  <p>Investeeritakse alahinnatud ettevõtetesse, mille väärtus võib tulevikus kasvada.</p>

  <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Kasvule suunatud investeerimine</h2>
  <p>Fookuses on ettevõtted, millel on kiire kasvupotentsiaal, isegi kui neil puudub hetkel kasum.</p>
</div>
<div className='section'>
  <h1>Kokkuvõtteks</h1>
  <p>
    <strong>Investeerimine</strong> on pikk ja õppimist nõudev protsess, mis aitab sul kasvatada oma vara ja saavutada <strong>rahalisi eesmärke</strong>. Oluline on alustada teadlikult, seada <strong>selged eesmärgid</strong> ning valida endale sobivad investeerimisvõimalused ja strateegiad.
  </p>
  <p>
    Soovitame kasutada meie <a href="/investeerimiskalkulaator" className="link2"><strong>investeerimiskalkulaatorit</strong></a>, mis aitab sul planeerida oma investeeringuid ja näha, kuidas sinu raha võiks aja jooksul kasvada. Samuti on hea vaadata üle <a href="/turuuuring" className="link2"><strong>turuuuringud</strong></a>, et saada parem ülevaade hetkeolukorrast ja investeerimismaailma trendidest.
  </p>
  <p>
    <strong>Järjepidevus</strong>, <strong>teadmised</strong> ja <strong>kannatlikkus</strong> on edu võtmeks investeerimisel. Alusta täna ja lase oma rahal töötada sinu tuleviku nimel!
  </p>
</div>
    </>
  )
}

export default InvestArticle