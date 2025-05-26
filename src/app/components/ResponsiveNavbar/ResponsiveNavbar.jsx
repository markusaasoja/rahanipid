'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './ResponsiveNavbar.css';

export default function ResponsiveNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calculatorsDropdownOpen, setCalculatorsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCalculatorsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when window resizes to desktop size
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (calculatorsDropdownOpen) setCalculatorsDropdownOpen(false);
  };

  const toggleCalculatorsDropdown = (e) => {
    e.preventDefault();
    setCalculatorsDropdownOpen(!calculatorsDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/">
            <img src="/assets/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger-icon ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        {/* Navigation links */}
        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link href="/" className="navbar-link">Avaleht</Link>
          </li>
          <li className="navbar-item">
            <Link href="/planeerija" className="navbar-link">Planeerija</Link>
          </li>
          <li className="navbar-item">
            <Link href="/investeerimine" className="navbar-link">Investeerimine</Link>
          </li>

          {/* Calculators dropdown */}
          <li className="navbar-item dropdown" ref={dropdownRef}>
            <a href="#" 
               className={`navbar-link dropdown-toggle ${calculatorsDropdownOpen ? 'active' : ''}`} 
               onClick={toggleCalculatorsDropdown}>
              Kalkulaatorid
              <svg className="dropdown-arrow" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </a>
            <ul className={`dropdown-menu ${calculatorsDropdownOpen ? 'show' : ''}`}>
              <li className="dropdown-item">
                <Link href="/liitintress" className="dropdown-link">Liitintress</Link>
              </li>
              <li className="dropdown-item">
                <Link href="/kodulaen" className="dropdown-link">Kodulaen</Link>
              </li>
              <li className="dropdown-item">
                <Link href="/investeerimiskalkulaator" className="dropdown-link">Investeering</Link>
              </li>
              <li className="dropdown-item">
                <Link href="/laenukalkulaator" className="dropdown-link">Laen</Link>
              </li>
            </ul>
          </li>

          <li className="navbar-item">
            <Link href="/artiklid" className="navbar-link">Artiklid</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
