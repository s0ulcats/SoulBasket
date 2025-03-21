'use client'

import { LogoImage } from "@/components/images/LogoImage";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href={'/'} className="flex items-center gap-x-4 transition-opacity hover:opacity-75">
            <LogoImage />
            <div className="hidden leading-tight lg:block">
                <h2 className="text-lg font-semibold tracking-wider text-accent-foreground">
                    SoulBasket
                </h2>
                <p className="text-sm text-muted-foreground">{('You can find all recieps')}</p>
            </div>
        </Link>
    )
}
