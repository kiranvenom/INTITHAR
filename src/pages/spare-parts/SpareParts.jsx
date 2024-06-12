import BannerImage from '../../assets/images/bannerImages/spare.jpg';

import BallValve from '../../assets/images/spareParts/BallValve.jpg';
import Pressurecontrol from '../../assets/images/spareParts/Pressurecontrol.jpg';
import Watercutoff from '../../assets/images/spareParts/Watercutoff.jpg';
import CheckValve from '../../assets/images/spareParts/CheckValve.jpg';
import SafetyValve from '../../assets/images/spareParts/SafetyValve.jpg';
import PressureGauge from '../../assets/images/spareParts/PressureGauge.jpg';
import WaterPump from '../../assets/images/spareParts/WaterPump.jpg';

import Buckvalve from '../../assets/images/spareParts/Buckvalve.jpg';
import Pressingpad from '../../assets/images/spareParts/Pressingpad.jpg';
import Gridplate from '../../assets/images/spareParts/Gridplate.jpg';
import Steamtrap from '../../assets/images/spareParts/Steamtrap.jpg';

import Heatercoil from '../../assets/images/spareParts/Heatercoil.jpg';
import Nozzels from '../../assets/images/spareParts/Nozzels.jpg';
import floatingball from '../../assets/images/spareParts/floatingball.jpg';
import diffuser from '../../assets/images/spareParts/diffuser.jpg';
import Burnerfan from '../../assets/images/spareParts/Burnerfan.jpg';
import Electrode from '../../assets/images/spareParts/Electrode.jpg';
import Steelvaccum from '../../assets/images/spareParts/Steelvaccum.jpg';
import SteelSpring from '../../assets/images/spareParts/SteelSpring.jpg';
import SteamRadiators from '../../assets/images/spareParts/SteamRadiators.jpeg';
import DieselFilter from '../../assets/images/spareParts/DieselFilter.jpg';
import coupling from '../../assets/images/spareParts/coupling.jpg';
import DieselHose from '../../assets/images/spareParts/DieselHose.jpg';

import Banner from '../../components/banner/Banner';
import Breadcrumb from '../../components/breadCrumb/BreadCrumb';
import Cta from '../../components/cta/Cta';
import Tabs from '../../components/tabs/Tabs';

import ControlBox from '../../assets/images/spareParts/ControlBox.jpg';
import Photocell from '../../assets/images/spareParts/Photocell.jpg';
import Dieselpump from '../../assets/images/spareParts/Dieselpump.jpg';
import Tranformer from '../../assets/images/spareParts/Tranformer.jpg';
import BurnerMotor from '../../assets/images/spareParts/BurnerMotor.jpg';
import copperpipe from '../../assets/images/spareParts/copperpipe.jpeg';
import nozzleholder from '../../assets/images/spareParts/nozzleholder.jpeg';
import coilparker from '../../assets/images/spareParts/coilparker.jpeg';
import coil from '../../assets/images/spareParts/coil.jpeg';

import ImageTitle from '../../components/imageTitle/ImageTitle';
import { LanguageContext } from '../../context/LanguageContextMain';
import { useContext } from 'react';

