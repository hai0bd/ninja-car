export enum Layer {
    Player = 1,
    Coin = 2,
    Obstacle = 4,
    Gas = 8,
    Shield = 16,
    Bomb = 32,
}

export enum GameState {
    Waiting = 0,
    Playing = 1,
    Paused = 2,
    Finished = 3,
}

export enum InputKey {
    Press_Left = 0,
    Press_Right = 1,
    Key_Up = 2
}

export enum CoinType {
    Null = 0,
    Mix = 1,
    Straight = 2,
    Zikzak = 3
}
export enum CoinGroup {
    Null = 0,
    Straight = 1,
    Left = 2,
    Right = 3,
    Override = 4
}

export enum ObstacleType {
    Null = 0,
    Straight = 1,
    Override = 2,
}