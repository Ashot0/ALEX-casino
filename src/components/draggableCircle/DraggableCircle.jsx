import React from 'react';
import { useSpring } from '@react-spring/core';
import { motion, useDragControls, useAnimation } from 'framer-motion';

const DraggableCircle = () => {
	const controls = useDragControls();
	const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));

	return (
		<motion.div
			style={{
				x,
				y,
				width: 50,
				height: 50,
				borderRadius: '50%',
				background: 'blue',
			}}
			drag="x"
			dragControls={controls}
			dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
			onDrag={(event, info) => {
				controls.start({ x: info.offset.x, y: info.offset.y });
			}}
			onDragEnd={() => {
				controls.start({ x: 0, y: 0 });
			}}
		/>
	);
};

export default DraggableCircle;
