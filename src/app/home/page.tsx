import Head from 'next/head';
import { HCardForm } from '@/components/HCardForm';
import { HCardPreview } from '@/components/HCardPreview';
import styles from './page.module.scss';

export default function Home() {
	return (
		<>
			<Head>
				<title>HCard builder</title>
			</Head>
			<main className={styles.homePage}>
				<section className={styles.formSection}>
					<HCardForm />
				</section>
				<section className={styles.previewSection}>
					<HCardPreview />
				</section>
			</main>
		</>
	);
}
