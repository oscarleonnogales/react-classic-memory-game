import React, { useContext } from 'react';
import { GameContext } from './App';
import '../styles/GameHeader.css';

export default function GameHeader({ isGameOver }) {
	const { playerOneScore, playerTwoScore, playerOneTurn } = useContext(GameContext);

	if (isGameOver)
		return <div className="game-header">{playerOneScore > playerTwoScore ? 'Player one' : 'Player two'} wins!</div>;

	return (
		<div className="game-header">
			<div className={`player-score-container ${playerOneTurn ? 'bold' : ''}`}>
				<div>Player One</div>
				<div>{playerOneScore}</div>
			</div>
			<div className={`player-score-container ${playerOneTurn ? '' : 'bold'}`}>
				<div>Player Two</div>
				<div>{playerTwoScore}</div>
			</div>
		</div>
	);
}
