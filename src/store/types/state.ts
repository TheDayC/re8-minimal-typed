import { IEnemyHealth } from '../../types/game';

export interface IGameState {
    maxHealth: number | null;
    currentHealth: number | null;
    enemyHealth: IEnemyHealth[] | null;
    lei: number | null;
    rank: number | null;
    rankScore: number | null;
}