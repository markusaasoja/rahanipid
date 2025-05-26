'use client'


import { useState, useEffect } from 'react';
import '../Compound/Compound.css';
import ResponsiveNavbar from '../ResponsiveNavbar/ResponsiveNavbar';
import Footer from '../Footer/Footer';

export default function InvestmentCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(5000);  // Algväärtus
  const [years, setYears] = useState(30);  // Algväärtus
  const [rate, setRate] = useState(6);  // Algväärtus
  const [compoundFrequency, setCompoundFrequency] = useState('annually');
  const [recurringInvestment, setRecurringInvestment] = useState(100);  // Algväärtus
  const [recurringFrequency, setRecurringFrequency] = useState('monthly');
  const [futureValue, setFutureValue] = useState(0);

  useEffect(() => {
    calculateInvestment();
  }, [
    initialInvestment,
    years,
    rate,
    compoundFrequency,
    recurringInvestment,
    recurringFrequency
  ]);

  const handleTimeChange = (e) => {
    const value = e.target.value === "" ? "" : Math.min(Number(e.target.value), 40); // Piirame perioodi maksimaalselt 40 aastani
    setYears(value);
  };

  const calculateInvestment = () => {
    // Kui sisend on tühi või null, ei tee arvutust
    if (
      initialInvestment == null || 
      years == null || 
      rate == null || 
      recurringInvestment == null
    ) {
      setFutureValue(0);
      return;
    }

    const r = rate / 100;
    const compoundPerYear = compoundFrequency === 'monthly' ? 12 : 1;
    const recurringPerYear = recurringFrequency === 'monthly' ? 12 : 1;

    let total = initialInvestment * Math.pow(1 + r / compoundPerYear, compoundPerYear * years);

    for (let t = 1; t <= years * recurringPerYear; t++) {
      const timeLeft = years - t / recurringPerYear;
      total += recurringInvestment * Math.pow(1 + r / compoundPerYear, compoundPerYear * timeLeft);
    }

    setFutureValue(total);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('et-EE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    setter(value === '' ? null : Number(value)); // Kui tühi, siis määrab null
  };

  return (
    <>
      <div className="calculator-container">
        <h1 className='article-header'>Investeerimise kalkulaator</h1>

        <div className="calculator-grid">
          <div className="calculator-card">
            <h2 className="calculator-subtitle">Sisendid</h2>

            <div className="form-group">
              <label className="form-label">Alginvesteering (€)</label>
              <input
                type="number"
                value={initialInvestment === null ? '' : initialInvestment}
                onChange={(e) => handleInputChange(e, setInitialInvestment)}
                className="form-input"
                min="0"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Investeeringu kestus (aastates)</label>
              <input
                type="number"
                value={years === null ? '' : years}
                onChange={handleTimeChange}  // Use the handleTimeChange function here
                className="form-input"
                min="1"
                max="40"  // Cap the maximum number of years at 40
              />
            </div>

            <div className="form-group">
              <label className="form-label">Eeldatav aastane tootlus (%)</label>
              <input
                type="number"
                value={rate === null ? '' : rate}
                onChange={(e) => handleInputChange(e, setRate)}
                className="form-input"
                min="0"
                step="0.1"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Liitintressi sagedus</label>
              <select
                value={compoundFrequency}
                onChange={(e) => setCompoundFrequency(e.target.value)}
                className="form-select"
              >
                <option value="annually">Aastaselt</option>
                <option value="monthly">Kuuliselt</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Korduv investeering (€)</label>
              <input
                type="number"
                value={recurringInvestment === null ? '' : recurringInvestment}
                onChange={(e) => handleInputChange(e, setRecurringInvestment)}
                className="form-input"
                min="0"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Investeeringu sagedus</label>
              <div className="toggle-buttons">
                <button
                  type="button"
                  className={`toggle-button ${recurringFrequency === 'monthly' ? 'active' : ''}`}
                  onClick={() => setRecurringFrequency('monthly')}
                >
                  Kuuliselt
                </button>
                <button
                  type="button"
                  className={`toggle-button ${recurringFrequency === 'annually' ? 'active' : ''}`}
                  onClick={() => setRecurringFrequency('annually')}
                >
                  Aastaselt
                </button>
              </div>
            </div>
          </div>

          <div className="calculator-card">
            <h2 className="calculator-subtitle">Tulemus</h2>
            <div className="results-box">
              <p className="small-text">Tulevane investeeringu väärtus:</p>
              <p className="large-value">{formatCurrency(futureValue)}</p>
            </div>
            <div className="summary-box">
              <p className="summary-text">
                Alginvesteering: <span className="bold-text">{formatCurrency(initialInvestment)}</span>
                <br />
                Korduv investeering: <span className="bold-text">{formatCurrency(recurringInvestment)} / {recurringFrequency === 'monthly' ? 'kuu' : 'aasta'}</span>
                <br />
                Tootlus: <span className="bold-text">{rate}% aastas</span>
                <br />
                Aastad: <span className="bold-text">{years}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
