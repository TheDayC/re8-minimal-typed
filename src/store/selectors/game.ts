import { IAppState } from '../types';
import { IGameState } from '../types/state';

export const selectGameData = (state: IAppState): IGameState => state.game;