import React from 'react';

const ImageTitle = ({ title, imageUrl }) => {
	return (
		<div className='max-w-sm rounded overflow-hidden shadow-lg flex justify-center items-center flex-col'>
			<img
				className='w-[300px] h-[300px] object-contain'
				src={imageUrl}
				alt={title}
			/>
			<div className='px-6 py-4'>
				<div className='font-bold text-xl mb-2 text-center'>
					{title}
				</div>
			</div>
		</div>
	);
};

export default ImageTitle;
