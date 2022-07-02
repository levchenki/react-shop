import React from 'react'
import './Header.module.scss'

const Header: React.FC = () => (
  <header>
    <div className={'container'}>
      <a className={'header_name'} href='#!'>React Shop</a>
      <ul>
        <li>
          <a href='https://github.com/levchenki/react-shop'>Repository</a>
        </li>
      </ul>
    </div>
  </header>
)

export default Header