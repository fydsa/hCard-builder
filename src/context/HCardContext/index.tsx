import { createContext, useState, useContext } from 'react';

const HCardContext = createContext<any>(null); // TODO: handle the type

export const HCardContextProvider = ({ chidlren }: any) => {
	const [hCardFields, setHCardFields] = useState({
		name: '',
		surname: '',
		email: '',
		phone: '',
		houseName: '',
		street: '',
		suburb: '',
		postcode: '',
		country: '',
	});

	const [hCardImage, setHCardImage] = useState<any>(null);

	return (
		<HCardContext.Provider
			value={{ hCardFields, hCardImage, setHCardFields, setHCardImage }}
		>
			{chidlren}
		</HCardContext.Provider>
	);
};

// NOTE: This hook is defined to make the use of context easier by minimizing the required imports
export const useHCardContext = () => {
	const context = useContext(HCardContext);
	return context;
};
