const createGame = async (params: {gameId: string}) => {
    console.log("fetch POST /api/games")
    await fetch('/api/games', {method: 'post', body: JSON.stringify(params)})
};

const fetchNumberOfGames = async () => {
    console.log("fetch GET /api/games")
    const data: Response = await fetch('/api/games');
    const json = await data.json();
    console.log({data: json})

    return json.games
};

export {
    createGame,
    fetchNumberOfGames
};