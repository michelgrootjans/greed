import {NextRequest, NextResponse} from 'next/server'
import {param} from "ts-interface-checker";

class Game {
}

const games : Game[] = []

export async function GET(request: NextRequest, {params}: {params: {slug: string}}) {
    // if (params && params.slug) {
    //     const slug = params.slug
    // }

    console.log({ request, params: params, games })
    return NextResponse.json({ request, params: params, games });
}

export async function POST(request: NextRequest, {params}: { params: { slug: string } }) {
    console.log({ request, params: params, games })

    games.push(new Game())
    return NextResponse.json({})
}