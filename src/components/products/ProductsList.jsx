import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import { LanguageContext } from '../../context/LanguageContextMain';
import { useContext } from 'react';

import eq from '../../assets/images/bannerImages/equipment.jpg';
import spare from '../../assets/images/bannerImages/spare.jpg';

const ProductsList = () => {
	const { isEnglish } = useContext(LanguageContext);

	return (
		<section className='p-10 rounded-xl max-w-5xl mx-auto text-center'>
			<h2 className='text-4xl font-extrabold text-gray-900 mb-4'>
				{!isEnglish ? 'Our Main Products' : 'منتجاتنا الرئيسية'}
			</h2>
			<p className='text-lg text-gray-700 mb-8'>
				{!isEnglish
					? 'Explore our top-quality laundry equipment and spare parts designed to meet all your business needs.'
					: 'استكشف معدات الغسيل وقطع الغيار عالية الجودة لدينا  مصممة لتلبية جميع احتياجات عملك.'}
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<div className='p-2 pb-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-[#CB463C] group'>
					<img
						src={eq}
						alt='Equipments'
						className='w-full h-48 object-cover rounded-t-lg mb-4'
					/>
					<h3 className='text-2xl font-bold text-gray-800 mb-4 group-hover:text-white'>
						{!isEnglish ? 'Equipments' : 'المعدات'}
					</h3>
					<p className='text-gray-600 mb-6 group-hover:text-white min-h-[150px]'>
						{!isEnglish
							? 'Discover our range of industrial laundry equipment, including steam boilers, press machines, dryers, and more. Each piece of equipment is built to enhance the efficiency and productivity of your laundry operations.'
							: 'اكتشف مجموعتنا من معدات الغسيل الصناعي،  بما في ذلك الغلايات البخارية وآلات الضغط والمجففات و   أكثر. تم تصميم كل قطعة من المعدات لتعزيز  كفاءة وإنتاجية عمليات الغسيل الخاصة بك.'}
					</p>
					<Link
						to='/products/equipment'
						className='inline-block mt-4 px-6 py-3 border border-black font-semibold rounded-full transition duration-300 group-hover:text-white group-hover:border-white'>
						<div className='flex items-center gap-6'>
							<span>
								{!isEnglish ? 'View Equipments' : 'عرض المعدات'}
							</span>
							<FaArrowRightLong />
						</div>
					</Link>
				</div>
				<div className='p-2 pb-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-[#CB463C] group'>
					<img
						src={spare}
						alt='Spare Parts'
						className='w-full h-48 object-cover rounded-t-lg mb-4'
					/>
					<h3 className='text-2xl font-bold text-gray-800 mb-4 group-hover:text-white'>
						{!isEnglish ? 'Spare Parts' : 'قطعة منفصلة'}
					</h3>
					<p className='text-gray-600 mb-6 group-hover:text-white min-h-[150px]'>
						{!isEnglish
							? 'Explore our extensive selection of spare parts for all types of laundry equipment. We high-quality, reliable components for burners, boilers, press machines, and more, ensuring your machines remain operational and efficient.'
							: 'استكشف مجموعتنا الواسعة من قطع الغيار للجميع أنواع معدات الغسيل. نحن نقدم جودة عالية، مكونات موثوقة للشعلات والغلايات والصحافة الآلات، وأكثر من ذلك، مما يضمن بقاء أجهزتك عملية وفعالة.'}
					</p>
					<Link
						to='/products/spare-parts'
						className='inline-block mt-4 px-6 py-3 border border-black font-semibold rounded-full transition duration-300 group-hover:text-white group-hover:border-white'>
						<div className='flex items-center gap-6'>
							<span>
								{!isEnglish
									? 'View Spare Parts'
									: 'عرض قطع الغيار'}
							</span>
							<FaArrowRightLong />
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ProductsList;
