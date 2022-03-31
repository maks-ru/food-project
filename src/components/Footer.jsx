import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='wrapper'>
        <div className='footer-copy'>
          © {new Date().getFullYear()} Copyright Text
        </div>
        <div className='footer-link'>
          <a href='https://github.com/maks-ru/food-project'>Repo</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
