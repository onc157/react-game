import React from 'react'
import './style.scss'

const Footer = (): JSX.Element => {
  return (
    <div className="footer-wrapper">
      <div className="footer-school">
        <a href="https://rs.school/" target="_blank" rel="noreferrer">
          RSS
        </a>
      </div>
      <div className="footer-author">
        <a href="https://github.com/onc157" target="_blank" rel="noreferrer">
          onc157
        </a>
      </div>
      <div className="footer-year">2021</div>
    </div>
  )
}

export default Footer
