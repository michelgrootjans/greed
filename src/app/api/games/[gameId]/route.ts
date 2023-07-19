import {NextRequest, NextResponse} from 'next/server'
import {gameCount} from "@/lib/games";

export async function GET(request: NextRequest, {params}) {
    const games = gameCount();

    console.log("POST /games/{id}", { params: params, games })
    return NextResponse.json({ params: params, games });
}

