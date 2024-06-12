import SocialProofs from '../SocialProofs/SocialProofs';
import { LanguageContext } from '../../context/LanguageContextMain';
import { useContext } from 'react';

const AboutUs = () => {
	const { isEnglish } = useContext(LanguageContext);

	return (
		<section className='py-10 bg-inRed flex justify-center'>
			<div className='max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 flex flex-col items-center'>
				<div className='flex flex-col items-center'>
					<h2 className='text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-4xl text-center'>
						{!isEnglish
							? 'Welcome to Intithar Trading Est.'
							: 'مرحبا بكم في مؤسسة إنتصار للتجارة.'}
					</h2>
					<p className='mt-4 text-white text-center max-w-[600px]'>
						{!isEnglish
							? 'Intithar Trading Est. is a leading provider of high-quality laundry equipment and spare parts. We specialize in offering a comprehensive range of industrial laundry equipment and spare parts.'
							: 'مؤسسة إنتصار التجارية. هي شركة رائدة في مجال توفير معدات الغسيل وقطع الغيار عالية الجودة. نحن متخصصون في تقديم مجموعة شاملة من معدات المغاسل الصناعية وقطع الغيار.'}
					</p>
				</div>
				<SocialProofs />
			</div>
		</section>
	);
};

export default AboutUs;
