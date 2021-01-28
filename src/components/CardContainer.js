import React from 'react';
import Card from './Card';

export default function CardContainer({ bikes }) {
	return (
		<div className="cards-container">
			{bikes.map((bike) => (
				<Card bike={bike} key={bike.id}></Card>
			))}
		</div>
	);
}
