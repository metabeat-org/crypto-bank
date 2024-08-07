import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    console.log("?");
    return NextResponse.json({ message: "backend-test" });
}
