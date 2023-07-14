export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form action="/api/game" method="post">
                <button>Submit</button>
            </form>
        </main>
    )
};
