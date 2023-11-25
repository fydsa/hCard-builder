'use client';

import Image from 'next/image';
import { useSelector, hCardState } from '@/redux';
import styles from './index.module.scss';
import AvatarIcon from '../../../public/avatar.png';

export const HCardPreview = () => {
	const { fields, image } = useSelector(hCardState);

	return (
		<article className={styles.cardPreview}>
			<h2>HCARD PREVIEW</h2>
			<div className={styles.cardContainer}>
				<div className={styles.cardHeader} />
				<Image
					src={image || AvatarIcon}
					alt={'avatar-icon'}
					className={styles.avatar}
					width={100}
					height={115}
					priority
				/>
				<div className={styles.cardContent}>
					<p>
						Name: {fields.name} {fields.surname}
					</p>
					<p>Email: {fields.email}</p>
					<p>Phone: {fields.phone}</p>
					<p className={styles.address}>
						Address: {fields.houseName} {fields.street}{' '}
						{fields.suburb}
					</p>
					<div className={styles.hStack}>
						<p>Postcode: {fields.postcode} </p>
						<p>Country: {fields.country}</p>
					</div>
				</div>
			</div>
		</article>
	);
};
