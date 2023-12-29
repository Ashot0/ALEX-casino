import React from 'react';

import './main-page.scss';
import Hero from '../../components/hero/Hero';
import OurAdvantages from '../../components/ourAdvantages/OurAdvantages';
import WorkingConditions from '../../components/workingConditions/WorkingConditions';
import Partners from '../../components/partners/Partners';
import Reviews from '../../components/reviews/Reviews';
import Footer from '../../components/footer/Footer';

function MainPage() {
	return (
		<div className="main-page">
			<Hero />
			<OurAdvantages />
			<WorkingConditions />
			<Partners />
			<Reviews />
			<Footer />
		</div>
	);
}

export default MainPage;
