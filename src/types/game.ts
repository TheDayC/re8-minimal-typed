export interface IEnemyHealth {
    CurrentHP: number;
    IsAlive: boolean;
    IsNaN: boolean;
    IsTrigger: boolean;
    MaximumHP: number;
    Percentage: number;
    _DebuggerDisplay: string;
}

export interface IItem {
    Ammo: number;
    HasAttachment: number;
    IsAmmoClip: boolean;
    IsCraftable: boolean;
    IsHorizontal: number;
    IsItem: boolean;
    IsItemSlot: boolean;
    IsKeyItem: boolean;
    IsMap: boolean;
    IsTreasure: boolean;
    IsWeapon: boolean;
    ItemID: number;
    ItemName: string;
    Quantity: number;
    SlotPosition: number;
    _DebuggerDisplay: string;
}

export interface IGame {
    CurrentChapter: string | null;
    CurrentRoom: string | null;
    CurrentView: string | null;
    CutsceneID: number | null;
    CutsceneState: number | null;
    CutsceneTimer: number | null;
    DukeState: number | null;
    EnemyHealth: IEnemyHealth[] | null;
    GameInit: number | null;
    GameState: number | null;
    LastKeyItem: IItem | null;
    Lei: number | null;
    PauseState: number | null;
    PlayerCurrentHealth: number | null;
    PlayerInventory: IItem | null;
    PlayerMaxHealth: number | null;
    PlayerPositionX: number | null;
    PlayerPositionY: number | null;
    PlayerPositionZ: number | null;
    Rank: number | null;
    RankScore: number | null;
    TargetChapter: string | null;
}