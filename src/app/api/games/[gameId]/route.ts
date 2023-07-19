import {NextRequest, NextResponse} from 'next/server'
import {gameCount} from "@/lib/games";

export async function GET(request: NextRequest) {
    const games = gameCount();

    console.log("POST /games/{id}", { games })
    return NextResponse.json({ games });
}

