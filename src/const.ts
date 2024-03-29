export enum AppRoute {
    Login = '/login',
    Lose = '/lose',
    Result = '/result',
    Root = '/',
    DevArtist = '/dev-artist',
    DevGenre = '/dev-genre',
    Game = '/game'
}
export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}
export const FIRST_GAME_STEP = 0;

export enum GameType {
    Artist = 'artist',
    Genre = 'genre',

}