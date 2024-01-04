import React from 'react';

import './gold-button.scss';

const GoldButton = ({ filled, content, bordRad, className, onClick }) => {
	return (
		<button
			onClick={() => onClick}
			className={`gold-button ${className} ${
				filled ? 'filled' : 'not-filled'
			} ${bordRad ? 'bord-rad' : ''}`}
		>
			{content}
		</button>
	);
};

export default GoldButton;
