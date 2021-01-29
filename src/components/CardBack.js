import React from 'react';
import backImage from '../images/backside.png';

export default function CardBack() {
	return (
		<div className="back">
			<img src={backImage} alt="Generic backside" className="back-image"></img>
		</div>
	);
}
