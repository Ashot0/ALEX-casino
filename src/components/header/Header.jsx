import React from 'react';

import './header.scss';
import LangDropdown from '../langDropdown/LangDropdown';
import GoldButton from '../goldButton/GoldButton';

function Header({ className }) {
	return (
		<div className={`header ${className}`}>
			<LangDropdown className="header__dropdown" />
			<GoldButton
				className="header__btn_1"
				filled={false}
				bordRad={true}
				content="Вход"
			/>
			<GoldButton
				className="header__btn_2"
				filled={true}
				bordRad={true}
				content="Регистрация"
			/>
		</div>
	);
}

export default Header;
