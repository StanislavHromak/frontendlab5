import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-placeholder.png';

function Header() {
  const [sloganText, setSloganText] = useState("");
  const fullSlogan = "Від Землі — до зірок!";
  const location = useLocation();

  const getHeaderClass = () => {
    if (location.pathname === '/projects') {
      return 'fixed-header';
    }
    if (location.pathname === '/contacts') {
      return 'relative-header';
    }
    return '';
  };

  useEffect(() => {
    let index = 0;
    setSloganText("");
    const typeWriter = setInterval(() => {
      index++;
      setSloganText(fullSlogan.slice(0, index));
      if (index === fullSlogan.length) {
        clearInterval(typeWriter);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, []);

  return (
    <header className={getHeaderClass()}>
      <div className="branding">
        <img src={logo} alt="Логотип RocketLaunch Tech" width="200" />
        <h1>RocketLaunch Tech</h1>
      </div>
      <h2 id="slogan" style={{ color: 'darkred', fontSize: '1.8em', fontWeight: 600, minHeight: '1.8em' }}>
        {sloganText}
      </h2>

      <nav>
        <ul>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/projects">Проєкти</Link></li>
          <li><Link to="/contacts">Зворотній зв’язок</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;