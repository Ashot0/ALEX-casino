import React from 'react';

import './advantages-block.scss';

const AdvantagesBlock = ({ src, content }) => {
	return (
		<div className="advantages-block">
			<img className="advantages-block__image" src={src} alt="" />
			<p className="advantages-block__text">{content}</p>
		</div>
	);
};

export default AdvantagesBlock;
