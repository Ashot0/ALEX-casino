import React from 'react';

import './reviews.scss';
import BackgroundElement from '../backgroundElement/BackgroundElement';
import SwiperComponent from '../swiperComponent/SwiperComponent';

const Reviews = () => {
	return (
		<div className="reviews">
			<BackgroundElement
				image="4"
				widthSize={'var(--prc-100)'}
				heightSize={`var(--px-1080)`}
			/>
			<div className="reviews__wrapper">
				<h2 className="reviews__title">Отзывы</h2>
				<div className="reviews__block">
					<SwiperComponent />
				</div>
			</div>
		</div>
	);
};

export default Reviews;
