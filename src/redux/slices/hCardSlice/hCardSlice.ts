import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type HCardFieldsType = {
	name: string;
	surname: string;
	email: string;
	phone: string;
	houseName: string;
	street: string;
	suburb: string;
	postcode: string;
	country: string;
};

type HCardSliceState = {
	fields: HCardFieldsType;
	image: any;
};

const initialState: HCardSliceState = {
	fields: {
		name: '',
		surname: '',
		email: '',
		phone: '',
		houseName: '',
		street: '',
		suburb: '',
		postcode: '',
		country: '',
	},
	image: null,
};

export const hCardSlice = createSlice({
	name: 'hCard',
	initialState,
	reducers: {
		setFields: (state: any, action) => {
			const { field, value } = action.payload;
			state.fields[field] = value;
		},
		setImage: (state: any, action) => {
			const { value } = action.payload;
			state.image = value;
		},
	},
});
