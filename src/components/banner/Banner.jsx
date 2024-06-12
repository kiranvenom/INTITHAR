import { Link } from 'react-router-dom';

const Banner = ({ headline, subheading, bannerImage }) => {
	return (
		<section className='py-10 bg-gray-50 sm:py-10 lg:py-10'>
			<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
				<div className='flex flex-col lg:flex-row lg:items-center'>
					<div className='w-full lg:w-1/2'>
						<div className='relative h-full overflow-hidden'>
							<img
								className='object-cover w-[500px] h-[500px]'
								src={bannerImage}
								alt='Banner Image'
							/>
						</div>
					</div>

					<div className='flex flex-col items-start mt-10 lg:mt-0 lg:w-1/2 lg:pl-16'>
						<h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl'>
							{headline}
						</h2>
						<p className='mt-4 text-xl leading-relaxed text-gray-600'>
							{subheading}
						</p>

						<div className='mt-10'>
							<Link
								to='/products'
								title=''
								className='inline-flex items-center justify-center px-5 py-4 text-base font-semibold transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 lg:mt-auto border border-black bg-inRed text-white'
								role='button'>
								Products
								<svg
									className='w-5 h-5 ml-8 -mr-1'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
									fill='currentColor'>
									<path
										fillRule='evenodd'
										d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
										clipRule='evenodd'
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
