import React, { useState } from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';
import '../styles/Card.css';

export default function Card({ bike }) {
	const [flipped, setFlipped] = useState(false);

	return (
		<div className={`entire-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
			<CardFront bike={bike}></CardFront>
			<CardBack></CardBack>
		</div>
	);
}
