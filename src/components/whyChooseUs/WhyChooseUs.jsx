import { LanguageContext } from '../../context/LanguageContextMain';
import { useContext } from 'react';

const WhyChooseUs = () => {
	const { isEnglish } = useContext(LanguageContext);

	return (
		<section className='py-20 bg-gray-50'>
			<div className='maxW mx-auto px-8'>
				<h2 className='text-4xl font-extrabold text-center text-gray-900 mb-8'>
					{!isEnglish ? 'Why Choose Us?' : 'لماذا أخترتنا؟'}
				</h2>
				<p className='text-lg text-gray-700 text-center mb-16'>
					{!isEnglish
						? 'Discover the benefits of partnering with Intithar Trading Est.'
						: 'اكتشف فوائد الشراكة مع مؤسسة انتصار للتجارة'}
				</p>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
					<div className='p-8 bg-white rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold text-gray-900 mb-4'>
							{!isEnglish
								? 'Comprehensive Range of Products'
								: 'مجموعة شاملة من المنتجات'}
						</h3>
						<p className='text-gray-700 mb-6'>
							{!isEnglish
								? 'Offering a wide selection of industrial laundry equipment and spare parts to meet all your needs.'
								: 'تقدم مجموعة واسعة من الغسيل الصناعي المعدات وقطع الغيار لتلبية جميع احتياجاتك.'}
						</p>
					</div>
					<div className='p-8 bg-white rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold text-gray-900 mb-4'>
							{!isEnglish
								? 'Expert Repair and Maintenance Services'
								: 'خدمات الإصلاح والصيانة المتخصصة'}
						</h3>
						<p className='text-gray-700 mb-6'>
							{!isEnglish
								? 'Our skilled technicians ensure your equipment operates efficiently and reliably.'
								: 'لدينا الفنيين المهرة ضمان المعدات الخاصة بك  تعمل بكفاءة وموثوقية.'}
						</p>
					</div>
					<div className='p-8 bg-white rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold text-gray-900 mb-4'>
							{!isEnglish
								? 'Reliable After-Sales Support'
								: 'دعم موثوق لما بعد البيع'}
						</h3>
						<p className='text-gray-700 mb-6'>
							{!isEnglish
								? 'Dedicated customer service team providing prompt and effective assistance.'
								: 'فريق خدمة عملاء متخصص يقدم المساعدة السريعة والفعالة.'}
						</p>
					</div>
					<div className='p-8 bg-white rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold text-gray-900 mb-4'>
							{!isEnglish
								? 'High-Quality Spare Parts'
								: 'قطع غيار عالية الجودة'}
						</h3>
						<p className='text-gray-700 mb-6'>
							{!isEnglish
								? 'Stocking only the best spare parts to ensure longevity and performance of your equipment.'
								: 'تخزين فقط أفضل قطع الغيار لضمان ذلك طول العمر وأداء المعدات الخاصة بك.'}
						</p>
					</div>
					<div className='p-8 bg-white rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold text-gray-900 mb-4'>
							{!isEnglish
								? 'Trusted by Industry Leaders'
								: 'موثوق به من قبل قادة الصناعة'}
						</h3>
						<p className='text-gray-700 mb-6'>
							{!isEnglish
								? 'Proudly serving top laundry service businesses with consistent quality and dependability.'
								: 'نخدم بكل فخر شركات خدمات غسيل الملابس بجودة وموثوقية متسقة.'}
						</p>
					</div>
					<div className='p-8 bg-white rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold text-gray-900 mb-4'>
							{!isEnglish
								? 'Competitive Pricing'
								: 'أسعار تنافسية'}
						</h3>
						<p className='text-gray-700 mb-6'>
							{!isEnglish
								? 'Offering great value for high-quality products and services, ensuring you get the best return on investment.'
								: 'تقديم قيمة كبيرة للمنتجات والخدمات عالية الجودة، مما يضمن حصولك على أفضل عائد على الاستثمار.'}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
