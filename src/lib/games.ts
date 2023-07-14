class Game {
    private gameId: string;
    constructor(gameId: string) {
        this.gameId = gameId;
    }
}

const games: Game[] = []

export const  createGame = (gameId: string) => {
    games.push(new Game(gameId))
};