import React from 'react'
import './style.scss'

const Header = (): JSX.Element => {
  return (
    <div className="header-wrapper">
      <div className="header__logo">2048</div>
      <div className="header__author">by onc157</div>
    </div>
  )
}

export default Header
