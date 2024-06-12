import React, { useState } from 'react';
import { LanguageContext } from '../../context/LanguageContextMain';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
	const { isEnglish } = useContext(LanguageContext);

	const [openIndex, setOpenIndex] = useState(null);

	const handleToggle = (index) => {
		setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	const faqData = [
		{
			question: !isEnglish
				? 'Where can I buy laundry equipment and spare parts online?'
				: 'أين يمكنني شراء معدات الغسيل وقطع الغيار عبر الإنترنت؟',
			answer: !isEnglish
				? 'Please feel free to reach out to our team by filling out the form with your details, and our team members will promptly follow up with you'
				: 'لا تتردد في التواصل مع فريقنا عن طريق ملء النموذج بالتفاصيل الخاصة بك، وسيقوم أعضاء فريقنا بالمتابعة معك على الفور',
		},
		{
			question: !isEnglish
				? 'How do I maintain my laundry equipment?'
				: 'كيف أحافظ على معدات الغسيل الخاصة بي؟',
			answer: !isEnglish
				? 'Regular maintenance is essential for prolonging the lifespan of your laundry equipment. Refer to our maintenance guides or contact our support team for assistance.'
				: 'الصيانة الدورية ضرورية لإطالة عمر معدات الغسيل لديك. ارجع إلى أدلة الصيانة الخاصة بنا أو اتصل بفريق الدعم لدينا للحصول على المساعدة.',
		},
		{
			question: !isEnglish
				? 'Do you provide repair services for laundry equipment?'
				: 'هل تقدمون خدمات إصلاح معدات الغسيل؟',
			answer: !isEnglish
				? 'Yes, we offer repair and replacement services for a wide range of laundry equipment. Contact us for more information.'
				: 'نعم، نحن نقدم خدمات الإصلاح والاستبدال لمجموعة واسعة من معدات الغسيل. اتصل بنا للحصول على مزيد من المعلومات.',
		},
		{
			question: !isEnglish
				? 'Where can I find replacement parts for my steam press machine?'
				: 'أين يمكنني العثور على قطع غيار لآلة الضغط البخارية الخاصة بي؟',
			answer: !isEnglish
				? 'You can find replacement parts for your steam press machine on our website or by contacting our customer support team.'
				: 'يمكنك العثور على قطع غيار لآلة الضغط البخارية الخاصة بك على موقعنا الإلكتروني أو عن طريق الاتصال بفريق دعم العملاء لدينا.',
		},
		{
			question: !isEnglish
				? 'What types of industrial laundry machines do you offer?'
				: 'ما هي أنواع آلات الغسيل الصناعية التي تقدمها؟',
			answer: !isEnglish
				? 'We offer a wide range of industrial laundry machines, including washer-extractors, dryers, ironers, and folders. Our machines are designed to handle various capacities and types of laundry loads, catering to the needs of different businesses.'
				: 'نحن نقدم مجموعة واسعة من آلات الغسيل الصناعية، بما في ذلك الغسالات والمجففات والمكاوي والمجلدات. تم تصميم أجهزتنا للتعامل مع مختلف السعات والأنواع من أحمال الغسيل، بما يلبي احتياجات الشركات المختلفة.',
		},
	];

	return (
		<section className='py-10 bg-gray-50 sm:py-16 lg:py-24'>
			<div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
				<div className='max-w-2xl mx-auto text-center'>
					<h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl'>
						Frequently Asked Questions
					</h2>
				</div>

				<div className='max-w-3xl mx-auto mt-8 space-y-4 md:mt-16'>
					{faqData.map((faq, index) => (
						<div
							key={index}
							className='transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50'
							onClick={() => handleToggle(index)}>
							<button
								type='button'
								className='flex items-center justify-between w-full px-4 py-5 sm:p-6'>
								<span className='flex text-lg font-semibold text-black'>
									{faq.question}
								</span>
								<svg
									className={`w-6 h-6 text-gray-400 transform ${
										openIndex === index ? 'rotate-180' : ''
									}`}
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M19 9l-7 7-7-7'
									/>
								</svg>
							</button>

							<div
								className={`${
									openIndex === index ? 'block' : 'hidden'
								} px-4 pb-5 sm:px-6 sm:pb-6`}>
								<p>{faq.answer}</p>
							</div>
						</div>
					))}
				</div>

				<p className='text-center text-gray-600 textbase mt-9'>
					{!isEnglish
						? 'Did not find the answer you are looking for?'
						: 'لم تجد الجواب الذي تبحث عنه؟'}
					<Link
						to='/contact-us'
						title=''
						className='font-medium text-inRed mx-4 transition-all duration-200 hover:underline'>
						{!isEnglish ? 'Contact our support' : 'اتصل بدعمنا'}
					</Link>
				</p>
			</div>
		</section>
	);
};

export default Faq;
