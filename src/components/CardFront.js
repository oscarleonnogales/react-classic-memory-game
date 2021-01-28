import React from 'react';
import '../styles/CardFront.css';

export default function CardFront({ bike }) {
	return (
		<div className="front" style={{ background: `${getBackground(bike.manufacturer)}` }}>
			<figure>
				<img src={bike.src} alt={`${bike.manufacturer} ${bike.model}`} className="card-image" />
				<figcaption
					style={{ color: `${getColor(bike.manufacturer)}` }}
				>{`${bike.manufacturer} ${bike.model}`}</figcaption>
			</figure>
		</div>
	);
}

function getBackground(manufacturer) {
	let color;
	switch (manufacturer) {
		case 'Honda':
			color = '#ac1718';
			break;
		case 'Ducati':
			color = '#ac1718';
			break;
		case 'Suzuki':
			color = '#faed27';
			break;
		case 'Kawasaki':
			color = '#6c3';
			break;
		case 'Yamaha':
			color = '#003399';
			break;
		default:
			color = 'white';
			break;
	}
	return color;
}

function getColor(manufacturer) {
	let color;
	switch (manufacturer) {
		case 'Suzuki':
			color = 'black';
			break;
		case 'Husqvarna':
			color = 'black';
			break;
		default:
			color = 'white';
			break;
	}
	return color;
}
