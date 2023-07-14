import {NextRequest, NextResponse} from 'next/server'
import {gameCount} from "@/lib/games";

export async function GET(request: NextRequest, {params}) {
    const games = gameCount();

    console.log({ request, params: params, games })
    return NextResponse.json({ request, params: params, games });
}

