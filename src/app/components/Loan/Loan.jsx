'use client'


import { useState, useEffect } from 'react';
import '../Compound/Compound.css';

export default function LoanCalculator() {
    
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
    calculateLoan();
  }, [principal, rate, time, compoundFrequency]);

  const calculateLoan = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(compoundFrequency);

    const amount = p * Math.pow(1 + r / n, n * t);
    setResult(amount);

    // Ajakava iga 0.5 aasta tagant (ehk iga 6 kuu)
    const newTimeline = [];
    const interval = 1;
    for (let current = 0; current <= t; current += interval) {
      const currentAmount = p * Math.pow(1 + r / n, n * current);
      newTimeline.push({
        period: current.toFixed(1), // nt 0.5, 1.0, 1.5 jne
        amount: currentAmount,
        interest: currentAmount - p
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

  const handleTimeChange = (e) => {
    const value = e.target.value === "" ? "" : Math.min(Number(e.target.value), 30); // Piirame perioodi maksimaalselt 30 aastani
    setTime(value);
  };

  return (
    <>
      <div className="calculator-container">
        <h1 className='article-header'>Laenu kalkulaator</h1>

        <div className="calculator-grid">
          <div className="calculator-card">
            <h2 className="calculator-subtitle">Sisendid</h2>

            <div className="form-group">
              <label className="form-label">Laenusumma (€)</label>
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
              <label className="form-label">Periood (aastates)</label>
              <input
                type="number"
                value={time}
                onChange={handleTimeChange} // Kasutame käsitsi muudatust
                className="form-input"
                min="0"
                step="0.5"
                max="30" // Kehtestame maksimumi
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
              <p className="small-text">Lõppsumma:</p>
              <p className="large-value">{formatCurrency(result)}</p>
              <p className="small-text margin-top">Koguintress:</p>
              <p className="medium-value">{formatCurrency(result - principal)}</p>
            </div>

            <div>
              <h3 className="calculator-subtitle-sm">Kokkuvõte</h3>
              <div className="summary-box">
                <p className="summary-text">
                  Laen summas <span className="bold-text">{formatCurrency(principal)}</span>{' '}
                  intressimääraga <span className="bold-text">{rate}%</span> arvestatuna{' '}
                  <span className="bold-text">{frequencies[compoundFrequency].toLowerCase()}</span>{' '}
                  perioodiga <span className="bold-text">{time} aastat</span> koguneb lõppsummani:
                </p>
                <p className="blue-bold-text">{formatCurrency(result)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-section">
          <h2 className="calculator-subtitle">Ajagraafik</h2>
          <table className="timeline-table">
            <thead>
              <tr>
                <th className="table-header">Periood (aastad)</th>
                <th className="table-header">Saldo</th>
                <th className="table-header">Intress</th>
              </tr>
            </thead>
            <tbody>
              {timeline.map((item, index) => (
                <tr key={index}>
                  <td className="table-cell">{item.period}</td>
                  <td className="table-cell blue-text">{formatCurrency(item.amount)}</td>
                  <td className="table-cell green-text">{formatCurrency(item.interest)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
