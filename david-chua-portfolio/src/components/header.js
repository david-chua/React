import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <Link to="/" className="Logo">
        <span></span>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/react-projects">React</Link>
        <Link to="/other-projects"> Other Stacks</Link>
        <Link to="/contacts"> Contact Me </Link>
      </nav>
    </header>

  )
}

export default Header;
