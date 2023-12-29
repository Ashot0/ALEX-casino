import React, { useState } from 'react';

import './lang-dropdown.scss';

const LangDropdown = ({ className }) => {
	const [selectedLanguage, setSelectedLanguage] = useState(null);
	const languages = ['RU', 'RU', 'RU']; // Добавьте другие языки

	const handleLanguageChange = (language) => {
		setSelectedLanguage(language);
		console.log('Selected language:', language);
		console.log('Selected language:', selectedLanguage);
	};

	return (
		<div className={`lang-dropdown ${className}`}>
			<img
				className="lang-dropdown__img"
				src="./assets/Header/langRU.png"
				alt=""
			/>
			<button className="lang-dropdown__button">RU</button>
			<div className="lang-dropdown__content">
				{languages.map((language) => (
					<a
						href="#"
						className="lang-dropdown__link"
						key={language}
						onClick={() => handleLanguageChange(language)}
					>
						<img
							className="lang-dropdown__img"
							src="./assets/Header/langRU.png"
							alt=""
						/>
						{language}
					</a>
				))}
			</div>
		</div>
	);
};

export default LangDropdown;
