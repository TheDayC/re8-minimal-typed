
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import {IAppState} from './types';
import { IGameState } from './types/state';

export function createGameState(): IGameState {
    return {
        maxHealth: null,
        currentHealth: null,
        enemyHealth: null,
        lei: null,
        rank: null,
        rankScore: null
    };
}

// Function to set our default state.
export function createInitialState(): IAppState {
    return {
        game: createGameState()
    };
}

// Create our store and allow thunks for future development if required.
const store = createStore(rootReducer, createInitialState(), composeWithDevTools(applyMiddleware(thunk)));

export default store;