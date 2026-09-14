import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

const prefixedLocales = locales.filter((locale) => locale !== defaultLocale);

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const hasPrefixedLocale = prefixedLocales.some(
        (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );
    if (hasPrefixedLocale) {
        return NextResponse.next();
    }

    // Canonicalize accidental /pl visits back to the unprefixed default locale.
    if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
        const url = request.nextUrl.clone();
        url.pathname = pathname.slice(`/${defaultLocale}`.length) || "/";
        return NextResponse.redirect(url, 308);
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
}

export const config = {
    matcher: ["/((?!_next/|robots\\.txt|sitemap\\.xml|.*\\..*).*)"],
};
