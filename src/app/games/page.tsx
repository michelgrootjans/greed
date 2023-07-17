'use client'

import {useRouter} from 'next/navigation'
import {createGame} from "@/lib/games";
import {useEffect, useState} from "react";

const fetchData = async () => {
    const data = await fetch('/api/games');
    const json = await data.json();
    console.log({data: json})

    return json.games
}

export default function Page() {
    const [numberOfGames, setNumberOfGames] = useState('')

    const getNumberOfGames = () => {
        setNumberOfGames(fetchData())
        return () => {}
    };
    
    useEffect(getNumberOfGames, [])

    const router = useRouter()

    const onClick = async () => {
        const gameId = '4';
        createGame(gameId);
        await fetch('/api/games', {method: 'post', body: {gameId}})
        router.push(`/games/${gameId}`);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <button type="button" onClick={onClick}>
                Create New Game
            </button>
            There are {numberOfGames} current games
        </main>
    )
}