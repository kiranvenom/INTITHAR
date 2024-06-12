import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContextMain';
import { useContext } from 'react';

const Cta = () => {
	const { isEnglish } = useContext(LanguageContext);

	return (
		<section className='py-10 bg-inRed sm:py-16 lg:py-20'>
			<div className='maxW px-4 mx-auto sm:px-6 lg:px-8'>
				<div className='text-center lg:flex lg:items-center lg:justify-between lg:text-left'>
					<div>
						<h2 className='text-4xl font-bold text-white lg:max-w-md'>
							{!isEnglish
								? 'Get in Touch with Us'
								: 'ابق على تواصل معنا'}
						</h2>
						<span className='max-w-[400px] inline-block mt-6 text-white text-xl'>
							{!isEnglish
								? 'We here to help you with all your laundry equipment and spare parts needs.'
								: 'نحن هنا لمساعدتك في تلبية كافة احتياجات معدات الغسيل وقطع الغيار.'}
						</span>
					</div>

					<Link
						to='/contact-us'
						className='inline-flex items-center justify-center flex-shrink-0 w-full px-4 py-4 mt-4 font-semibold text-black transition-all duration-200 bg-white border border-transparent rounded-lg sm:w-auto'>
						{!isEnglish ? 'Contact Us Now' : 'اتصل بنا الآن'}
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Cta;
