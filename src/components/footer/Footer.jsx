import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContextMain';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const { isEnglish } = useContext(LanguageContext);

	return (
		<section className='py-10 bg-gray-200 sm:pt-16 lg:pt-24'>
			<div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
				<div className='md:flex justify-between'>
					<div className='col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8'>
						<NavLink
							to='/'
							className='flex items-center space-x-3 rtl:space-x-reverse'>
							<span className='self-center text-2xl font-semibold whitespace-nowrap text-inRed dark:text-white uppercase'>
								{!isEnglish
									? 'Intithar Trading Est'
									: 'مؤسسة إنتصار للتجارة'}
							</span>
						</NavLink>

						<p className='text-base max-w-[300px] leading-relaxed text-gray-600 mt-7'>
							{!isEnglish
								? 'Intithar provides high-quality laundry equipment, spare parts, and expert after-sales services.'
								: 'مؤسسة إنتصار تقدم معدات غسيل عالية الجودة، قطع غيار، وخدمات ما بعد البيع الخبيرة.'}
						</p>
					</div>

					<div>
						<p className='text-sm font-semibold tracking-widest text-gray-400 uppercase mt-10 md:mt-0'>
							{!isEnglish ? 'Navigate' : 'تصفح'}
						</p>

						<ul className='mt-6 space-y-4'>
							<li>
								<Link
									to='/about-us'
									title=''
									className='flex text-base text-black transition-all duration-200 hover:text-inRed rtl:text-right'>
									{!isEnglish ? 'About' : 'حول'}
								</Link>
							</li>
							<li>
								<Link
									to='/products'
									title=''
									className='flex text-base text-black transition-all duration-200 hover:text-inRed rtl:text-right'>
									{!isEnglish ? 'Products' : 'المنتجات'}
								</Link>
							</li>
							<li>
								<Link
									to='/products/equipment'
									title=''
									className='flex text-base text-black transition-all duration-200 hover:text-inRed rtl:text-right'>
									{!isEnglish ? 'Equipment' : 'المعدات'}
								</Link>
							</li>
							<li>
								<Link
									to='/products/spare-parts'
									title=''
									className='flex text-base text-black transition-all duration-200 hover:text-inRed rtl:text-right'>
									{!isEnglish ? 'Spare Parts' : 'قطع الغيار'}
								</Link>
							</li>
							<li>
								<Link
									to='/contact-us'
									title=''
									className='flex text-base text-black transition-all duration-200 hover:text-inRed rtl:text-right'>
									{!isEnglish ? 'Contact Us' : 'اتصل بنا'}
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<hr className='mt-16 mb-10 border-gray-200' />

				<p className='text-sm text-center text-gray-600'>
					© {currentYear},{' '}
					{!isEnglish ? 'All Rights Reserved' : 'كل الحقوق محفوظة'}
				</p>
			</div>

			<Link
				target='_blank'
				to='https://digitaltechxon.com/'
				className='flex justify-center items-start text-slate-500 mt-10'>
				Powered by Digital TechXon
			</Link>
		</section>
	);
};

export default Footer;
