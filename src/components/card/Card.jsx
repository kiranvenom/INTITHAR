import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

const Card = ({ title, imageUrls, description }) => {
	if (!Array.isArray(imageUrls)) {
		console.error('imageUrls prop should be an array of image URLs.');
		return null;
	}

	return (
		<div className='max-w-sm bg-white border border-inRed rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 md:mx-0'>
			<div className='flex items-end justify-center'>
				<Swiper
					spaceBetween={10}
					slidesPerView={1}
					navigation={imageUrls.length > 1}
					modules={[Navigation]}
					pagination={{ clickable: true }}>
					{imageUrls.map((url, index) => (
						<SwiperSlide key={index}>
							<img
								className='rounded-t-lg h-[350px] object-cover w-full'
								src={url}
								alt={`Slide ${index}`}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className='p-5'>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
					{title}
				</h5>
				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					{description}
				</p>
			</div>
		</div>
	);
};

export default Card;
