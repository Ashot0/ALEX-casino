import React from 'react';

import './working-condition-block.scss';
const WorkingConditionBlock = ({ title, text }) => {
	return (
		<div className="working-condition-block">
			<h3 className="working-condition-block__title" data-content={title}>
				{title}
			</h3>
			<p className="working-condition-block__text">{text}</p>
		</div>
	);
};

export default WorkingConditionBlock;
