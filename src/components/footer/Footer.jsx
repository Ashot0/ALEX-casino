import React from 'react';

import './footer.scss';
import GoldButton from '../goldButton/GoldButton';
const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__wrapper">
				<h2 className="footer__title">Контакты</h2>
				<div className="footer__btns">
					<GoldButton
						className="footer__button"
						filled={true}
						content="Наш канал"
					/>
					<GoldButton
						className="footer__button"
						filled={true}
						content="Связаться"
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
