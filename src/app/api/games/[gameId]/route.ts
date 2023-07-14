import {NextRequest, NextResponse} from 'next/server'
import {param} from "ts-interface-checker";

export async function GET(request: NextRequest, {params}) {
    console.log({ request, params })
    return NextResponse.json({ request, params });
}

