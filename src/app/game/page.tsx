export default async function Home() {
    const counter = await (await fetch('http://localhost:3000/api/game')).json()
    console.log({counter})

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form action="/api/game" method="post">
                <button>Submit</button>
            </form>
        </main>
    )
};
