import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
	const [isEnglish, setIsEnglish] = useState(false);

	const toggleLanguage = () => {
		setIsEnglish((prev) => !prev);
	};

	return (
		<LanguageContext.Provider value={{ isEnglish, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export { LanguageContext, LanguageProvider };
