'use client'


import { useState, useEffect } from 'react';
import '../Compound/Compound.css';
import ResponsiveNavbar from '../ResponsiveNavbar/ResponsiveNavbar';
import Footer from '../Footer/Footer';

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [downPayment, setDownPayment] = useState(20000);
  const [interestRate, setInterestRate] = useState(3);
  const [loanPeriod, setLoanPeriod] = useState(30);
  const [paymentType, setPaymentType] = useState('annuiteet');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    calculateMortgage();
  }, [loanAmount, downPayment, interestRate, loanPeriod, paymentType]);

  const calculateMortgage = () => {
    const principal = Math.max(0, loanAmount - downPayment);
    const r = interestRate / 100 / 12; // kuuintress
    const n = loanPeriod * 12; // kuude arv
    let M = 0;

    if (paymentType === 'annuiteet') {
      M = principal * r / (1 - Math.pow(1 + r, -n));
      setMonthlyPayment(M);

      const totalPaid = M * n;
      setTotalInterest(totalPaid - principal);

      const timelineData = [];
      let balance = principal;
      for (let month = 1; month <= n; month++) {
        const interestPayment = balance * r;
        const principalPayment = M - interestPayment;
        balance -= principalPayment;

        if (month % 12 === 0) {
          timelineData.push({
            year: month / 12,
            balance: balance > 0 ? balance : 0,
            interestPaid: interestPayment * 12
          });
        }
      }
      setTimeline(timelineData);
    } else {
      const principalPayment = principal / n;
      let balance = principal;
      const timelineData = [];
      let totalInterestPaid = 0;

      for (let month = 1; month <= n; month++) {
        const interestPayment = balance * r;
        const totalPayment = principalPayment + interestPayment;
        totalInterestPaid += interestPayment;
        balance -= principalPayment;

        if (month % 12 === 0) {
          timelineData.push({
            year: month / 12,
            balance: balance > 0 ? balance : 0,
            interestPaid: totalInterestPaid
          });
        }
      }
      setMonthlyPayment(principalPayment + (principal * r));
      setTotalInterest(totalInterestPaid);
      setTimeline(timelineData);
    }
  };

  const handleLoanAmountChange = (e) => {
    const value = e.target.value === "" ? "" : Math.max(0, Number(e.target.value)); // Väldi miinuseid ja tühja
    setLoanAmount(value);
  };

  const handleDownPaymentChange = (e) => {
    const value = e.target.value === "" ? "" : Math.min(Number(e.target.value), loanAmount); // Sissemakse ei saa ületada laenusummat
    setDownPayment(value);
  };

  const handleInterestRateChange = (e) => {
    const value = e.target.value === "" ? "" : Number(e.target.value);
    setInterestRate(value);
  };

  const handleLoanPeriodChange = (e) => {
    const value = e.target.value === "" ? "" : Math.min(Number(e.target.value), 40); // Piirame perioodi maksimaalselt 40 aastani
    setLoanPeriod(value);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('et-EE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2
    }).format(value);
  };

  return (
    <>
      <div className="calculator-container">
        <h1 className='article-header'>Kodulaenu Kalkulaator</h1>

        <div className="calculator-grid">
          <div className="calculator-card">
            <h2 className="calculator-subtitle">Sisendid</h2>

            <div className="form-group">
              <label className="form-label">Kogu laenusumma (€)</label>
              <input
                type="number"
                value={loanAmount}
                onChange={handleLoanAmountChange}
                className="form-input"
                min="0"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Sissemakse (€)</label>
              <input
                type="number"
                value={downPayment}
                onChange={handleDownPaymentChange}
                className="form-input"
                min="0"
                max={loanAmount}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Aastane intressimäär (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={handleInterestRateChange}
                className="form-input"
                min="0"
                step="0.1"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Periood (aastates)</label>
              <input
                type="number"
                value={loanPeriod}
                onChange={handleLoanPeriodChange}
                className="form-input"
                min="1"
                max="40"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Tagasimakse tüüp</label>
              <select
                value={paymentType}
                onChange={(e) => setPaymentType(e.target.value)}
                className="form-select"
              >
                <option value="annuiteet">Annuiteetmakse</option>
                <option value="võrdne">Võrdsete osade põhine</option>
              </select>
            </div>
          </div>

          <div className="calculator-card">
            <h2 className="calculator-subtitle">Tulemused</h2>
            <div className="results-box">
              <p className="small-text">Igakuine makse:</p>
              <p className="large-value">{formatCurrency(monthlyPayment)}</p>
              <p className="small-text margin-top">Koguintress:</p>
              <p className="medium-value">{formatCurrency(totalInterest)}</p>
            </div>
            <div className="summary-box">
              <p className="summary-text">
                Sissemakse: <span className="bold-text">{formatCurrency(downPayment)}</span>
                <br />
                Laenu suurus peale sissemakset: <span className="bold-text">{formatCurrency(loanAmount - downPayment)}</span>
                <br />
                Periood: <span className="bold-text">{loanPeriod} aastat</span>
                <br />
                Tagasimakse tüüp: <span className="bold-text">{paymentType === 'annuiteet' ? 'Annuiteetmakse' : 'Võrdsete osade põhine'}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="timeline-section">
          <h2 className="calculator-subtitle">Ajagraafik (iga aasta tagant)</h2>
          <table className="timeline-table">
            <thead>
              <tr>
                <th className="table-header">Aasta</th>
                <th className="table-header">Jääk</th>
                <th className="table-header">Makstud intress</th>
              </tr>
            </thead>
            <tbody>
              {timeline.map((item, index) => (
                <tr key={index}>
                  <td className="table-cell">{item.year}</td>
                  <td className="table-cell blue-text">{formatCurrency(item.balance)}</td>
                  <td className="table-cell green-text">{formatCurrency(item.interestPaid)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
