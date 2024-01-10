import React, { useState, useEffect } from 'react';
import Coin from '../coinElement/CoinElement';

import './coin-page.scss';

const CoinPage = () => {
	const [coins, setCoins] = useState([]);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	
	useEffect(() => {
		const interval = setInterval(() => {
			if (coins.length < 100) {
				console.log(`${coins.length}/100`);
        const newCoin = {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        };
        setCoins((prevCoins) => [...prevCoins, newCoin]);
      } else {
        clearInterval(interval);
      }
		}, 1000);
			return () => clearInterval(interval);
	}, [coins.length]);

	const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

	const handleRemoveCoin = (id) => {
		setCoins((prevCoins) => prevCoins.filter((coin) => coin.id !== id));
	};

	 return (
    <div className="coin-page" onMouseMove={handleMouseMove}>
      {coins.map((coin) => (
        <Coin
          key={coin.id}
          id={coin.id}
          x={coin.x}
          y={coin.y}
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
          onRemove={handleRemoveCoin}
        />
      ))}
    </div>
  );
};

export default CoinPage;
