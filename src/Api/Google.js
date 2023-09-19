import { CLIENT_ID } from "@/consts/clientId";
import { OAuth2Client } from "google-auth-library";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
    const client = new OAuth2Client(CLIENT_ID);
    if (!body) {
        const response = NextResponse.json(
        {
            message: "Invalid body",
        },
        {
            status: 400,
        }
    );
    return response;
}

async function verify(body) {
    const ticket = await client.verifyIdToken({
        idToken: body.token,
        audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    return payload;
}

try {
    const payload = await verify(body);
    return NextResponse.json(payload);
} catch (error) {
    const response = NextResponse.json(
    {
        code: 400,
        message: error instanceof Error ? error.message : "Unknown",
    },
    {
        status: 400,
    }
    );
    return response;
}
}
