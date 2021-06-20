import {StoreGameActionType} from '../types/actions';
import {GameActionTypes} from '../enums/actions';
import { IGameState } from '../types/state';

// Actions
export const ACTION_STORE_GAME_DATA = (payload: IGameState): StoreGameActionType => {
    const action: StoreGameActionType = {
        type: GameActionTypes.STORE_GAME_DATA,
        payload
    };

    return action;
};

// Action Creators
export function storeGameData(payload: IGameState): StoreGameActionType {
    return ACTION_STORE_GAME_DATA(payload);
}