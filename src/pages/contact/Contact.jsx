import Breadcrumb from '../../components/breadCrumb/BreadCrumb';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContextMain';

const Contact = () => {
	const { isEnglish } = useContext(LanguageContext);

	return (
		<>
			<Breadcrumb />
			<section className='py-10 bg-gray-100 sm:py-16 lg:py-24'>
				<div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
					<div className='max-w-2xl mx-auto text-center'>
						<h2 className='text-3xl font-bold leading-tight text-gray-700 sm:text-4xl lg:text-5xl'>
							{!isEnglish ? 'Contact us' : 'اتصل بنا'}
						</h2>
					</div>

					<div className='max-w-5xl mx-auto mt-12 sm:mt-16'>
						<div className='grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3'>
							<div className='overflow-hidden bg-white rounded-xl'>
								<div className='p-6'>
									<svg
										className='flex-shrink-0 w-10 h-10 mx-auto text-gray-400'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1'
											d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
										/>
									</svg>
									<p className='mt-6 text-lg font-medium text-gray-900'>
										+966 563-647-186
									</p>
									<p className='mt-1 text-lg font-medium text-gray-900'>
										Fax - 0112044499
									</p>
								</div>
							</div>

							<div className='overflow-hidden bg-white rounded-xl'>
								<div className='p-6'>
									<svg
										className='flex-shrink-0 w-10 h-10 mx-auto text-gray-400'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1'
											d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
										/>
									</svg>
									<p className='mt-6 text-lg font-medium text-gray-900'>
										info@intithar.com
									</p>
									<p className='mt-1 text-lg font-medium text-gray-900'>
										support@intithar.com
									</p>
								</div>
							</div>

							<div className='overflow-hidden bg-white rounded-xl'>
								<div className='p-6'>
									<svg
										className='flex-shrink-0 w-10 h-10 mx-auto text-gray-400'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1'
											d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1'
											d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
										/>
									</svg>
									<p className='mt-6 text-lg font-medium leading-relaxed text-gray-900'>
										{!isEnglish
											? 'As Salhiyah, Riyadh 12662, Saudi Arabia'
											: 'السليهية، الرياض 12662، المملكة العربية السعودية'}
									</p>
								</div>
							</div>
						</div>

						<div className='mt-6 overflow-hidden bg-white rounded-xl'>
							<div className='px-6 py-12 sm:p-12'>
								<h3 className='text-3xl font-semibold text-center text-gray-900'>
									{!isEnglish
										? 'Send us a message'
										: 'أرسل لنا رسالة'}
								</h3>

								<form
									onSubmit={(e) => {
										e.preventDefault();
									}}
									method='POST'
									className='mt-14'>
									<div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
										<div>
											<label
												for=''
												className='text-base font-medium text-gray-900'>
												{!isEnglish
													? 'Your name'
													: 'اسمك'}
											</label>
											<div className='mt-2.5 relative'>
												<input
													type='text'
													name=''
													id=''
													placeholder={
														!isEnglish
															? 'Enter your full name'
															: 'أدخل اسمك الكامل'
													}
													className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600'
												/>
											</div>
										</div>

										<div>
											<label
												for=''
												className='text-base font-medium text-gray-900'>
												{!isEnglish
													? 'Email address'
													: 'عنوان البريد الإلكتروني'}
											</label>
											<div className='mt-2.5 relative'>
												<input
													type='email'
													name=''
													id=''
													placeholder={
														!isEnglish
															? 'Enter your email address'
															: 'أدخل عنوان بريدك الإلكتروني'
													}
													className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600'
												/>
											</div>
										</div>

										<div>
											<label
												for=''
												className='text-base font-medium text-gray-900'>
												{!isEnglish
													? 'Phone number'
													: 'رقم الهاتف'}
											</label>
											<div className='mt-2.5 relative'>
												<input
													type='tel'
													name=''
													id=''
													placeholder={
														!isEnglish
															? 'Enter your phone number'
															: 'أدخل رقم هاتفك'
													}
													className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none'
												/>
											</div>
										</div>

										<div>
											<label
												for=''
												className='text-base font-medium text-gray-900'>
												{!isEnglish
													? 'Your Address'
													: 'عنوانك'}
											</label>
											<div className='mt-2.5 relative'>
												<input
													type='text'
													name=''
													id=''
													placeholder={
														!isEnglish
															? 'Enter your full name'
															: 'أدخل عنوانك بالكامل'
													}
													className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600'
												/>
											</div>
										</div>

										<div className='sm:col-span-2'>
											<label
												for=''
												className='text-base font-medium text-gray-900'>
												{!isEnglish
													? 'Message'
													: 'رسالة'}
											</label>
											<div className='mt-2.5 relative'>
												<textarea
													name=''
													id=''
													placeholder=''
													className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600'
													rows='4'></textarea>
											</div>
										</div>

										<div className='sm:col-span-2'>
											<button
												type='submit'
												className='inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700'>
												{!isEnglish ? 'Send' : 'إرسال'}
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			<h1 className='maxW py-10 text-2xl font-bold px-4 md:px-0'>
				{!isEnglish
					? 'Find Us In Google Map'
					: 'العثور علينا في خريطة جوجل'}
			</h1>
			<div className='flex items-center justify-center'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.6479239639145!2d46.73588547966615!3d24.63109749596288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05e85dee2b45%3A0xada25c58b38a86b3!2sINTITHAR%20TRADING.EST!5e0!3m2!1sen!2sin!4v1717244842157!5m2!1sen!2sin'
					height='450'
					style={{ border: 0, width: '100%' }}
					allowfullscreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'></iframe>
			</div>
		</>
	);
};

export default Contact;
