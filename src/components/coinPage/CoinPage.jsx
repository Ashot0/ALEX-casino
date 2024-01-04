import React, { useState, useEffect } from 'react';
import Coin from '../coinElement/CoinElement';

import './coin-page.scss';

const CoinPage = () => {
	const [coins, setCoins] = useState([]);

	useEffect(() => {
		const interval = setInterval(() => {
			const newCoin = {
				id: Date.now(),
				x: Math.random() * window.innerWidth,
				y: Math.random() * window.innerHeight,
			};

			setCoins((prevCoins) => [...prevCoins, newCoin]);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const handleRemoveCoin = (id) => {
		setCoins((prevCoins) => prevCoins.filter((coin) => coin.id !== id));
	};

	return (
		<div className="coin-page">
			{coins.map((coin) => (
				<Coin
					key={coin.id}
					id={coin.id}
					x={coin.x}
					y={coin.y}
					onRemove={handleRemoveCoin}
				/>
			))}
		</div>
	);
};

export default CoinPage;
