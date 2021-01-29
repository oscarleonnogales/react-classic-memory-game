import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import GameHeader from './GameHeader';
import CardContainer from './CardContainer';
import '../styles/App.css';
//images
import drz400 from '../images/drz400.jpg';
import fz07 from '../images/fz07.jpg';
import goldwing from '../images/goldwing.jpg';
import gsxr750 from '../images/gsxr750.jpg';
import husky701 from '../images/husky701.webp';
import klr650 from '../images/klr650.jpg';
import monster from '../images/monster1200.jpg';
import ninja from '../images/ninja250.jpg';
import cbr1000 from '../images/cbr1000.jpg';
import sv650 from '../images/sv650.jpg';
import xsr900 from '../images/xsr900.jpg';
import tc250 from '../images/tc250.jpg';

const importedBikes = [
	{
		id: uuid(),
		src: tc250,
		manufacturer: 'Husqvarna',
		model: 'TC250',
		flipped: true,
		clickable: true,
	},
	{
		id: uuid(),
		src: drz400,
		manufacturer: 'Suzuki',
		model: 'DRZ400',
		flipped: true,
		clickable: true,
	},
	{
		id: uuid(),
		src: fz07,
		manufacturer: 'Yamaha',
		model: 'FZ-07',
		flipped: true,
		clickable: true,
	},
	{
		id: uuid(),
		src: goldwing,
		manufacturer: 'Honda',
		model: 'Goldwing',
		flipped: true,
		clickable: true,
	},
	{
		id: uuid(),
		src: monster,
		manufacturer: 'Ducati',
		model: 'Monster 1200S',
		flipped: true,
		clickable: true,
	},
	{
		id: uuid(),
		src: gsxr750,
		manufacturer: 'Suzuki',
		model: 'GSXR-750',
		flipped: true,
		clickable: true,
	},
	{
		id: uuid(),
		src: husky701,
		manufacturer: 'Husqvarna',
		model: '701 SM',
		flipped: true,
		clickable: true,
	},
	{
		id: uuid(),
		src: cbr1000,
		manufacturer: 'Honda',
		model: 'CBR1000RR',
		flipped: true,
		clickable: true,
	},
	{
		id: uuid(),
		src: sv650,
		manufacturer: 'Suzuki',
		model: 'SV650',
		flipped: true,
		clickable: true,
	},
	{
		id: uuid(),
		src: klr650,
		manufacturer: 'Kawasaki',
		model: 'KLR 650',
		flipped: true,
		clickable: true,
	},
	{
		id: uuid(),
		src: xsr900,
		manufacturer: 'Yamaha',
		model: 'XSR900',
		flipped: true,
		clickable: true,
	},
	{
		id: uuid(),
		src: ninja,
		manufacturer: 'Kawasaki',
		model: 'Ninja 250R',
		flipped: true,
		clickable: true,
	},
];

export const GameContext = React.createContext();

function App() {
	const [playerOneScore, setPlayerOneScore] = useState(0);
	const [playerTwoScore, setPlayerTwoScore] = useState(0);
	const [playerOneTurn, setPlayerOneTurn] = useState(true);
	const [bikes, setBikes] = useState([]);
	const [cardToMatch, setCardToMatch] = useState();
	const [clickingEnabled, setClickingEnabled] = useState(true);

	useEffect(() => {
		const bikesCopy = [];
		importedBikes.forEach((bike) => {
			const bikeTwo = { ...bike };
			bikeTwo.id = uuid();
			bikesCopy.push(bike);
			bikesCopy.push(bikeTwo);
		});
		setBikes([...shuffleCards(bikesCopy)]);
	}, []);

	function handleResetClick() {
		if (!clickingEnabled) return;
		setPlayerOneScore(0);
		setPlayerTwoScore(0);
		setPlayerOneTurn(true);
		setCardToMatch(null);
		unmatchAllCards();
		setBikes((prevBikes) => [...shuffleCards(prevBikes)]);
	}

	function handleCardSelection(selectedID) {
		if (!clickingEnabled) return;
		const selectedCard = bikes.find((bike) => bike.id === selectedID);

		if (!selectedCard.clickable) return;
		selectedCard.clickable = false;

		if (cardToMatch != null) {
			if (areEqual(selectedCard, cardToMatch)) {
				selectedCard.clickable = false;
				cardToMatch.clickable = false;
				if (playerOneTurn) setPlayerOneScore((prevScore) => prevScore + 1);
				else setPlayerTwoScore((prevScore) => prevScore + 1);

				setCardToMatch(null);
			} else {
				setClickingEnabled(false);
				setTimeout(() => {
					setPlayerOneTurn(!playerOneTurn);
					selectedCard.flipped = true;
					cardToMatch.flipped = true;
					selectedCard.clickable = true;
					cardToMatch.clickable = true;
					setCardToMatch(null);
					setClickingEnabled(true);
				}, 1500);
			}
		} else {
			setCardToMatch(selectedCard);
		}
	}

	function areEqual(cardOne, cardTwo) {
		return cardOne.manufacturer === cardTwo.manufacturer && cardOne.model === cardTwo.model;
	}

	function unmatchAllCards() {
		const bikesCopy = [...bikes];
		bikesCopy.forEach((bike) => {
			bike.clickable = true;
			bike.flipped = true;
		});
		setBikes([...bikesCopy]);
	}

	function shuffleCards(cards) {
		let shuffledBikes = [...cards];
		for (let i = shuffledBikes.length - 1; i > 0; i--) {
			let randomIndex = Math.floor(Math.random() * (i + 1));
			[shuffledBikes[i], shuffledBikes[randomIndex]] = [shuffledBikes[randomIndex], shuffledBikes[i]];
		}
		return shuffledBikes;
	}

	function handleClickingEnabledChange(bool) {
		setClickingEnabled(bool);
	}

	const gameContextValue = {
		playerOneScore,
		playerTwoScore,
		bikes,
		handleResetClick,
		handleCardSelection,
		playerOneTurn,
		clickingEnabled,
		handleClickingEnabledChange,
	};

	return (
		<GameContext.Provider value={gameContextValue}>
			<GameHeader></GameHeader>
			<CardContainer></CardContainer>
			<div className="reset-btn-containr">
				<button className="restart-btn" onClick={() => handleResetClick()}>
					Restart Game
				</button>
			</div>
		</GameContext.Provider>
	);
}

export default App;
