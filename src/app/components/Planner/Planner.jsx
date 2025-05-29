'use client';


import { useState } from "react";
import "./Planner.css";
import Footer from "../Footer/Footer";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";

const FinancialQuestionnaire = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    age: "",
    employmentStatus: "",
    income: "",
    savings: "",
    debt: [],
    debtAmount: "",
    financialGoals: [],
    otherGoal: "",
    riskTolerance: "",
    knowledgeLevel: ""
  });
  const [showRoadmap, setShowRoadmap] = useState(false);

  const handleSingleChoice = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleMultiChoice = (field, value) => {
    const currentValues = formData[field];
    if (currentValues.includes(value)) {
      setFormData({
        ...formData,
        [field]: currentValues.filter(item => item !== value)
      });
    } else {
      setFormData({ ...formData, [field]: [...currentValues, value] });
    }
  };

  const handleTextInput = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {
    setShowRoadmap(true);
  };

  const resetForm = () => {
    setFormData({
      age: "",
      employmentStatus: "",
      income: "",
      savings: "",
      debt: [],
      debtAmount: "",
      financialGoals: [],
      otherGoal: "",
      riskTolerance: "",
      knowledgeLevel: ""
    });
    setStep(0);
    setShowRoadmap(false);
  };

  const questions = [
    // Age Question (1)
    <div key="age" className="question-section">
      <h3 className="question-title">Vanus</h3>
      <div className="options-container1">
        {["18-25", "26-35", "36-45", "46-55", "56+"].map(option => (
          <div key={option} className="option">
            <input
              type="radio"
              id={`age-${option}`}
              name="age"
              checked={formData.age === option}
              onChange={() => handleSingleChoice("age", option)}
            />
            <label htmlFor={`age-${option}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>,

    // Employment Status (2)
    <div key="employment" className="question-section">
      <h3 className="question-title">Tööhõive staatus</h3>
      <div className="options-container1">
        {[
          "Töötaja", 
          "Ettevõtja/Vabakutseline", 
          "Õpilane/Üliõpilane", 
          "Töötu", 
          "Pensionär"
        ].map(option => (
          <div key={option} className="option">
            <input
              type="radio"
              id={`employment-${option}`}
              name="employment"
              checked={formData.employmentStatus === option}
              onChange={() => handleSingleChoice("employmentStatus", option)}
            />
            <label htmlFor={`employment-${option}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>,

    // Income (3)
    <div key="income" className="question-section">
      <h3 className="question-title">Kuu brutopalk</h3>
      <div className="options-container1">
        {[
          "Alla 1000€", 
          "1000-2000€", 
          "2001-3000€", 
          "Üle 3000€"
        ].map(option => (
          <div key={option} className="option">
            <input
              type="radio"
              id={`income-${option}`}
              name="income"
              checked={formData.income === option}
              onChange={() => handleSingleChoice("income", option)}
            />
            <label htmlFor={`income-${option}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>,

    // Savings (4)
    <div key="savings" className="question-section">
      <h3 className="question-title">Olemasolevad säästud</h3>
      <div className="options-container1">
        {[
          "0€", 
          "1-1000€", 
          "1001-5000€", 
          "Üle 5000€"
        ].map(option => (
          <div key={option} className="option">
            <input
              type="radio"
              id={`savings-${option}`}
              name="savings"
              checked={formData.savings === option}
              onChange={() => handleSingleChoice("savings", option)}
            />
            <label htmlFor={`savings-${option}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>,

    // Debt (5)
    <div key="debt" className="question-section">
      <h3 className="question-title">Olemasolevad kohustused (vali kõik sobivad)</h3>
      <div className="options-container1">
        {[
          "Puuduvad", 
          "Tarbimislaenud", 
          "Krediitkaardi võlgnevus", 
          "Õppelaen", 
          "Kodulaen"
        ].map(option => (
          <div key={option} className="option">
            <input
              type="checkbox"
              id={`debt-${option}`}
              name="debt"
              checked={formData.debt.includes(option)}
              onChange={() => handleMultiChoice("debt", option)}
            />
            <label htmlFor={`debt-${option}`}>{option}</label>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <label htmlFor="debtAmount" className="input-label">Võlgnevuste kogusumma (valikuline)</label>
        <input
          type="text"
          id="debtAmount"
          placeholder="nt 15000€"
          value={formData.debtAmount}
          onChange={(e) => handleTextInput("debtAmount", e.target.value)}
        />
      </div>
    </div>,

    // Financial Goals (6)
    <div key="goals" className="question-section">
      <h3 className="question-title">Finantseesmärgid (vali kõik sobivad)</h3>
      <div className="options-container1">
        {[
          "Hädaolukorra fondi loomine", 
          "Võlgade tagasimaksmine", 
          "Sissemakse kogumine kodu ostuks", 
          "Pensioniks säästmine", 
          "Investeerimine", 
          "Säästmine konkreetse ostu jaoks (nt auto, reisimine)"
        ].map(option => (
          <div key={option} className="option">
            <input
              type="checkbox"
              id={`goal-${option}`}
              name="goals"
              checked={formData.financialGoals.includes(option)}
              onChange={() => handleMultiChoice("financialGoals", option)}
            />
            <label htmlFor={`goal-${option}`}>{option}</label>
          </div>
        ))}
        <div className="option">
          <input
            type="checkbox"
            id="goal-other"
            name="goals"
            checked={formData.financialGoals.includes("Muu")}
            onChange={() => handleMultiChoice("financialGoals", "Muu")}
          />
          <label htmlFor="goal-other">Muu</label>
        </div>
        {formData.financialGoals.includes("Muu") && (
          <input
            type="text"
            className="mt-4"
            placeholder="Täpsusta oma eesmärk"
            value={formData.otherGoal}
            onChange={(e) => handleTextInput("otherGoal", e.target.value)}
          />
        )}
      </div>
    </div>,

    // Risk Tolerance (7) (only shown if investing is selected, otherwise skip)
    formData.financialGoals.includes("Investeerimine") ? (
      <div key="risk" className="question-section">
        <h3 className="question-title">Riskitaluvus investeerimisel</h3>
        <div className="options-container1">
          {[
            "Konservatiivne (madal risk, madalam tootlus)", 
            "Mõõdukas (keskmine risk, keskmine tootlus)", 
            "Agressiivne (kõrge risk, potentsiaalselt kõrgem tootlus)"
          ].map(option => (
            <div key={option} className="option">
              <input
                type="radio"
                id={`risk-${option}`}
                name="risk"
                checked={formData.riskTolerance === option}
                onChange={() => handleSingleChoice("riskTolerance", option)}
              />
              <label htmlFor={`risk-${option}`}>{option}</label>
            </div>
          ))}
        </div>
      </div>
    ) : null,

    // Financial Knowledge Level (8)
    <div key="knowledge" className="question-section">
      <h3 className="question-title">Finantsalased teadmised (valikuline)</h3>
      <div className="options-container1">
        {[
          "Algaja", 
          "Kesktase", 
          "Edasijõudnud"
        ].map(option => (
          <div key={option} className="option">
            <input
              type="radio"
              id={`knowledge-${option}`}
              name="knowledge"
              checked={formData.knowledgeLevel === option}
              onChange={() => handleSingleChoice("knowledgeLevel", option)}
            />
            <label htmlFor={`knowledge-${option}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  ];

  // Define fixed total number of steps
  const TOTAL_STEPS = 8;
  
  // Calculate current step for display (max at 8)
  const displayStep = Math.min(step + 1, TOTAL_STEPS);
  
  // Calculate progress percentage (max 100%)
  const progressPercentage = Math.min(Math.round((displayStep / TOTAL_STEPS) * 100), 100);

  // Generate roadmap based on form data
  const generateRoadmap = () => {
    let roadmap = [];
    
    // Step 1: Emergency Fund (Almost always first priority)
    if (formData.financialGoals.includes("Hädaolukorra fondi loomine") || formData.savings === "0€" || formData.savings === "1-1000€") {
      roadmap.push({
        title: "Hädaolukorra fondi loomine",
        priority: 1,
        description: "Koguge 3-6 kuu elamiskulude jagu sääste kergesti ligipääsetavasse fondi.",
        steps: [
          "Arvutage oma igakuised põhikulud",
          "Avage eraldi hoiukonto hädaolukorra fondi jaoks",
          "Seadke igakuine automaatne ülekanne sellele kontole"
        ],
        resources: [<a href="/10-nouannet-kuidas-saasta">10 nutikat nõuannet, kuidas säästa raha igapäevaelus</a>, <a href="/eelarve-koostamine">Kuidas koostada isiklikku eelarvet?</a>]
      });
    }

    // Step 2: High-interest Debt (if applicable)
    if (formData.debt.includes("Tarbimislaenud") || formData.debt.includes("Krediitkaardi võlgnevus")) {
      roadmap.push({
        title: "Kõrge intressiga võlgade tagasimaksmine",
        priority: formData.savings === "0€" ? 1 : 2,
        description: "Keskenduge kõigepealt kõrge intressiga võlgade tagasimaksmisele.",
        steps: [
          "Pange oma võlad kirja intressimäärade järjekorras",
          "Kasutage laviini või lumepalli meetodit võlgade tasumiseks",
          "Kaaluge võimalusel madalama intressiga refinantseerimist"
        ],
        resources: [<a href="/eelarve-koostamine">Eelarve koostamise juhend algajale</a>, "Refinantseerimise võimalused"]
      });
    }

    // Add investment steps based on goals and risk tolerance
    if (formData.financialGoals.includes("Investeerimine")) {
      let investmentStrategy = "";
      if (formData.riskTolerance === "Konservatiivne (madal risk, madalam tootlus)") {
        investmentStrategy = "võlakirjad, kindlustatud hoiused ja madala riskiga indeksfondid";
      } else if (formData.riskTolerance === "Mõõdukas (keskmine risk, keskmine tootlus)") {
        investmentStrategy = "tasakaalustatud portfell aktsiatest ja võlakirjadest";
      } else {
        investmentStrategy = "aktsiafondid, üksikaktsiad ja potentsiaalselt alternatiivsed investeeringud";
      }
      
      roadmap.push({
        title: "Investeerimisplaani loomine",
        priority: 3,
        description: `Looge oma ${formData.riskTolerance.split(" ")[0].toLowerCase()} riskiprofiiliga sobiv investeerimisplaan.`,
        steps: [
          "Tutvu investeerimise põhitõdedega",
          `Kaaluge ${investmentStrategy}`,
          "Mitmekesistage oma portfelli",
          "Püsige pikaajaliselt oma valitud strateegias"
        ],
        resources: [<a href="/kuidas-alustada-eestis">Kuidas alustada investeerimist Eestis</a>, <a href="/kuidas-tootab-liitintress">Kuidas töötab liitintress ja miks see on investorite salarelv?</a>]
      });
    }

    // Housing related goals
    if (formData.financialGoals.includes("Sissemakse kogumine kodu ostuks")) {
      roadmap.push({
        title: "Koduostu sissemakse kogumine",
        priority: formData.debt.includes("Tarbimislaenud") || formData.debt.includes("Krediitkaardi võlgnevus") ? 4 : 3,
        description: "Planeerige süsteemselt kodu ostu sissemakse kogumist.",
        steps: [
          "Uurige kohaliku kinnisvaraturu hindasid",
          "Määrake soovitud sissemakse suurus (tavaliselt 15-20% kodu hinnast)",
          "Arvutage, kui palju kuus säästa tuleb",
          "Kaaluge riiklikke toetusprogramme esmakordsetele koduostjatele"
        ],
        resources: [<a href="/eelarve-koostamine">Kuidas koostada isiklikku eelarvet?</a>]
      });
    }

    // Retirement planning
    if (formData.financialGoals.includes("Pensioniks säästmine")) {
      roadmap.push({
        title: "Pensioniks säästmine",
        priority: 4,
        description: "Planeerige oma pensioni pikaajalise strateegiaga.",
        steps: [
          "Kontrollige oma praeguseid pensionifonde",
          "Kaaluge täiendavaid pensioniinvesteeringuid",
          "Arvutage vajalik pensionisumma soovitud elustandardi säilitamiseks",
          "Koostage pikaajaline pensionistrateegia"
        ],
        resources: [<a href="https://www.sotsiaalkindlustusamet.ee/pension-ja-seotud-huvitised/pensioniks-valmistumine/pensionikalkulaator">Pensionikalkulaator</a>, <a href="/10-nouannet-kuidas-saasta">10 nutikat nõuannet, kuidas säästa raha igapäevaelus</a>]
      });
    }

    // Specific purchase saving
    if (formData.financialGoals.includes("Säästmine konkreetse ostu jaoks (nt auto, reisimine)")) {
      roadmap.push({
        title: "Säästmine konkreetse eesmärgi jaoks",
        priority: 5,
        description: "Looge plaan spetsiifilise finantseesmärgi saavutamiseks.",
        steps: [
          "Määrake täpne summa, mida vajate",
          "Seadke ajaline eesmärk",
          "Arvutage vajalik igakuine säästusumma",
          "Avage eraldi konto selle konkreetse eesmärgi jaoks"
        ],
        resources: [<a href="/10-nouannet-kuidas-saasta">10 nutikat nõuannet, kuidas säästa raha igapäevaelus</a>, <a href="/eelarve-koostamine">Kuidas koostada isiklikku eelarvet?</a>]
      });
    }

    // Custom goal if specified
    if (formData.financialGoals.includes("Muu") && formData.otherGoal) {
      roadmap.push({
        title: `Eesmärk: ${formData.otherGoal}`,
        priority: 5,
        description: "Personaalne finantsplaan teie eesmärgi saavutamiseks.",
        steps: [
          "Määrake konkreetsed verstapostid",
          "Koostage ajakava",
          "Seadke realistlikud sammud",
          "Jälgige regulaarselt edenemist"
        ],
        resources: [<a href="/eelarve-koostamine">Kuidas koostada isiklikku eelarvet?</a>, "Personaalne finantsplaneerimine"]
      });
    }

    // Sort roadmap by priority
    return roadmap.sort((a, b) => a.priority - b.priority);
  };

  const personalizedRoadmap = generateRoadmap();

  return (
    <>
    <h1 className="article-header">Koosta enda finantsplaan</h1>
    <div className="container1">
      {!showRoadmap ? (
        <>
          <div className="header">
            <h2>Personaalne Finantsplaan</h2>
            <p>Täida küsimustik ja saad personaalse finantsteekonnaplaani.</p>
          </div>
          
          <div className="progress-container1">
            <div className="progress-info">
              <span className="progress-step">
                Samm {displayStep} / {TOTAL_STEPS}
              </span>
              <span className="progress-percentage">
                {progressPercentage}% tehtud
              </span>
            </div>
            <div className="progress-bar-bg">
              <div 
                className="progress-bar" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          
          {questions[step]}
          
          <div className="buttons-container1">
            {step > 0 ? (
              <button 
                onClick={prevStep}
                className="button button-back"
              >
                Tagasi
              </button>
            ) : (
              <div></div>
            )}
            
            {step < questions.length - 1 ? (
              <button 
                onClick={nextStep}
                className="button button-next"
              >
                Järgmine
              </button>
            ) : (
              <button 
                onClick={submitForm}
                className="button button-submit"
              >
                Loo minu plaan
              </button>
            )}
          </div>
        </>
      ) : (
        <div>
          <div className="profile-header">
            <h2>Sinu personaalne finantsteekond</h2>
            <button 
              onClick={resetForm}
              className="button button-reset"
            >
              Alusta uuesti
            </button>
          </div>
          
          <div className="profile-summary">
            <h3>Sinu profiili kokkuvõte:</h3>
            <ul className="profile-list">
              <li><span className="profile-label">Vanus:</span> {formData.age}</li>
              <li><span className="profile-label">Tööhõive:</span> {formData.employmentStatus}</li>
              <li><span className="profile-label">Sissetulek:</span> {formData.income}</li>
              <li><span className="profile-label">Säästud:</span> {formData.savings}</li>
              <li><span className="profile-label">Peamised eesmärgid:</span> {formData.financialGoals.join(", ")}</li>
            </ul>
          </div>
          
          {personalizedRoadmap.length > 0 ? (
            <div className="roadmap-container1">
              {personalizedRoadmap.map((item, index) => (
                <div key={index} className="roadmap-item">
                  <div className="roadmap-header">
                    <div className="roadmap-number">
                      {index + 1}
                    </div>
                    <h3 className="roadmap-title">{item.title}</h3>
                  </div>
                  
                  <p className="roadmap-description">{item.description}</p>
                  
                  <div className="roadmap-section">
                    <h4 className="roadmap-section-title">Tegevused:</h4>
                    <ul className="roadmap-list">
                      {item.steps.map((step, stepIndex) => (
                        <li key={stepIndex}>{step}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="roadmap-section">
                    <h4 className="roadmap-section-title">Kasulikud ressursid:</h4>
                    <ul className="roadmap-list">
                      {item.resources.map((resource, resourceIndex) => (
                        <li key={resourceIndex}>
                          <a href="#" className="resource-link">{resource}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="alert-warning">
              <p className="alert-text">
                Kahjuks ei saanud me piisavalt infot, et luua personaalne plaan. Palun täida rohkem küsimusi.
              </p>
            </div>
          )}
          
          <div className="next-steps">
            <h3>Järgmised sammud:</h3>
            <p>
              Kõige parem viis finantsplaani järgimiseks on:
            </p>
            <ol className="numbered-list">
              <li>Koosta detailne eelarve</li>
              <li>Sea automaatsed ülekanded säästudeks</li>
              <li>Vaata igakuiselt üle oma edusammud</li>
              <li>Kohandata plaani vastavalt muutunud olukorrale</li>
            </ol>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default FinancialQuestionnaire;