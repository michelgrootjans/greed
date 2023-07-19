import {NextRequest, NextResponse} from 'next/server'
import {gameCount} from "@/lib/games";

export async function GET() {
    const games = gameCount();

    console.log("GET /api/games/{id}", { games })
    return NextResponse.json({ games });
}

