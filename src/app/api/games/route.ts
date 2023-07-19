import {NextRequest, NextResponse} from 'next/server'
import {createGame, gameCount} from "@/lib/games";

export async function GET(request: NextRequest, {params}: {params: {slug: string}}) {
    const games = gameCount();

    console.log("GET /games", { params: params, games })
    return NextResponse.json({ params: params, games });
}

export async function POST(request: NextRequest, {params}: {params: {slug: string}}) {
    const games = gameCount();
    createGame("5")

    console.log("POST /games", { params: params, games })
    return NextResponse.json({});
}

