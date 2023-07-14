'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter()

    const createGame = () => {
        const gameID = '4';
        router.push(`/games/${gameID}`);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <button type="button" onClick={createGame}>
                Create New Game
            </button>
        </main>
    )
}