import React from 'react';
import '../Articles/Articles.css';
import '../InvestArticle/InvestArticle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faLeaf, faHeartPulse, faChartLine, faShoppingCart, faCircle } from '@fortawesome/free-solid-svg-icons'

function Sectors() {
  return (
    <>
      <div className='article-content'>
        <img src="/assets/sectors.jpg" alt="Article" className='article-hero' />
        <p className="date">2. Juuni 2025</p>

        <h1 className='article-header'>Sektorite analüüs: Kus peituvad parimad investeerimisvõimalused?</h1>

        <div className='article-section'>
        <p>
          Investeerimisvõimalused on pidevas muutumises ning sõltuvad paljuski makromajanduslikest tingimustest, regulatiivsest raamistikust, tehnoloogilisest arengust, ettevõtete uuendusvõimest ja üleilmsetest trendidest. Aastal 2025 on mitmeid sektoreid, mis pakuvad atraktiivseid võimalusi nii lühi- kui pikaajaliselt. Ent iga investeerimisotsuse puhul on oluline teha põhjalik analüüs ja hinnata konkreetseid ettevõtteid süvitsi, mitte lähtuda vaid üldisest sektori populaarsusest.
        </p>

         <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Makro- ja mikrokeskkonna analüüs</h2>
          <p><strong>Makro:</strong> Milline on globaalne ja kohalik majanduskasv? Inflatsioon, intressimäärad, geopoliitilised riskid. Need mõjutavad sektoreid erinevalt.</p>
          <p><strong>Mikro:</strong> Porteri viie jõu mudel (konkurents, uute tulijate oht, asendustoodete oht, ostjate ja tarnijate läbirääkimisjõud) aitab hinnata sektori atraktiivsust ja kasumlikkuse potentsiaali.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Tsükliline vs. kaitsev sektor</h2>
          <p><strong>Tsüklilised sektorid</strong> (nt tööstus, tarbija diskretsioonikaubad, finants) on tundlikumad majandustsükli suhtes. Need õitsevad majanduskasvu ajal, kuid kannatavad languse korral.</p>
          <p><strong>Kaitsevad sektorid</strong> (nt kommunaalteenused, esmatarbekaubad, tervishoid) on stabiilsemad ja pakuvad kaitset majanduslanguse vastu, kuid nende kasvupotentsiaal on piiratum.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Kasvu- vs. väärtusinvesteeringud</h2>
          <p><strong>Kasvusektorid</strong> (nt tehnoloogia, biotehnoloogia) pakuvad suurt kasvupotentsiaali, kuid on tihti kallilt hinnatud ja kõrgema riskiga.</p>
          <p><strong>Väärtussektorid</strong> (nt finants, energeetika) võivad olla alahinnatud ja pakkuda stabiilset tulu, kuid nende kasvupotentsiaal on tagasihoidlikum.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Regulatiivne keskkond ja valitsuse poliitikad</h2>
          <p>Uued regulatsioonid, toetused või maksud võivad sektori atraktiivsust oluliselt muuta.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Demograafilised trendid ja sotsiaalne käitumine</h2>
          <p>Rahvastiku vananemine, linnastumine, tarbijate eelistuste muutumine mõjutavad otseselt teatud sektoreid.</p>

        </div>
    <div className='article-section'>
      <h1 className='article-header'>Parimad sektoriinvesteeringute valdkonnad 2025</h1>

      <h2>
        <FontAwesomeIcon icon={faMicrochip} className="icon2" /> Tehnoloogia (eriti tehisintellekt (AI), küberturvalisus, pooljuhid)
      </h2>
      <p><strong>Miks atraktiivne?</strong> AI on revolutsiooniline tehnoloogia, mis muudab peaaegu iga tööstusharu. Nõudlus AI-le spetsialiseerunud tarkvara, riistvara ja teenuste järele on plahvatuslik. Küberturvalisus on pidevalt kasvav vajadus küberrünnakute sagenemise tõttu. Pooljuhid on kõigi kaasaegsete tehnoloogiate alus.</p>
      <p><strong>Riskid:</strong> Kõrged hindamised (eriti AI-s), regulatiivne ebakindlus, kiire innovatsioon ja konkurents.</p>
      <p><strong>Fookus:</strong></p>
      <ul>
        <li>AI infrastruktuur: Ettevõtted, mis pakuvad AI mudelite loomiseks ja käitamiseks vajalikku riistvara (GPU-d), tarkvara ja pilveteenuseid.</li>
        <li>AI rakendused: Ettevõtted, mis integreerivad AI-d oma toodetesse ja teenustesse erinevates sektorites (tervishoid, finants, tööstus).</li>
        <li>Küberturvalisus: Ettevõtted, mis pakuvad lahendusi andmete ja süsteemide kaitsmiseks kasvavate küberohtude eest.</li>
        <li>Pooljuhid: Uurida tasub nii kiibitootjaid kui ka kiibidisainereid ja seadmete tarnijaid.</li>
      </ul>

      <h2>
        <FontAwesomeIcon icon={faLeaf} className="icon2" /> Puhas energia ja jätkusuutlikkus (Renewable Energy & Sustainability)
      </h2>
      <p><strong>Miks atraktiivne?</strong> Globaalne üleminek puhtale energiale, kasvav keskkonnateadlikkus ja valitsuste toetus rohelisele majandusele loovad tohutu kasvupotentsiaali. Investeeringud taastuvenergiasse, elektrisõidukitesse, energiasalvestuslahendustesse ja ringmajandusse on pikaajalised megatrendid.</p>
      <p><strong>Riskid:</strong> Regulatiivsed muutused, toorainehinnad, intressimäärade tundlikkus (projektide finantseerimine), tehnoloogiline vananemine.</p>
      <p><strong>Fookus:</strong></p>
      <ul>
        <li>Taastuvenergia tootjad: Päikese-, tuule-, hüdroenergia ja geotermilised projektid.</li>
        <li>Elektrisõidukite (EV) ökosüsteem: EV tootjad, akutehnoloogia arendajad, laadimisinfrastruktuur.</li>
        <li>Energiasalvestus: Akupangad ja muud energiasalvestuslahendused.</li>
        <li>Vesinikutehnoloogia: Pikaajaline potentsiaal energia salvestamisel ja transportimisel.</li>
        <li>Veemajandus ja jäätmekäitlus: Kasvav vajadus ressursside efektiivsemaks kasutamiseks.</li>
      </ul>

      <h2>
        <FontAwesomeIcon icon={faHeartPulse} className="icon2" /> Tervishoid ja biotehnoloogia
      </h2>
      <p><strong>Miks atraktiivne?</strong> Rahvastiku vananemine, krooniliste haiguste levik ja pidev innovatsioon loovad stabiilse nõudluse. Biotehnoloogia pakub potentsiaali revolutsiooniliste ravimite ja teraapiate arendamisel.</p>
      <p><strong>Riskid:</strong> Pikk ja kallis arendusprotsess (eriti ravimite puhul), regulatiivne heakskiit, konkurents, intellektuaalomandi riskid.</p>
      <p><strong>Fookus:</strong></p>
      <ul>
        <li>Ravimifirmad: Erinevad terapeutilised valdkonnad (onkoloogia, autoimmuunhaigused, neuroloogia).</li>
        <li>Meditsiinitehnoloogia: Uuenduslikud seadmed ja diagnostikavahendid.</li>
        <li>Biotehnoloogia: Genoomika, geeniteraapia, personaalmeditsiin.</li>
        <li>Digitaalne tervishoid: Telemeditsiin, terviseandmete analüüs, AI rakendused tervishoius.</li>
      </ul>

      <h2>
        <FontAwesomeIcon icon={faChartLine} className="icon2" /> Finantsteenused (eriti finantstehnoloogia - FinTech)
      </h2>
      <p><strong>Miks atraktiivne?</strong> Finantsteenuste sektor on pidevas muutuses tänu tehnoloogiale ja uutele tarbijakäitumise harjumustele. FinTech lahendused pakuvad efektiivsust ja kättesaadavust.</p>
      <p><strong>Riskid:</strong> Regulatiivne surve, küberturvalisuse ohud, konkurents suurte ja väikeste tegijate vahel.</p>
      <p><strong>Fookus:</strong></p>
      <ul>
        <li>Digitaalsed pangad ja makseteenused: Platvormid, mis lihtsustavad finantstehinguid ja pakuvad uusi teenuseid.</li>
        <li>Plokiahel ja krüptovaluutad (infrastruktuur): Kuigi krüptovaluutad ise on volatiilsed, pakub plokiahela tehnoloogia potentsiaali finantsteenuste efektiivsuse parandamisel.</li>
        <li>RegTech: Regulatiivsele vastavusele keskenduvad tehnoloogilised lahendused.</li>
        <li>Varahaldusplatvormid: E-lahendused investeeringute haldamiseks.</li>
      </ul>

      <h2>
        <FontAwesomeIcon icon={faShoppingCart} className="icon2" /> Tarbija diskretsioonikaubad (teatud nišid)
      </h2>
      <p><strong>Miks atraktiivne?</strong> Kuigi üldine tarbija diskretsioonikaupade sektor on majandustsükli suhtes tundlik, on teatud nišid vastupidavamad või pakuvad unikaalseid kasvuvõimalusi.</p>
      <p><strong>Riskid:</strong> Inflatsioon, tarbijate ostujõu muutused, konkurents, trendide kiire muutumine.</p>
      <p><strong>Fookus:</strong></p>
      <ul>
        <li>E-kaubandus ja logistika: E-kaubanduse pikaajaline kasvutrend jätkub.</li>
        <li>Luksuskaubad: Tihti vastupidavamad majanduslangusele, kuna nende tarbijaskond on jõukam.</li>
        <li>Kogemuspõhised teenused: Reisimine, vaba aja veetmine, toitlustus (pärast pandeemiajärgset taastumist ja kui inflatsioonisurve leeveneb).</li>
        <li>Tervise- ja heaoluteenused: Kasvav nõudlus isikliku heaolu järele.</li>
      </ul>
    </div>


        <div className='article-section'>
          <h1 className='article-header'>Kokkuvõtteks</h1>
          <p>
            Aktsiate väärtuse hindamine ei põhine vaid ühest meetodist – parimad investorid kombineerivad nii kvantitatiivseid kui ka kvalitatiivseid meetodeid. <strong>Oluline on mõista, et aktsia hind turul ei ole alati võrdne ettevõtte tegeliku väärtusega.</strong> Kui suudad selle erinevuse tuvastada ja õigel ajal tegutseda, oled juba teel eduka investori suunas.
          </p>
        </div>
      </div>
    </>
  );
}

export default Sectors;
