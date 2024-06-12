import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Toggle from '../toggle/Toggle';

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleToggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleNavLinkClick = () => {
		setIsMenuOpen(false);
		setIsDropdownOpen(false);
	};

	const handleToggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<>
			<nav className='fixed top-0 left-0 w-full bg-white border-gray-200 dark:bg-gray-900 z-10 shadow-md'>
				<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
					<NavLink
						to='/'
						className='flex items-center space-x-3 rtl:space-x-reverse'>
						<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-inRed uppercase'>
							Intithar Trading Est
						</span>
					</NavLink>
					<button
						onClick={handleToggleMenu}
						type='button'
						className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
						aria-controls='navbar-default'
						aria-expanded={isMenuOpen}>
						<span className='sr-only'>Open main menu</span>
						<svg
							className='w-5 h-5'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 17 14'>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M1 1h15M1 7h15M1 13h15'
							/>
						</svg>
					</button>
					<div
						className={`${
							isMenuOpen ? 'block' : 'hidden'
						} w-full md:block md:w-auto`}
						id='navbar-default'>
						<ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
							<li>
								<NavLink
									to='/'
									className='flex items-center py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-inRed md:p-0 dark:text-gray-400 md:dark:hover:text-inRed dark:hover:bg-gray-700 dark:hover:text-gray-400 md:dark:hover:bg-transparent'
									aria-current='page'
									onClick={handleNavLinkClick}>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/about-us'
									className='block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-inRed md:p-0 dark:text-gray-400 md:dark:hover:text-inRed dark:hover:bg-gray-700 dark:hover:text-gray-400 md:dark:hover:bg-transparent'
									onClick={handleNavLinkClick}>
									About Us
								</NavLink>
							</li>
							<li className='relative'>
								<button
									onClick={handleToggleDropdown}
									className='flex items-center py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-inRed md:p-0 dark:text-gray-400 md:dark:hover:text-inRed dark:hover:bg-gray-700 dark:hover:text-gray-400 md:dark:hover:bg-transparent'>
									Products
									<svg
										className='w-4 h-4 ml-1'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M19 9l-7 7-7-7'></path>
									</svg>
								</button>
								<ul
									className={`${
										isDropdownOpen ? 'block' : 'hidden'
									} absolute left-0 w-full md:w-auto mt-2 py-2 bg-white border border-gray-200 rounded-md shadow-lg md:absolute md:left-auto md:top-full md:mt-0 md:bg-gray-50 md:dark:bg-gray-900 dark:border-gray-700 z-50`}>
									<li>	
										<NavLink
											to='/products/equipment'
											className='block py-2 px-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-inRed dark:text-gray-400 md:dark:hover:text-inRed dark:hover:bg-gray-700 dark:hover:text-gray-400 md:dark:hover:bg-transparent'
											onClick={handleNavLinkClick}>
											Equipments
										</NavLink>
									</li>
									<li>
										<NavLink
											to='/products/spare-parts'
											className='block py-2 px-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-inRed dark:text-gray-400 md:dark:hover:text-inRed dark:hover:bg-gray-700 dark:hover:text-gray-400 md:dark:hover:bg-transparent'
											onClick={handleNavLinkClick}>
											Spare Parts
										</NavLink>
									</li>
								</ul>
							</li>
							<li>
								<NavLink
									to='/contact-us'
									className='block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-inRed md:p-0 dark:text-gray-400 md:dark:hover:text-inRed dark:hover:bg-gray-700 dark:hover:text-gray-400 md:dark:hover:bg-transparent'
									onClick={handleNavLinkClick}>
									Contact
								</NavLink>
							</li>
							<Toggle />
						</ul>
					</div>
				</div>
			</nav>
			<div className='pt-16'></div>
		</>
	);
};

export default Nav;
