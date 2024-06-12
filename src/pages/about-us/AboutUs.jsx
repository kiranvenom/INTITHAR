import Banner from '../../components/banner/Banner';
import BannerImage from '../../assets/images/bannerImages/about.jpg';
import Breadcrumb from '../../components/breadCrumb/BreadCrumb';
import Cta from '../../components/cta/Cta';
import OurServices from '../../components/ourServices/OurServices';
import OurValue from '../../components/ourValue/OurValue';

import { LanguageContext } from '../../context/LanguageContextMain';
import { useContext } from 'react';

const AboutUs = () => {
	const { isEnglish } = useContext(LanguageContext);

	return (
		<>
			<Breadcrumb />
			<Banner
				headline={
					!isEnglish
						? 'Welcome to Intithar Trading Est.'
						: 'مرحبا بكم في مؤسسة إنتصار للتجارة.'
				}
				subheading={
					!isEnglish
						? 'Your trusted partner for high-quality laundry equipment and spare parts'
						: 'شريكك الموثوق به لمعدات الغسيل وقطع الغيار عالية الجودة'
				}
				bannerImage={BannerImage}
			/>
			<OurValue />
			<OurServices />
			<Cta />
		</>
	);
};

export default AboutUs;