const SpareParts = () => {
	const { isEnglish } = useContext(LanguageContext);

	const SparePartsforBurnersData = [
		{
			name: !isEnglish ? 'Control Box' : 'صندوق التحكم',
			imsSrc: ControlBox,
		},
		{
			name: !isEnglish ? 'Photo Cell' : 'خلية ضوئية',
			imsSrc: Photocell,
		},
		{
			name: !isEnglish ? 'Diesel Pump' : 'مضخة ديزل',
			imsSrc: Dieselpump,
		},
		{
			name: !isEnglish ? 'Tranformer' : 'محول',
			imsSrc: Tranformer,
		},
		{
			name: !isEnglish ? 'Burner Motor' : 'محرك الموقد',
			imsSrc: BurnerMotor,
		},
		{
			name: !isEnglish ? 'Copper Pipe' : 'أنابيب النحاس',
			imsSrc: copperpipe,
		},
		{
			name: !isEnglish ? 'Nozzle Holder' : 'حامل فوهة',
			imsSrc: nozzleholder,
		},
		{
			name: !isEnglish ? 'Coil Parker' : 'باركر لفائف',
			imsSrc: coilparker,
		},
		{
			name: !isEnglish ? 'Coil' : 'باركر ',
			imsSrc: coil,
		},
	];

	const SparepartsforBoilerData = [
		{
			name: !isEnglish ? 'Ball Valve' : 'صمام كروي',
			imsSrc: BallValve,
		},
		{
			name: !isEnglish ? 'Pressure Control' : 'تحكم في الضغط',
			imsSrc: Pressurecontrol,
		},
		{
			name: !isEnglish ? 'Water Cutoff' : 'قطع المياه',
			imsSrc: Watercutoff,
		},
		{
			name: !isEnglish ? 'Water Pump' : 'مضخة مياه',
			imsSrc: WaterPump,
		},
		{
			name: !isEnglish ? 'Check Valve' : 'صمام فحص',
			imsSrc: CheckValve,
		},
		{
			name: !isEnglish ? 'Safety Valve' : 'صمام أمان',
			imsSrc: SafetyValve,
		},
		{
			name: !isEnglish ? 'Pressure Gauge' : 'مقياس الضغط',
			imsSrc: PressureGauge,
		},
	];

	const SparepartsforPressMachineData = [
		{
			name: !isEnglish ? 'Buck Valve' : 'صمام باك',
			imsSrc: Buckvalve,
		},
		{
			name: !isEnglish ? 'Pressing Pad' : 'وسادة الضغط',
			imsSrc: Pressingpad,
		},
		{
			name: !isEnglish ? 'Grid Plate' : 'لوحة شبكية',
			imsSrc: Gridplate,
		},
		{
			name: !isEnglish ? 'Steam Trap' : 'فخ البخار',
			imsSrc: Steamtrap,
		},
	];

	const GeneralSparepartsData = [
		{
			name: !isEnglish ? 'Heater Coil' : 'ملف التسخين',
			imsSrc: Heatercoil,
		},
		{
			name: !isEnglish ? 'Nozzles' : 'فوهات',
			imsSrc: Nozzels,
		},
		{
			name: !isEnglish ? 'Floating Ball' : 'الكرة العائمة',
			imsSrc: floatingball,
		},
		{
			name: !isEnglish ? 'Diffuser' : 'الناشر',
			imsSrc: diffuser,
		},
		{
			name: !isEnglish ? 'Burner Fan' : 'مروحة الموقد',
			imsSrc: Burnerfan,
		},
		{
			name: !isEnglish ? 'Electrode' : 'قطب كهربائي',
			imsSrc: Electrode,
		},
		{
			name: !isEnglish ? 'Steel Vacuum' : 'فراغ الصلب',
			imsSrc: Steelvaccum,
		},
		{
			name: !isEnglish ? 'Steel Spring' : 'ربيع الصلب',
			imsSrc: SteelSpring,
		},
		{
			name: !isEnglish ? 'Steam Radiators' : 'مشعات البخار',
			imsSrc: SteamRadiators,
		},
		{
			name: !isEnglish ? 'Diesel Filter' : 'فلتر ديزل',
			imsSrc: DieselFilter,
		},
		{
			name: !isEnglish ? 'coupling' : 'اقتران',
			imsSrc: coupling,
		},
		{
			name: !isEnglish ? 'Diesel Hose' : 'خرطوم الديزل',
			imsSrc: DieselHose,
		},
	];

	const tabContent = {
		[!isEnglish ? 'Spare Parts for Burners' : 'قطع غيار للمحارق']: (
			<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
				{SparePartsforBurnersData.map((data, index) => {
					return (
						<ImageTitle
							key={index}
							title={data.name}
							imageUrl={data.imsSrc}
						/>
					);
				})}
			</div>
		),
		[!isEnglish ? 'Spare Parts for Boilers' : 'قطع غيار للمراجل']: (
			<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
				{SparepartsforBoilerData.map((data, index) => {
					return (
						<ImageTitle
							key={index}
							title={data.name}
							imageUrl={data.imsSrc}
						/>
					);
				})}
			</div>
		),
		[!isEnglish
			? 'Spare Parts for Press Machines'
			: 'قطع غيار لآلات الكبس']: (
			<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
				{SparepartsforPressMachineData.map((data, index) => {
					return (
						<ImageTitle
							key={index}
							title={data.name}
							imageUrl={data.imsSrc}
						/>
					);
				})}
			</div>
		),
		[!isEnglish ? 'General Spare Parts' : 'قطع غيار عامة']: (
			<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
				{GeneralSparepartsData.map((data, index) => {
					return (
						<ImageTitle
							key={index}
							title={data.name}
							imageUrl={data.imsSrc}
						/>
					);
				})}
			</div>
		),
	};

	return (
		<>
			<Breadcrumb />
			<Banner
				headline={
					!isEnglish
						? 'High-Quality Laundry Spare Parts'
						: 'قطع غيار غسيل عالية الجودة'
				}
				subheading={
					!isEnglish
						? 'Keep your laundry equipment running smoothly with our comprehensive range of spare parts'
						: 'حافظ على تشغيل معدات الغسيل الخاصة بك بسلاسة مع مجموعتنا الشاملة من قطع الغيار'
				}
				bannerImage={BannerImage}
			/>
			<div className='maxW py-14'>
				<Tabs tabs={tabContent} />
			</div>
			<Cta />
		</>
	);
};

export default SpareParts;
