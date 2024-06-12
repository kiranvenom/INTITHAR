import React from 'react';
import { MdHome } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter((x) => x);

	return (
		<nav className='flex bg-slate-200 py-8 pl-14' aria-label='breadcrumb'>
			<ol className='flex items-center space-x-2'>
				<li>
					<Link to='/' className='text-inRed hover:underline'>
						<MdHome size={25} className='mr-3' />
					</Link>
				</li>
				&gt;
				{pathnames.map((name, index) => {
					const routeTo = `/${pathnames
						.slice(0, index + 1)
						.join('/')}`;
					const isLast = index === pathnames.length - 1;
					return (
						<React.Fragment key={name}>
							<span
								className={
									isLast
										? 'text-gray-500 capitalize'
										: 'text-inRed capitalize'
								}>
								{isLast ? (
									name
								) : (
									<Link
										to={routeTo}
										className='hover:underline'>
										{name}
									</Link>
								)}
							</span>
							{!isLast && (
								<span className='text-gray-500 mx-1'>&gt;</span>
							)}
						</React.Fragment>
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
