import { NextRequest, NextResponse } from "next/server";

interface Routes {
    [key: string]: boolean;
}

const publicOnlyUrls: Routes = {
    "/sign-up": true,
};

export async function middleware(request: NextRequest) {
    const session = true;
    const exists = publicOnlyUrls[request.nextUrl.pathname];
    if (!session) {
        if (!exists) {
            return NextResponse.redirect(new URL("/sign-up", request.url));
        }
    } else {
        if (exists) {
            return NextResponse.redirect(new URL("/deposit", request.url));
        }
    }
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
