import { hCardSlice } from './hCardSlice';
import { ReduxState } from '@/redux/store';

export const { setFields, setImage } = hCardSlice.actions;
export const hCardState = (state: ReduxState) => state.hCard;
