import React from 'react';

import './working-conditions.scss';
import WorkingConditionBlock from '../workingConditionBlock/WorkingConditionBlock';

const WorkingConditions = () => {
	return (
		<div className="working-conditions">
			<div className="working-conditions__wrapper">
				<h2 className="working-conditions__title">
					Условия <span className="gold-color">работа СPA:</span>
				</h2>
				<div className="working-conditions__blocks">
					<WorkingConditionBlock
						text="Оплачиваемая цель; накопительный БЕЙСЛАЙН 7$"
						title="20$"
					/>
					<WorkingConditionBlock
						text="Россия, Узбекистан, Вьетнам, Малайзия, Тайланд, Индонезия"
						title="ТРАФИК НА ГЕО"
					/>
					<WorkingConditionBlock
						text="Срок холда для вновь подключившихся парнеров - 14 дней"
						title="Выплаты"
					/>
					<WorkingConditionBlock
						text="Персональный менеджер с вами на связи"
						title="24/7"
					/>
					<WorkingConditionBlock
						text="Пробная статистика в реальном времени"
						title="REALTIME  STATS"
					/>
					<WorkingConditionBlock
						text="Предоставляем пакет наших кретивов"
						title="Креативы"
					/>
				</div>
			</div>
		</div>
	);
};

export default WorkingConditions;
