import { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

export type PropTypes = {
	isPrimary?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
	children,
	isPrimary = false,
	...props
}: PropTypes) => {
	return (
		<button
			className={classnames(
				styles.button,
				isPrimary ? styles.primary : styles.secondary,
				props.disabled && styles.disabled
			)}
			{...props}
			data-cy='button'
		>
			{children}
		</button>
	);
};
