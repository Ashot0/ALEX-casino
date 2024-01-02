import React, { useEffect } from 'react';

import bg1 from './bg1.png';
import bg2 from './bg2.png';
import bg3 from './bg3.png';
import bg4 from './bg4.png';

import './background-element.scss';
const BackgroundElement = ({ image, widthSize, heightSize }) => {
	useEffect(() => {
		console.log(image);
	}, []);

	const imageStyle = {
		width: widthSize,
		height: heightSize,
		objectFit: 'cover',
	};

	const imageSrc = () => {
		switch (image) {
			case '1':
				return bg1;
			case '2':
				return bg2;
			case '3':
				return bg3;
			case '4':
				return bg4;
			default:
				return bg1;
		}
	};

	return (
		<img
			style={imageStyle}
			src={imageSrc()}
			className="background-element"
			alt="Background Image"
		/>
	);
};

export default BackgroundElement;
