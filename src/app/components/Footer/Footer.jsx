import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Navigatsioon</h3>
          <ul>
            <li><a href="/">Avaleht</a></li>
            <li><a href="/investeerimine">Investeerimine</a></li>
            <li><a href="/artiklid">Artiklid</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Kontakt</h3>
          <ul>
            <li><a href="mailto:aasojamarkus@gmail.ee">aasojamarkus@gmail.ee</a></li>
            <li><a href="tel:+37255555555">+372 5696 4946 </a></li>
            <li><a href="https://markusaasoja.ee" target="_blank" rel="noopener noreferrer">markusaasoja.ee</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Markus Aasoja. Kõik õigused kaitstud.</p>
      </div>
    </footer>
  );
};

export default Footer;