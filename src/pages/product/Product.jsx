import Banner from '../../components/banner/Banner';
import BannerImage from '../../assets/images/bannerImages/products.jpg';
import Cta from '../../components/cta/Cta';
import Faq from '../../components/faq/Faq';
import ProductsList from '../../components/products/ProductsList';
import Breadcrumb from '../../components/breadCrumb/BreadCrumb';

import { LanguageContext } from '../../context/LanguageContextMain';
import { useContext } from 'react';

const Product = () => {
	const { isEnglish } = useContext(LanguageContext);

	return (
		<>
			<Breadcrumb />
			<Banner
				headline={
					!isEnglish
						? 'Explore Our Range of Laundry Equipment and Spare Parts'
						: 'استكشف مجموعتنا من معدات الغسيل وقطع الغيار'
				}
				subheading={
					!isEnglish
						? 'Find everything you need for your laundry business under one roof'
						: 'ابحث عن كل ما تحتاجه لأعمال الغسيل الخاصة بك تحت سقف واحد'
				}
				bannerImage={BannerImage}
			/>
			<ProductsList />
			<Cta />
			<Faq />
		</>
	);
};

export default Product;
