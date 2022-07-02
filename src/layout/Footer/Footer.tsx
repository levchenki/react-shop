import React from 'react'
import './Footer.module.scss'

const Footer: React.FC = () => (
  <footer>
    <div className='container'>
      {`${new Date().getFullYear()} Copyright Text`}
      <a href='https://github.com/levchenki/react-shop'>Repository</a>
    </div>
  </footer>
)

export default Footer