class Game {
    private gameId: string;
    constructor(gameId: string) {
        this.gameId = gameId;
    }
}

const games: Game[] = []

export const createGame = (gameId: string): void => {
    games.push(new Game(gameId))
};

export const gameCount = (): number => {
    return games.length;
};