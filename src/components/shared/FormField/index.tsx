import { RegisterOptions, useFormContext, Controller } from 'react-hook-form';
import { Input } from '../Input';
import styles from './index.module.scss';

type FieldType = 'text' | 'email' | 'tel';
// | 'date'
// | 'select'
// | 'textarea'
// | 'radio'
// | 'checkbox'; //NOTE: Commented out the unused types

type PropTypes = {
	type?: FieldType;
	name: string;
	label?: string;
	rules?: RegisterOptions;
};

export const FormField = ({ label, name, type, rules, ...props }: any) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	return (
		<div className={styles.formField}>
			<label>{label}</label>
			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({ field }) => (
					<Input
						type={type}
						aria-invalid={errors[name] ? 'true' : 'false'}
						{...field}
						{...props}
					/>
				)}
			/>
			{errors[name] && (
				<p className={styles.errorMessage}>
					{errors[name]?.message as string}
				</p>
			)}
		</div>
	);
};
