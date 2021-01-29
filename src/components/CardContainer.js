import React, { useContext } from 'react';
import { GameContext } from './App';
import Card from './Card';

export default function CardContainer() {
	const { bikes, handleCardSelection, clickingEnabled, handleClickingEnabledChange } = useContext(GameContext);
	return (
		<div className="cards-container">
			{bikes.map((bike) => (
				<Card
					bike={bike}
					handleCardSelection={handleCardSelection}
					clickingEnabled={clickingEnabled}
					handleClickingEnabledChange={handleClickingEnabledChange}
					key={bike.id}
				></Card>
			))}
		</div>
	);
}
