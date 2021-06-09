import React, { useContext } from 'react';
import { GameContext } from './App';

export default function WinningMessage() {
	const { isGameOver, playerOneScore, playerTwoScore } = useContext(GameContext);

	if (!isGameOver) return null;

	return (
		<>
			{playerOneScore > playerTwoScore && <div className="winning-message">Player one wins!</div>}
			{playerOneScore < playerTwoScore && <div className="winning-message">Player two wins!</div>}
			{playerOneScore === playerTwoScore && <div className="winning-message">It's a tie!</div>}
		</>
	);
}
