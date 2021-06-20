import { createGameState } from '..';
import { GameActionTypes } from '../enums/actions';
import { StoreGameActionType } from '../types/actions';
import { IGameState } from '../types/state';

export default function game(state: IGameState = createGameState(), action: StoreGameActionType): IGameState {
    switch (action.type) {
        case GameActionTypes.STORE_GAME_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}