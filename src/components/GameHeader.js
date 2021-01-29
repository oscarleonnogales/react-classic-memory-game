import React, { useContext } from 'react';
import { GameContext } from './App';
import '../styles/GameHeader.css';

export default function GameHeader() {
	const { playerOneScore, playerTwoScore, playerOneTurn, handleResetClick } = useContext(GameContext);
	return (
		<div className="game-header">
			<div className="player-score-container">
				<div>Player One Score</div>
				<div>{playerOneScore}</div>
			</div>
			<div>Player 1 turn? {`${playerOneTurn}`}</div>
			<div className="reset-btn-containr">
				<button className="restart-btn" onClick={() => handleResetClick()}>
					Restart Game
				</button>
			</div>
			<div className="player-score-container">
				<div>Player Two Score</div>
				<div>{playerTwoScore}</div>
			</div>
		</div>
	);
}
