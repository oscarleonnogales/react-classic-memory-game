import React from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';
import '../styles/Card.css';

class Card extends React.Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div
				className={`entire-card ${this.props.bike.flipped ? 'flipped' : ''}`}
				onClick={() => {
					if (!this.props.clickingEnabled) return;
					if (this.props.bike.clickable) {
						this.props.bike.flipped = !this.props.bike.flipped;
						this.forceUpdate();
						this.props.handleCardSelection(this.props.bike.id);
					}
				}}
			>
				<CardFront bike={this.props.bike}></CardFront>
				<CardBack></CardBack>
			</div>
		);
	}
}

export default Card;
