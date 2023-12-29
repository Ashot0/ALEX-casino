import React from 'react';

import './gold-button.scss';

const GoldButton = ({ filled, content, bordRad, className }) => {
	return (
		<button
			className={`gold-button ${className} ${
				filled ? 'filled' : 'not-filled'
			} ${bordRad ? 'bord-rad' : ''}`}
		>
			{content}
		</button>
	);
};

export default GoldButton;
