import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { HCardFields } from '@/utils/enums';

type ImageType = string | null;

type HCardSliceState = {
	fields: { [key in HCardFields]: string };
	image: ImageType;
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
		state: '',
		postcode: '',
		country: '',
	},
	image: null,
};

export const hCardSlice = createSlice({
	name: 'hCard',
	initialState,
	reducers: {
		setFields: (
			state: HCardSliceState,
			action: PayloadAction<{ field: HCardFields; value: string }>
		) => {
			const { field, value } = action.payload;
			state.fields[field] = value;
		},
		setImage: (
			state: HCardSliceState,
			action: PayloadAction<{
				value: ImageType;
			}>
		) => {
			const { value } = action.payload;
			state.image = value;
		},
	},
});
