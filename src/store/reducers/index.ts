import { combineReducers } from 'redux';

import game from './game';
import { IAppState } from '../types';

const rootReducer = combineReducers<IAppState>({
    game
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;