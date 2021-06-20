import { apiFetch } from '../helpers/fetch';
import { safelyTransform } from '../helpers/transform';
import { storeGameData } from '../store/actions/game';
import { parseGameDataResponse } from './parsers/game';
import { IGameState } from '../store/types/state';
import store from '../store';

export function getData(): void {
    const options = {
        body: {},
        method: 'GET'
    };
    
    apiFetch(`http://${process.env.REACT_APP_ADDRESS}:${process.env.REACT_APP_PORT}/`, options).then(
        res => {
            if (res) {
                const gameData = safelyTransform<IGameState | null>(res, parseGameDataResponse);
                
                if (gameData) {
                    store.dispatch(storeGameData(gameData));
                }
            }
        },
        error => console.warn(error.message)
    );

}