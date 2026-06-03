import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { WEB_ROUTES } from './constants';

export function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    if (pathname === '/') {
        return NextResponse.redirect(new URL('/tabnews', request.url));
    }

    const route = WEB_ROUTES.find(
        route => route.name === pathname
    );

    if (!route || !route.isPublic) {
        return NextResponse.redirect(
            new URL('/tabnews', request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
    ],
};