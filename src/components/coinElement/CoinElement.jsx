import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import './coin-element.scss';
import coinImg from './coin.png';

const Coin = ({ id, x, y, onRemove }) => {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(true);
		onRemove(id);
	};

	const styles = useSpring({
		from: { opacity: 0, transform: `translate(${x}px, -50px)` },
		to: {
			opacity: clicked ? 0 : 1,
			transform: `translate(${x}px, ${y}px)`,
		},
		config: { tension: 100, friction: 10 },
	});

	return (
		<animated.div className="coin" style={styles} onClick={handleClick}>
			{clicked ? null : (
				<img className="coin__image" src={coinImg} alt="" />
			)}
		</animated.div>
	);
};

export default Coin;
