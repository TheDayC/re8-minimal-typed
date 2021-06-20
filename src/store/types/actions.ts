import { GameActionTypes } from '../enums/actions';
import { IGameState } from './state';

export interface IAction<T extends string> {
    type: T;
}

export interface IActionWithPayload<T extends string, P> extends IAction<T> {
    payload: P;
}

export type StoreGameActionType = IActionWithPayload<GameActionTypes, IGameState>;