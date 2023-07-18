const fetchNumberOfGames = async () => {
    const data = await fetch('/api/games');
    const json = await data.json();
    console.log({data: json})

    return json.games
};

export {
    fetchNumberOfGames
};