import React from 'react'
import '../Articles/Articles.css';
import '../InvestArticle/InvestArticle.css';
// Removed import of article from '../../assets/article.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt, faPiggyBank, faChartLine, faUniversity, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

function Estonia() {
  return (
    <>
      <div className='article-content'>
        {/* Use the public folder path here */}
        <img src="/assets/article.jpg" alt="Article" className='article-hero' />
        <p className="date">10. Mai 2025</p>

        <h1 className='article-header'>Kuidas alustada investeerimist Eestis</h1>

        <div className='article-section'>
          <p>Üha rohkem eestlasi on hakanud huvi tundma investeerimise vastu. Kui varem peeti investeerimist vaid rikaste ja finantsgurude tegevusalaks, siis nüüd on see kättesaadav igaühele – olenemata vanusest, sissetulekust või haridustasemest. Eestis on loodud soodne keskkond alustavale investorile: madalad kulud, kasutajasõbralikud platvormid ning rohkesti tasuta teadmisi ja koolitusi. Aga kuidas ikkagi alustada?</p>
          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Määra oma eesmärgid ja ajahorisont</h2>
          <p><strong>Enne esimese investeeringu tegemist mõtle läbi, miks sa üldse investeerida soovid.</strong> Kas kogud raha pensioniks, oma esimese kodu sissemakseks või soovid lihtsalt sääste kasvatada? Sinu eesmärk määrab ära, kui riskantsed või stabiilsed peaksid sinu investeeringud olema.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Haridu ennast</h2>
          <p><strong>Investori suurim vara ei ole raha, vaid teadmised.</strong> Eestis pakuvad mitmed platvormid nagu Tuleva, LHV, SEB, Swedbank, EstateGuru ja RahaFoorum tasuta artikleid, veebiseminare ja e-kursusi. Alustada tasub baasasjadest: Mis on aktsiad, fondid ja võlakirjad? Kuidas toimib riskide hajutamine? Mis on liitintressi jõud?</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Vali sobiv investeerimisplatvorm</h2>
          <p><strong>Tänapäeval saad investeerida kas või nutitelefonist.</strong> Eestis on populaarsed: LHV Investor – sobilik aktsiatesse ja fondidesse investeerimiseks; Tuleva – lihtne võimalus koguda pensioniks passiivsete indeksfondide kaudu; Bondora ja EstateGuru – pakuvad võimalust investeerida laenudesse ja kinnisvarasse; Swedbank ja SEB – sobivad neile, kes eelistavad kõiki teenuseid ühes pangas.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Alusta väikestest summadest</h2>
          <p><strong>Pole vaja oodata, kuni kogud tuhandeid eurosid.</strong> Investeerimist võib alustada kas või 10 euroga kuus, näiteks regulaarse investeerimisplaaniga. Oluline on järjepidevus, mitte summa suurus.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Hajuta riske</h2>
          <p><strong>Ära pane kogu raha ühte aktsiasse või ühte laenuprojekti.</strong> Hajutamine tähendab raha jaotamist erinevate varaklasside, ettevõtete ja piirkondade vahel. Nii on võimalik vähendada riski ja kaitsta end turukõikumiste eest.</p>

          <h2><FontAwesomeIcon icon={faCircle} className="circle" /> Ole kannatlik ja ära karda turukõikumisi</h2>
          <p><strong>Investeerimine ei ole kiirtee rikkuseni.</strong> Turud liiguvad üles-alla ja aeg-ajalt võib portfell ajutiselt miinusesse minna. Edukad investorid ei lase end paanikast mõjutada, vaid jätkavad oma plaani järgi.</p>
        </div>

        <div className='article-section'>
          <h1 className='article-header'>Kus alustada?</h1>
          <div className="app">
            <h3><FontAwesomeIcon icon={faPiggyBank} className="icon" /> Broker / Kasvukonto</h3>
            <p>LHV pakub lihtsat ligipääsu aktsiatele ja ETF-idele. <strong>Kasvukonto</strong> sobib algajale, kuna võimaldab investeerida automaatselt väikeste summadega. Toetab Balti turgusid ja on täielikult eesti keeles.</p>
          </div>

          <div className="app">
            <h3><FontAwesomeIcon icon={faUniversity} className="icon" />Swedbank Investeerimine</h3>
            <p>Swedbanki kaudu saab investeerida fondidesse ja aktsiatesse. Sobib neile, kes soovivad lihtsat ja turvalist lahendust olemasoleva pangakonto kõrvale.</p>
          </div>

          <div className="app">
            <h3><FontAwesomeIcon icon={faMobileAlt} className="icon" />Wise Assets</h3>
            <p>Wise pakub võimalust investeerida globaalsetesse indeksfondidesse. Fookuses on madalad kulud ja pikaajaline kasv. Sobib passiivseks investeerimiseks.</p>
          </div>

          <div className="app">
            <h3><FontAwesomeIcon icon={faChartLine} className="icon" />Estateguru</h3>
            <p>Kinnisvarapõhine investeerimisplatvorm, mis võimaldab alustada alates 50 eurost. Võimalus teenida kõrgemat tootlust, kuid kaasneb ka suurem risk.</p>
          </div>

          <div className="app">
            <h3><FontAwesomeIcon icon={faGlobeEurope} className="icon" />Lightyear</h3>
            <p>Kasutajasõbralik äpp, mille kaudu saab investeerida rahvusvahelistesse aktsiatesse ja ETF-idesse. Sobib nii algajale kui edasijõudnule. Osaliselt arendatud Eestis.</p>
          </div>
        </div>

        <div className='article-section'>
          <h1 className='article-header'>Kokkuvõtteks</h1>
          <p>
            Kokkuvõttes on investeerimine üks tõhusamaid viise oma rahalist tulevikku kindlustada. Alustamine ei tähenda tingimata keeruliste finantsinstrumentide tundmist, vaid lihtsalt teadlikke otsuseid, regulaarsust ja valmisolekut õppida. <strong>Ära jää ootama "õiget hetke" – alusta juba täna ja tee esimene samm oma rahalise vabaduse suunas.</strong>
          </p>
        </div>
      </div>
    </>
  )
}

export default Estonia;
