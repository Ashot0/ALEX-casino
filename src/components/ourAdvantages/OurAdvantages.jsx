import React from 'react';

import './our-advantages.scss';
import GoldButton from '../goldButton/GoldButton';
import AdvantagesBlock from '../advantagesBlock/AdvantagesBlock';
import BackgroundElement from '../backgroundElement/BackgroundElement';

const OurAdvantages = () => {
	return (
		<div className="our-advantages">
			<BackgroundElement
				image="2"
				widthSize={'var(--prc-100)'}
				heightSize={`var(--px-1080)`}
			/>
			<div className="our-advantages__advantages-block">
				<h2 className="our-advantages__title">
					<span className="gold-color">Наши</span> преимущества
				</h2>
				<div className="our-advantages__blocks">
					<AdvantagesBlock
						src={'./assets/Our-advantages/blocks/stats1.png'}
						content="Real-time подробная статистика"
					/>
					<AdvantagesBlock
						src={'./assets/Our-advantages/blocks/stats2.png'}
						content="Быстрые выплаты"
					/>
					<AdvantagesBlock
						src={'./assets/Our-advantages/blocks/stats3.png'}
						content="Удобный личный кабинет"
					/>
					<AdvantagesBlock
						src={'./assets/Our-advantages/blocks/stats4.png'}
						content="Опытный персональный менеджер"
					/>
					<AdvantagesBlock
						src={'./assets/Our-advantages/blocks/stats5.png'}
						content="Эксклюзивные промоматериалы"
					/>
					<AdvantagesBlock
						src={'./assets/Our-advantages/blocks/stats6.png'}
						content="Уникальные условия для топовых партнеров"
					/>
				</div>
			</div>
			<GoldButton
				className="our-advantages__button"
				filled={true}
				content="Вступить"
			/>
			<img
				src="./assets/Our-advantages/cards.png"
				className="our-advantages__card"
			/>
		</div>
	);
};

export default OurAdvantages;
