import { LanguageContext } from '../../context/LanguageContextMain';
import { useContext } from 'react';

import { RiMapPinTimeLine } from 'react-icons/ri';
import { FaRegHandshake } from 'react-icons/fa';
import { HiOutlineTrophy } from 'react-icons/hi2';
import { TbHeartHandshake } from 'react-icons/tb';

const SocialProofs = () => {
	const { isEnglish } = useContext(LanguageContext);

	return (
		<section className='p-10 bg-white rounded-xl shadow-xl max-w-3xl mx-auto text-center mt-8'>
			<div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-8 text-lg text-gray-700'>
				<div className='flex flex-col items-center gap-6'>
					<span className='text-4xl mr-4'>
						<RiMapPinTimeLine className='text-inRed' />
					</span>
					<p>
						{!isEnglish
							? '24+ experience.'
							: '24+ عامًا من الخبرة في الصناعة.'}
					</p>
				</div>
				<div className='flex flex-col items-center gap-6'>
					<span className='text-4xl mr-4'>
						<FaRegHandshake className='text-inRed' />
					</span>
					<p>
						{!isEnglish
							? '1000+ satisfied clients.'
							: 'خدمة أكثر من 1000 عميل راضٍ.'}
					</p>
				</div>
				<div className='flex flex-col items-center gap-6'>
					<span className='text-4xl mr-4'>
						<HiOutlineTrophy className='text-inRed' />
					</span>
					<p>{!isEnglish ? 'Proven Track Record' : 'سجل حافل'}</p>
				</div>
				<div className='flex flex-col items-center gap-6'>
					<span className='text-4xl mr-4'>
						<TbHeartHandshake className='text-inRed' />
					</span>
					<p>
						{!isEnglish
							? 'excellence and satisfaction.'
							: 'التميز والرضا.'}
					</p>
				</div>
			</div>
		</section>
	);
};

export default SocialProofs;
