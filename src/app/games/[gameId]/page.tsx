import {gameCount} from "@/lib/games";

export default async function Page() {

    const games = gameCount();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            This is the new game
            There are {games} current games
        </main>
    )
};
