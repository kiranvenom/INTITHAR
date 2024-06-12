import Card from '../card/Card';
import SteamBoiler1 from '../../assets/images/eqipments/SteamBoiler1.jpeg';
import SteamBoiler2 from '../../assets/images/eqipments/SteamBoiler2.jpeg';
import SteamBoiler3 from '../../assets/images/eqipments/SteamBoiler3.jpeg';
import SteamBoiler4 from '../../assets/images/eqipments/SteamBoiler4.jpeg';
import pressMachine1 from '../../assets/images/eqipments/pressMachine1.jpeg';
import pressMachine2 from '../../assets/images/eqipments/pressMachine2.jpeg';
import pressMachine3 from '../../assets/images/eqipments/pressMachine3.jpg';
import Dryer from '../../assets/images/eqipments/Dryer.jpg';
import WashExtractor from '../../assets/images/eqipments/WashExtractor.jpg';
import conveyor from '../../assets/images/eqipments/conveyor.jpg';
import OilBurner1 from '../../assets/images/eqipments/OilBurner1.jpeg';
import OilBurner2 from '../../assets/images/eqipments/OilBurner2.jpeg';
import ElectricBoiler from '../../assets/images/eqipments/ElectricBoiler.jpg';

import { LanguageContext } from '../../context/LanguageContextMain';
import { useContext } from 'react';

const ImageBox = () => {
	const { isEnglish } = useContext(LanguageContext);

	const equipmentsDataLocalized = [
		{
			key: { en: 'Steam Boiler (Diesel)', ar: 'غلاية بخار (ديزل)' },
			image: [SteamBoiler1, SteamBoiler2, SteamBoiler3, SteamBoiler4],
			description: {
				en: 'Efficient and robust steam boilers designed for high-performance laundry operations. Ideal for large-scale commercial laundry businesses.',
				ar: 'غلايات بخار فعالة ومتينة مصممة لعمليات الغسيل ذات الأداء العالي. مثالية للأعمال التجارية الكبيرة في مجال الغسيل.',
			},
		},
		{
			key: { en: 'Press Machine', ar: 'آلة ضغط' },
			image: [pressMachine2, pressMachine1, pressMachine3],
			description: {
				en: 'Reliable press machines that ensure crisp and professional finishing for all types of laundry items. Perfect for enhancing productivity.',
				ar: 'آلات ضغط موثوقة تضمن تشطيبًا نقيًا واحترافيًا لجميع أنواع الملابس. مثالية لتعزيز الإنتاجية.',
			},
		},
		{
			key: { en: 'Dryer', ar: 'مجفف' },
			image: [Dryer],
			description: {
				en: 'High-capacity dryers that offer quick and effective drying solutions. Built for durability and optimal performance.',
				ar: 'مجففات ذات سعة كبيرة توفر حلول تجفيف سريعة وفعالة. مصممة لتكون متينة وتعمل بأداء أمثل.',
			},
		},
		{
			key: { en: 'Wash Extractor', ar: 'مستخلص غسيل' },
			image: [WashExtractor],
			description: {
				en: 'Powerful wash extractors that deliver thorough cleaning and efficient water extraction. Essential for maintaining high laundry standards.',
				ar: 'مستخلصات غسيل قوية توفر تنظيفًا شاملاً واستخراجًا فعالاً للماء. أساسية للحفاظ على معايير غسيل عالية.',
			},
		},
		{
			key: { en: 'Conveyor', ar: 'ناقل' },
			image: [conveyor],
			description: {
				en: 'Robust conveyors that facilitate smooth and efficient transportation of laundry items within the facility. Designed to streamline operations.',
				ar: 'ناقلات متينة تسهل النقل السلس والفعال لأغراض الغسيل داخل المنشأة. مصممة لتبسيط العمليات.',
			},
		},
		{
			key: { en: 'Oil Burner', ar: 'موقد زيت' },
			image: [OilBurner1, OilBurner2],
			description: {
				en: 'High-efficiency oil burners that provide consistent and reliable heating for various laundry equipment. Ensures optimal energy usage.',
				ar: 'موقدات زيت عالية الكفاءة توفر تسخينًا ثابتًا وموثوقًا لمعدات الغسيل المختلفة. تضمن الاستخدام الأمثل للطاقة.',
			},
		},
		{
			key: { en: 'Electric Boiler', ar: 'غلاية كهربائية' },
			image: [ElectricBoiler],
			description: {
				en: 'Eco-friendly electric boilers that offer a clean and efficient heating solution. Ideal for modern and sustainable laundry operations.',
				ar: 'غلايات كهربائية صديقة للبيئة توفر حلاً نظيفًا وفعالًا للتدفئة. مثالية للعمليات الغسيل الحديثة والمستدامة.',
			},
		},
	];

	const equipmentsData = equipmentsDataLocalized.reduce((acc, item) => {
		const key = !isEnglish ? item.key.en : item.key.ar;
		acc[key] = {
			image: item.image,
			Description: !isEnglish ? item.description.en : item.description.ar,
		};
		return acc;
	}, {});

	// console.log(equipmentsData['Steam Boiler (Diesel)']);

	return (
		<>
			<div className='maxW py-10'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{Object.keys(equipmentsData).map((key) => (
						<Card
							key={key}
							title={key}
							imageUrls={equipmentsData[key].image}
							description={equipmentsData[key].Description}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default ImageBox;
