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