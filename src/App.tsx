import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Game from './components/Game/Game'
import Footer from './components/Footer/Footer'

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Game />
      <Footer />
    </>
  )
}

export default App
