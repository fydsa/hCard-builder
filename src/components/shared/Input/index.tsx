import { InputHTMLAttributes } from 'react';
import styles from './index.module.scss';

export type PropTypes = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: PropTypes) => {
	return <input className={styles.input} {...props} data-cy='input' />;
};
