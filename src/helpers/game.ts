import {IGame} from '../types/game';

export function createGameDataDefault(): IGame {
    return {
        CurrentChapter: null,
        CurrentRoom: null,
        CurrentView: null,
        CutsceneID: null,
        CutsceneState: null,
        CutsceneTimer: null,
        DukeState: null,
        EnemyHealth: null,
        GameInit: null,
        GameState: null,
        LastKeyItem: null,
        Lei: null,
        PauseState: null,
        PlayerCurrentHealth: null,
        PlayerInventory: null,
        PlayerMaxHealth: null,
        PlayerPositionX: null,
        PlayerPositionY: null,
        PlayerPositionZ: null,
        Rank: null,
        RankScore: null,
        TargetChapter: null
    };
}

export function healthColor(hp: string): string {
    const hpNumber = parseFloat(hp);

    if (hpNumber <= 66 && hpNumber > 33) {
        return 'yellow';
    } else if (hpNumber <= 33 && hpNumber > 0) {
        return 'red';
    } else {
        return 'green';
    }
}

export function healthPercentage(currentHealth: number, maxHealth: number, decimalPlaces: number): string {
    const healthPc = `${(100 * currentHealth) / maxHealth}`;

    return parseFloat(healthPc).toFixed(decimalPlaces);
}