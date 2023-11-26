'use client';

import { ChangeEvent } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '../shared/Button';
import { UploadButton } from '../shared/UploadButton';
import { FormField } from '../shared/FormField';
import {
	emailValidator,
	phoneNumberValidator,
} from '../shared/FormField/utils';
import { useSelector, hCardState, hCardSlice, useDispatch } from '@/redux';
import { HCardFields } from '@/utils/enums';
import styles from './index.module.scss';

export const HCardForm = () => {
	const { fields } = useSelector(hCardState);

	const form = useForm({ defaultValues: fields });

	const { handleSubmit, watch } = form;

	const dispatch = useDispatch();

	const dispatchOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name as HCardFields;
		dispatch(
			hCardSlice.actions.setFields({
				field: name,
				value: watch(name),
			})
		);
	};

	const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;

		if (!!files?.length) {
			const reader = new FileReader();
			reader.onload = () => {
				dispatch(
					hCardSlice.actions.setImage({
						value: reader.result as string,
					})
				);
			};
			reader.readAsDataURL(files[0]);
		}
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
						name={HCardFields.Name}
						rules={{ required: 'cannot be empty' }}
						onBlur={dispatchOnBlur}
					/>
					<FormField
						label={'Surname'}
						name={HCardFields.Surname}
						rules={{ required: 'cannot be empty' }}
						onBlur={dispatchOnBlur}
					/>
					<FormField
						label={'Email'}
						name={HCardFields.Email}
						rules={emailValidator}
						onBlur={dispatchOnBlur}
					/>
					<FormField
						label={'Phone'}
						name={HCardFields.Phone}
						type={'tel'}
						rules={phoneNumberValidator}
						onBlur={dispatchOnBlur}
					/>
				</fieldset>
				<fieldset>
					<legend>Address</legend>
					<FormField
						label={'House name'}
						name={HCardFields.HouseName}
						onBlur={dispatchOnBlur}
					/>
					<FormField
						label={'Street'}
						name={HCardFields.Street}
						onBlur={dispatchOnBlur}
					/>
					<FormField
						label={'Suburb'}
						name={HCardFields.Suburb}
						onBlur={dispatchOnBlur}
					/>
					<FormField
						label={'State'}
						name={HCardFields.State}
						onBlur={dispatchOnBlur}
					/>
					<FormField
						label={'Postcode'}
						name={HCardFields.Postcode}
						onBlur={dispatchOnBlur}
					/>
					<FormField
						label={'country'}
						name={HCardFields.Country}
						onBlur={dispatchOnBlur}
					/>
				</fieldset>
				<div className={styles.actionButtons}>
					<UploadButton handleChange={handleImageUpload}>
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
