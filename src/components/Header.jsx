import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          Food Project
        </Link>
        <ul className='right  hide-on-med-and-down'>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contanct</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Header;
