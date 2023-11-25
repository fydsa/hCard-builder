import styles from './index.module.scss';

//TODO: handle types
export const Input = (props: any) => {
	return <input className={styles.input} {...props} />;
};
