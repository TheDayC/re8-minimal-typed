import { safelyParse, parseAsNumber, parseAsEnemyHealth } from '../../helpers/parsers';
import { IGameState} from '../../store/types/state';

export function parseGameDataResponse(res: unknown): IGameState {
    return {
        maxHealth: safelyParse(res, 'Player.MaxHP', parseAsNumber, null),
        currentHealth: safelyParse(res, 'Player.CurrentHP', parseAsNumber, null),
        enemyHealth: safelyParse(res, 'EnemyHealth', parseAsEnemyHealth, null),
        lei: safelyParse(res, 'Lei', parseAsNumber, null),
        rank: safelyParse(res, 'Rank', parseAsNumber, null),
        rankScore: safelyParse(res, 'RankScore', parseAsNumber, null)
    };
}