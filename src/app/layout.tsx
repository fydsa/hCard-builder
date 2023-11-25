import { Inter } from 'next/font/google';
import { ReduxProviders } from '@/redux/providers';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ReduxProviders>
			<html lang='en'>
				<body className={inter.className}>{children}</body>
			</html>
		</ReduxProviders>
	);
}
