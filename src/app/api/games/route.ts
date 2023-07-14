import {NextRequest, NextResponse} from 'next/server'
import {createGame, gameCount} from "@/lib/games";

export async function GET(request: NextRequest, {params}: {params: {slug: string}}) {
    // if (params && params.slug) {
    //     const slug = params.slug
    // }

    const games = gameCount();

    console.log({ request, params: params, games })
    return NextResponse.json({ request, params: params, games });
}

export async function POST(request: NextRequest, {params}: {params: {slug: string}}) {
    const games = gameCount();
    createGame("5")

    console.log({ request, params: params, games })
    return NextResponse.json({ request, params: params, games });
}

