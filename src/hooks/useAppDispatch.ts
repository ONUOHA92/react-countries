/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../store/store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAppDispatch = () => useDispatch<AppDispatch>();
