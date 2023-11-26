import { ChangeEvent, ReactNode, useRef } from 'react';
import { Button, PropTypes as ButtonPropTypes } from '../Button';
import styles from './index.module.scss';

type PropTypes = {
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	accept?: 'image/*';
	children: ReactNode;
} & ButtonPropTypes;

export const UploadButton = ({
	handleChange,
	accept = 'image/*',
	children,
}: PropTypes) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const onClick = () => {
		inputRef.current?.click();
	};

	return (
		<>
			<input
				type='file'
				accept={accept}
				onChange={handleChange}
				className={styles.uploadInput}
				ref={inputRef}
			/>
			<Button type={'button'} onClick={onClick}>
				{children}
			</Button>
		</>
	);
};
