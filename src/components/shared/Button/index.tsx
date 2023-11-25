import { ReactNode } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

type PropTypes = {
	children: ReactNode;
	type?: 'submit';
	onClick?: () => void;
};

export const Button = ({ children, ...props }: any) => {
	return (
		<button
			className={classnames(
				styles.button,
				props.isPrimary ? styles.primary : styles.secondary,
				props.isDisabled && styles.disabled
			)}
			{...props}
		>
			{children}
		</button>
	);
};
