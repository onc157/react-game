import React from 'react'
import GameMenu from '../GameMenu/GameMenu'
import GameStats from '../GameStats/GameStats'
import GameField from '../GameField/GameField'

const Game = (): JSX.Element => {
  return (
    <>
      <GameMenu />
      <GameStats />
      <GameField />
    </>
  )
}

export default Game
