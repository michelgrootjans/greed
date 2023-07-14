import {NextRequest, NextResponse} from 'next/server'

export async function GET(request: NextRequest, {params}) {
    console.log({ request, params })
    return NextResponse.json({ request, params });
}

