'use client'

import {useRouter} from 'next/navigation'
import {createGame, gameCount} from "@/lib/games";
import {useEffect, useState} from "react";

export default function Page() {
    const [numberOfGames, setNumberOfGames] = useState('')

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('/api/games');
            const data = await response.json();
            console.log({data})

            return data.games
        }
        setNumberOfGames(getData())
        return () => {}
    }, [])

    const router = useRouter()
    let games = gameCount()
    const onClick = async () => {
        games = gameCount();
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