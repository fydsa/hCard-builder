'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '../shared/Button';
import { UploadButton } from '../shared/UploadButton';
import { FormField } from '../shared/FormField';
import {
	emailValidator,
	phoneNumberValidator,
} from '../shared/FormField/utils';
import { useSelector, hCardState, hCardSlice, useDispatch } from '@/redux';
import styles from './index.module.scss';

export const HCardForm = () => {
	const { fields } = useSelector(hCardState);

	const form = useForm({ defaultValues: fields });

	const { handleSubmit, watch } = form;

	const dispatch = useDispatch();

	const dispatchOnBlur = (e: any) => {
		const name = e.target.name;
		dispatch(
			hCardSlice.actions.setFields({
				field: name,
				value: watch(name),
			})
		);
	};

	return (
		<FormProvider {...form}>
			<form
				onSubmit={handleSubmit((data) =>
					console.log('submitting data?', data)
				)}
				className={styles.hCardForm}
			>
				<h2>hCard Builder</h2>
				<fieldset>
					<legend>Personal Details</legend>
					<FormField
						label={'Given name'}
						name={'name'}
						rules={{ required: 'cannot be empty' }}
						onBlur={dispatchOnBlur}
					/>
					<FormField
						label={'Surname'}
						name={'surname'}
						rules={{ required: 'cannot be empty' }}
						onBlur={dispatchOnBlur}
					/>
					<FormField
						label={'Email'}
						name={'email'}
						rules={emailValidator}
						onBlur={dispatchOnBlur}
					/>
					<FormField
						label={'Phone'}
						name={'phone'}
						type={'tel'}
						rules={phoneNumberValidator}
						onBlur={dispatchOnBlur}
					/>
				</fieldset>
				<fieldset>
					<legend>Address</legend>
					<FormField
						label={'House name'}
						name={'houseName'}
						onBlur={dispatchOnBlur}
					/>
					<FormField
						label={'Street'}
						name={'street'}
						onBlur={dispatchOnBlur}
					/>
					<FormField
						label={'Suburb'}
						name={'suburb'}
						onBlur={dispatchOnBlur}
					/>
					<FormField
						label={'state'}
						name={'state'}
						onBlur={dispatchOnBlur}
					/>
					<FormField
						label={'postcode'}
						name={'postcode'}
						onBlur={dispatchOnBlur}
					/>
					<FormField
						label={'country'}
						name={'country'}
						onBlur={dispatchOnBlur}
					/>
				</fieldset>
				<div className={styles.actionButtons}>
					<UploadButton
						handleChange={(e: any) => {
							const file = e.target.files[0];

							if (file) {
								const reader = new FileReader();
								reader.onload = () => {
									dispatch(
										hCardSlice.actions.setImage({
											value: reader.result,
										})
									);
								};
								reader.readAsDataURL(file);
							}
						}}
					>
						Upload Avatar
					</UploadButton>
					<Button type={'submit'} isPrimary>
						Create hCard
					</Button>
				</div>
			</form>
		</FormProvider>
	);
};
