import Banner from '../../components/banner/Banner';
import BannerImage from '../../assets/images/bannerImages/home.jpg';
import AboutUs from '../../components/aboutus/AboutUs';
import Cta from '../../components/cta/Cta';
import ProductsList from '../../components/products/ProductsList';
import WhyChooseUs from '../../components/whyChooseUs/WhyChooseUs';

import { LanguageContext } from '../../context/LanguageContextMain';
import { useContext } from 'react';

const Home = () => {
	const { isEnglish } = useContext(LanguageContext);

	return (
		<>
			<div className='bg-gray-50 pt-10'>
				<div className='maxW px-4 md:px-0'>
					<h2 className='font-semibold text-2xl'>
						Intithar Laundry Equipments, Boilers and Spare Parts
					</h2>
				</div>
			</div>

			<Banner
				headline={
					!isEnglish
						? 'Revolutionize Your Laundry Business with Complete Equipment Solutions '
						: 'أحدث ثورة في أعمال غسيل الملابس الخاصة بك مع حلول المعدات المتكاملة'
				}
				subheading={
					!isEnglish
						? 'We provide high-quality laundry equipment, spare parts, and expert after-sales services.'
						: 'العنوان الفرعي: انتظار توفر معدات غسيل عالية الجودة وقطع غيار وخدمات ما بعد البيع'
				}
				bannerImage={BannerImage}
			/>

			<AboutUs />
			<ProductsList />
			<Cta />
			<WhyChooseUs />
		</>
	);
};

export default Home;
