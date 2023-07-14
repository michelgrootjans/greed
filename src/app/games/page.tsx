'use client'

import {useRouter} from 'next/navigation'
import {createGame, gameCount} from "@/lib/games";
import {useState} from "react";

export default function Page() {
    const router = useRouter()
    const games = gameCount();

    const onClick = async () => {
        const gameId = '4';
        createGame(gameId);
        await fetch('/api/games', {method: 'post', body: { gameId } })
        router.push(`/games/${gameId}`);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <button type="button" onClick={onClick}>
                Create New Game
            </button>
            There are {games} current games
        </main>
    )
}