import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

	return (
		<div>
			<div className='flex flex-wrap border-b border-gray-300'>
				{Object.keys(tabs).map((tab) => (
					<button
						key={tab}
						className={`w-full md:w-auto py-2 px-4 text-sm font-medium ${
							activeTab === tab
								? 'border-b-2 border-inRed text-white text-xl bg-inRed'
								: 'text-gray-500 text-base'
						} focus:outline-none`}
						onClick={() => setActiveTab(tab)}>
						{tab}
					</button>
				))}
			</div>
			<div className='p-4'>{tabs[activeTab]}</div>
		</div>
	);
};

export default Tabs;
