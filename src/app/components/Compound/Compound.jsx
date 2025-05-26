'use client'


import { useState, useEffect } from 'react';
import './Compound.css'; // Make sure to create this CSS file
import ResponsiveNavbar from '../ResponsiveNavbar/ResponsiveNavbar';
import Footer from '../Footer/Footer';

export default function Compound() {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(5);
  const [time, setTime] = useState(5);
  const [compoundFrequency, setCompoundFrequency] = useState(1);
  const [result, setResult] = useState(0);
  const [timeline, setTimeline] = useState([]);

  const frequencies = {
    1: "Aastas",
    2: "Poolaastas",
    4: "Kvartalis",
    12: "Kuus",
    365: "Päevas"
  };

  useEffect(() => {
    calculateInterest();
  }, [principal, rate, time, compoundFrequency]);

  const handleTimeChange = (e) => {
  const value = e.target.value === "" ? "" : Math.min(Number(e.target.value), 40); // Piirame perioodi maksimaalselt 40 aastani
  setTime(value);
};


  const calculateInterest = () => {
    // Valem: A = P(1 + r/n)^(nt)
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(compoundFrequency);
    
    const amount = p * Math.pow(1 + r/n, n*t);
    setResult(amount);
    
    // Ajatelje andmete genereerimine
    const newTimeline = [];
    for (let year = 0; year <= t; year++) {
      const yearAmount = p * Math.pow(1 + r/n, n*year);
      newTimeline.push({
        year,
        amount: yearAmount,
        interest: yearAmount - p
      });
    }
    setTimeline(newTimeline);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('et-EE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <>
    <div className="calculator-container">
      <h1 className='article-header'>Liitintressi Kalkulaator</h1>
      
      <div className="calculator-grid">
        <div className="calculator-card">
          <h2 className="calculator-subtitle">Sisendid</h2>
          
          <div className="form-group">
            <label className="form-label">Algkapital (€)</label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="form-input"
              min="0"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Aastane intressimäär (%)</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="form-input"
              min="0"
              step="0.01"
            />
          </div>
          
            <div className="form-group">
            <label className="form-label">Ajaperiood (aastates)</label>
            <input
                type="number"
                value={time}
                onChange={handleTimeChange}
                className="form-input"
                min="1"
                max="40"
            />
            </div>
          
          <div className="form-group">
            <label className="form-label">Intressiarvestuse sagedus</label>
            <select
              value={compoundFrequency}
              onChange={(e) => setCompoundFrequency(e.target.value)}
              className="form-select"
            >
              {Object.entries(frequencies).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="calculator-card">
          <h2 className="calculator-subtitle">Tulemused</h2>
          
          <div className="results-box">
            <p className="small-text">Tulevane väärtus:</p>
            <p className="large-value">{formatCurrency(result)}</p>
            <p className="small-text margin-top">Kogu teenitud intress:</p>
            <p className="medium-value">{formatCurrency(result - principal)}</p>
          </div>
          
          <div>
            <h3 className="calculator-subtitle-sm">Kokkuvõte</h3>
            <div className="summary-box">
              <p className="summary-text">
                Algne investeering summas <span className="bold-text">{formatCurrency(principal)}</span> 
                {' '}intressimääraga <span className="bold-text"> {rate}% </span> 
                arvestatuna <span className="bold-text"> {frequencies[compoundFrequency].toLowerCase()} </span> 
                perioodiga <span className="bold-text">{time} aastat</span> kasvab summani:
              </p>
              <p className="blue-bold-text">{formatCurrency(result)}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="timeline-section">
        <h2 className="calculator-subtitle">Kasvu ajakava</h2>
        <table className="timeline-table">
          <thead>
            <tr>
              <th className="table-header">Aasta</th>
              <th className="table-header">Saldo</th>
              <th className="table-header">Teenitud intress</th>
            </tr>
          </thead>
          <tbody>
            {timeline.map((item) => (
              <tr key={item.year}>
                <td className="table-cell">{item.year}</td>
                <td className="table-cell blue-text">{formatCurrency(item.amount)}</td>
                <td className="table-cell green-text">{formatCurrency(item.interest)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </>
  );
}