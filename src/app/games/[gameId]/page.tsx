'use client'

import {useEffect, useState} from "react";
import {fetchNumberOfGames} from "@/app/games/games-api";

export default function Page() {
    console.log("GET /games/{id}")

    const [numberOfGames, setNumberOfGames] = useState('')

    const getNumberOfGames = () => {
        fetchNumberOfGames().then(n => setNumberOfGames(n))
        return () => {}
    };

    useEffect(getNumberOfGames, [])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            This is the new game
            There are {numberOfGames} current games
        </main>
    )
};
