import React from 'react';

import './slide-element.scss';

import imageRight from '../../assets/Slide/imageight.png';

const SlideElement = ({ textProps }) => {
	const textElement =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit.In hendrerit sed molestie id bibendum.Lorem adipiscing lacinia tellus, sagittis.Est elementum pellentesque porttitor fusce facilisis.Pellentesque cursus at at pulvinar vel tempor.Consequat vitae semper at enim tellus non eros.Est, imperdiet suscipit lacus, lacus sed mi massa.Vel volutpat fames suspendisse a tempus, sodales tortor.Lorem malesuada sed posuere leo vitae gravida pellentesque.Sollicitudin et odio justo, ac.Lorem ipsum dolor sit amet, consectetur .Lorem malesuada sed posuere leo vitae gravida pellentesque.Sollicitudin et odio justo, ac.Lorem ipsum dolor sit amet, consectetur ';

	return (
		<div className="slide-element">
			<div className="slide-element__center-block">
				<div className="slide-element__header">
					<div className="slide-element__dot"></div>
					<div className="slide-element__dot slide-element__dot-active"></div>
					<div className="slide-element__dot"></div>
				</div>
				<div className="slide-element__block">
					<img
						className="slide-element__block-photo"
						src={imageRight}
						alt=""
					/>
					<p>
						<p className="slide-element__title_1">Lucky online</p>
						<p className="slide-element__title_2">
							Официальный дилер компании
						</p>
					</p>
				</div>
				<div className="slide-element__left-text">{textElement}</div>
				<img
					className="slide-element__right-photo"
					src={imageRight}
					alt=""
				/>
			</div>
		</div>
	);
};

export default SlideElement;
