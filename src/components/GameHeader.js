import React, { useContext } from 'react';
import { GameContext } from './App';
import '../styles/GameHeader.css';

export default function GameHeader() {
	const { playerOneScore, playerTwoScore, playerOneTurn } = useContext(GameContext);

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
