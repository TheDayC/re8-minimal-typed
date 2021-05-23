import { createGameState } from '..';
import { GameActionTypes } from '../enums/actions';
import { IActionWithPayload } from '../types/actions';
import { IGameState } from '../types/state';

type GamePayloadType = string | null;

export default function game(state: IGameState = createGameState(), action: IActionWithPayload<GameActionTypes, GamePayloadType>): IGameState {
    switch (action.type) {
       /*  case GameActionTypes.STORE_GAME_DATA:
            return action.payload; */
        default:
            return state;
    }
}