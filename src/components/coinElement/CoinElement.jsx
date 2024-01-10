import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import './coin-element.scss';
import coinImg from './coin.png';

const Coin = ({ id, x, y, mouseX, mouseY, onRemove }) => {
	const [falling, setFalling] = useState(true);
  const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(true);
		onRemove(id);
	};

	useEffect(() => {
    const timeout = setTimeout(() => {
      setFalling(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);


	const fallingStyles = useSpring({
			from: { opacity: 0, transform: `translate(${x}px, -50px)` },
		to: {
			opacity: clicked ? 0 : 1,
			transform: `translate(${x}px, ${y}px)`,
		},
		config: { tension: 100, friction: 10 },
  });

	const attractionStyles = useSpring({
		from: { opacity: clicked ? 0 : 1,
			transform: `translate(${x}px, ${y}px)`, },
    to: { opacity: clicked ? 0 : 1, transform: `translate(${mouseX}px, ${mouseY}px)` },
    config: { tension: 0.1, friction: 30 },
  });
	return (
		<animated.div className="coin" style={falling ? fallingStyles : attractionStyles} onClick={handleClick}>
			{clicked ? null : (
				<img className="coin__image"  src={coinImg} alt="" />
			)}
		</animated.div>
	);
};

export default Coin;
