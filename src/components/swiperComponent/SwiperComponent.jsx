import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper-component.scss';
import SlideElement from '../slideElement/SlideElement';
import { Navigation, Pagination } from 'swiper/modules';

const SwiperComponent = () => {
	return (
		<Swiper
			className="swiper-component"
			spaceBetween={50}
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			navigation={true}
			pagination={true}
			navigationClassName="swiper-navigation-custom"
			modules={[Navigation, Pagination]}
		>
			<SwiperSlide className="swiper-slide">
				<SlideElement textProps="1" />
			</SwiperSlide>
			<SwiperSlide className="swiper-slide">
				<SlideElement textProps="2" />
			</SwiperSlide>
			<SwiperSlide className="swiper-slide">
				<SlideElement textProps="3" />
			</SwiperSlide>
			<SwiperSlide className="swiper-slide">
				<SlideElement textProps="4" />
			</SwiperSlide>
		</Swiper>
	);
};

export default SwiperComponent;
