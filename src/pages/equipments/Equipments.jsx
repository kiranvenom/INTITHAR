import Banner from '../../components/banner/Banner';
import BannerImage from '../../assets/images/bannerImages/equipment.jpg';
import Breadcrumb from '../../components/breadCrumb/BreadCrumb';
import Cta from '../../components/cta/Cta';
import ImageBox from '../../components/imageBox/ImageBox';

import { LanguageContext } from '../../context/LanguageContextMain';
import { useContext } from 'react';

const Equipments = () => {
	const { isEnglish } = useContext(LanguageContext);

	return (
		<>
			<Breadcrumb />
			<Banner
				headline={
					!isEnglish
						? 'Industrial Laundry Equipment'
						: 'معدات الغسيل الصناعية'
				}
				subheading={
					!isEnglish
						? 'Discover high-performance equipment for your laundry business'
						: 'اكتشف معدات عالية الأداء لأعمال الغسيل الخاصة بك'
				}
				bannerImage={BannerImage}
			/>
			<ImageBox />
			<Cta />
		</>
	);
};

export default Equipments;
