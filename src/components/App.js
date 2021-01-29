import { useState } from 'react';

import CardContainer from './CardContainer';
import '../styles/App.css';
//images
import dr650 from '../images/dr650.jpg';
import drz400 from '../images/drz400.jpg';
import fz07 from '../images/fz07.jpg';
import goldwing from '../images/goldwing.jpg';
import gsxr750 from '../images/gsxr750.jpg';
import husky701 from '../images/husky701.webp';
import klr650 from '../images/klr650.jpg';
import monster from '../images/monster1200.jpg';
import ninja from '../images/ninja250.jpg';
import r1 from '../images/r1.jpg';
import sv650 from '../images/sv650.jpg';
import xsr900 from '../images/xsr900.jpg';

const importedBikes = [
	{
		id: 'dr650',
		src: dr650,
		manufacturer: 'Suzuki',
		model: 'DR650',
		matched: false,
	},
	{
		id: 'drz400',
		src: drz400,
		manufacturer: 'Suzuki',
		model: 'DRZ400',
		matched: false,
	},
	{
		id: 'fz07',
		src: fz07,
		manufacturer: 'Yamaha',
		model: 'FZ-07',
		matched: false,
	},
	{
		id: 'goldwing',
		src: goldwing,
		manufacturer: 'Honda',
		model: 'Goldwing',
		matched: false,
	},
	{
		id: 'monster',
		src: monster,
		manufacturer: 'Ducati',
		model: 'Monster 1200S',
		matched: false,
	},
	{
		id: 'gsxr',
		src: gsxr750,
		manufacturer: 'Suzuki',
		model: 'GSXR-750',
		matched: false,
	},
	{
		id: 'husky',
		src: husky701,
		manufacturer: 'Husqvarna',
		model: '701 SM',
		matched: false,
	},
	{
		id: 'r1',
		src: r1,
		manufacturer: 'Yamaha',
		model: 'YZF-R1',
		matched: false,
	},
	{
		id: 'sv650',
		src: sv650,
		manufacturer: 'Suzuki',
		model: 'SV650',
		matched: false,
	},
	{
		id: 'klr650',
		src: klr650,
		manufacturer: 'Kawasaki',
		model: 'KLR 650',
		matched: false,
	},
	{
		id: 'xsr900',
		src: xsr900,
		manufacturer: 'Yamaha',
		model: 'XSR900',
		matched: false,
	},
	{
		id: 'ninja250',
		src: ninja,
		manufacturer: 'Kawasaki',
		model: 'Ninja 250R',
		matched: false,
	},
];

function App() {
	const [bikes, setBikes] = useState([...importedBikes, ...importedBikes]);

	return (
		<>
			<CardContainer bikes={bikes}></CardContainer>
		</>
	);
}

export default App;
