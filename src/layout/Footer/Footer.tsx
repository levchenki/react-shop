import React from 'react';
import './Footer.module.scss';

const Footer: React.FC = () => (
  <footer>
    <div className='container'>
      {`${new Date().getFullYear()} Copyright Text`}
      <a href='#'>Repository</a>
    </div>
  </footer>
);

export default Footer;