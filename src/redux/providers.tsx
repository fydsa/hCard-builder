'use client';

import { Provider } from 'react-redux';
import { reduxStore } from '.';

export const ReduxProviders = (props: React.PropsWithChildren) => {
	return <Provider store={reduxStore}>{props.children}</Provider>;
};
