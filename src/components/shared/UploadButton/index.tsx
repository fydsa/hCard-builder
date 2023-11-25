import { useRef } from 'react';
import { Button } from '../Button';
import styles from './index.module.scss';

export const UploadButton = ({
	handleChange,
	accept = 'image/*',
	children,
}: any) => {
	const inputRef: any = useRef();

	const onClick = () => {
		inputRef.current.click();
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
