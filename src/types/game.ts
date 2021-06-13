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
    CurrentChapter: string;
    CurrentRoom: string;
    CurrentView: string;
    CutsceneID: number;
    CutsceneState: number;
    CutsceneTimer: number;
    DukeState: number;
    EnemyHealth: IEnemyHealth[];
    GameInit: number;
    GameState: number;
    LastKeyItem: IItem;
    Lei: number;
    PauseState: number;
    PlayerCurrentHealth: number;
    PlayerInventory: IItem;
    PlayerMaxHealth: number;
    PlayerPositionX: number;
    PlayerPositionY: number;
    PlayerPositionZ: number;
    Rank: number;
    RankScore: number;
    TargetChapter: string;
}