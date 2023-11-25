import { emailRegex, phoneNumberRegex } from '@/utils/validators';
import { RegisterOptions } from 'react-hook-form';

export const emailValidator: RegisterOptions = {
	pattern: {
		value: emailRegex,
		message: 'Must be a valid email address',
	},
};

export const phoneNumberValidator: RegisterOptions = {
	pattern: {
		value: phoneNumberRegex,
		message: 'Must be a valid phone number',
	},
};
