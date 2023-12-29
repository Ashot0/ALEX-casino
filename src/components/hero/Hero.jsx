import React from 'react';

import './hero.scss';
import Header from '../header/Header';
import GoldButton from '../goldButton/GoldButton';

function Hero() {
	return (
		<div className="hero">
			<Header className="hero__header"></Header>
			<div className="hero__block">
				<h1 className="hero__title">
					<p className="gold-color">Эксклюзивная</p> партнерская
					программа
				</h1>
				<p className="hero__text">
					Мы предлагаем выгодные индивидуальные условия.
					<br />
					Регистрируйтесь и зарабатывайте вместе с нами
				</p>
				<GoldButton
					className="hero__button"
					filled={true}
					content="Присоединиться"
				/>
			</div>
		</div>
	);
}

export default Hero;
