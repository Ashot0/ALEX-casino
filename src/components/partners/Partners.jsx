import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './partners.scss';

const Partners = () => {
	const [selectedId, setSelectedId] = useState(null);
	const items = [
		{
			id: '0',
			className: 'partners__block',
			src: './assets/partners/1.png',
		},
		{
			id: 1,
			className: 'partners__block',
			src: './assets/partners/2.png',
		},
		{
			id: 2,
			className: 'partners__block',
			src: './assets/partners/3.png',
		},
		{
			id: 3,
			className: 'partners__block',
			src: './assets/partners/4.png',
		},
		{
			id: 4,
			className: 'partners__block',
			src: './assets/partners/5.png',
		},
		{
			id: 5,
			className: 'partners__block',
			src: './assets/partners/6.png',
		},
		{
			id: 6,
			className: 'partners__block',
			src: './assets/partners/7.png',
		},
		{
			id: 7,
			className: 'partners__block',
			src: './assets/partners/8.png',
		},
		{
			id: 8,
			className: 'partners__block',
			src: './assets/partners/9.png',
		},
		{
			id: 9,
			className: 'partners__block',
			src: './assets/partners/10.png',
		},
		{
			id: 10,
			className: 'partners__block',
			src: './assets/partners/11.png',
		},
		{
			id: 11,
			className: 'partners__block',
			src: './assets/partners/12.png',
		},
		{
			id: 12,
			className: 'partners__block',
			src: './assets/partners/13.png',
		},
		{
			id: 13,
			className: 'partners__block',
			src: './assets/partners/14.png',
		},
		{
			id: 14,
			className: 'partners__block',
			src: './assets/partners/15.png',
		},
		{
			id: 15,
			className: 'partners__block',
			src: './assets/partners/16.png',
		},
		{
			id: 16,
			className: 'partners__block',
			src: './assets/partners/17.png',
		},
	];
	return (
		<div className="partners">
			<div className="partners__wrapper">
				<h2 className="partners__title">партнеры</h2>
				<div className="partners__blocks">
					{items.map((item) => (
						<motion.div
							layoutId={item.id}
							onClick={() => setSelectedId(item.id)}
						>
							<motion.img
								className={item.className}
								src={item.src}
							/>
						</motion.div>
					))}
					<AnimatePresence>
						{selectedId && (
							<motion.div
								className="partners__selected"
								layoutId={selectedId}
							>
								<motion.div
									layoutId={items[selectedId].id}
									onClick={() =>
										setSelectedId(items[selectedId].id)
									}
								>
									<motion.img
										className={items[selectedId].className}
										src={items[selectedId].src}
									/>
								</motion.div>
								<motion.button
									className="partners__selected-button"
									onClick={() => setSelectedId(null)}
								>
									<motion.img
										className="partners__selected-img"
										src={items[selectedId].src}
									/>
								</motion.button>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default Partners;
