import {
	RegisterOptions,
	useFormContext,
	Controller,
	FieldValues,
} from 'react-hook-form';
import { Input, PropTypes as InputPropTypes } from '../Input';
import styles from './index.module.scss';

type FieldType = 'text' | 'email' | 'tel';
// | 'date'
// | 'select'
// | 'textarea'
// | 'radio'
// | 'checkbox'; //NOTE: Commented out the unused types

type PropTypes = {
	type?: FieldType;
	label?: string;
	name: string;
	rules?: RegisterOptions;
} & InputPropTypes;

export const FormField = ({
	label,
	name,
	type,
	rules,
	...props
}: PropTypes) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	return (
		<div className={styles.formField} data-cy={`${name}-field`}>
			<label>{label}</label>
			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({ field }: FieldValues) => {
					const { ref, ...otherFieldProps } = field; //NOTE: Excluded ref to resolve browser warning of passing ref to input
					return (
						<Input
							type={type}
							aria-invalid={errors[name] ? 'true' : 'false'}
							{...otherFieldProps}
							{...props}
						/>
					);
				}}
			/>
			{errors[name] && (
				<p className={styles.errorMessage}>
					{errors[name]?.message as string}
				</p>
			)}
		</div>
	);
};
