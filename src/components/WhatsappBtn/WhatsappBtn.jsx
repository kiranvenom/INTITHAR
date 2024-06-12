import { BsWhatsapp } from 'react-icons/bs';
const WhatsappBtn = () => {
	return (
		<div id='whatsappStick'>
			<div className='container'>
				<div className='whatsappBtn'>
					<div className='bg'></div>
					<div className='button whatsappButton'>
						<a
							href='https://api.whatsapp.com/send?phone=966563647186&text=Intithar Laundry Equipments, Boilers and Spare Parts'
							target='_blank'>
							<BsWhatsapp size={30} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhatsappBtn;
