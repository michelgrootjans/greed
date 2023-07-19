'use client'

import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation'
import { v4 as uuid } from 'uuid';
import {createGame, fetchNumberOfGames} from "./games-api";

export default function Page() {
    console.log("GET /games")

    const [numberOfGames, setNumberOfGames] = useState('')

    const getNumberOfGames = () => {
        fetchNumberOfGames().then(n => setNumberOfGames(n))
        return () => {}
    };
    
    useEffect(getNumberOfGames, [])

    const router = useRouter()

    const onClick = async () => {
        const gameId = uuid();
        await createGame({gameId})
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