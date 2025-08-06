import MarketingMenuNavbar from "@/components/navbar/marketing-menu-navbar";
import Link from "next/link";
import { LogoInfo } from "@/constants/logo-info";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="bg-secondary">
            <div className="bg-background container mx-auto flex flex-col min-h-screen">
                <header className="top-0 z-50 h-16 px-4 flex items-center justify-between  rounded-b-2xl border-b shadow-2xl">
                    <div className="flex items-center gap-6 w-full">
                        {/* Logo */}
                        <Link href={LogoInfo.url} className="flex items-center gap-2">
                            <img
                                src={LogoInfo.src}
                                className="max-h-8 dark:invert"
                                alt={LogoInfo.alt}
                            />
                            <span className="text-lg font-semibold tracking-tighter hidden md:block">
                                {LogoInfo.title}
                            </span>
                        </Link>
                        {/* Menu */}
                        <MarketingMenuNavbar />
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                        <ModeToggle />
                        {/* Login */}
                        <Button variant="outline" size="sm">Login</Button>
                        {/* Register */}
                        <Button size="sm">Register</Button>
                    </div>
                </header>
                <main className="h-[calc(100vh-6rem)] overflow-y-auto p-4">
                    {children}
                </main>
                <footer className="h-8 p-4 flex items-center justify-center bg-muted">
                    <p className="text-sm text-center text-muted-foreground ">
                        &copy; {new Date().getFullYear()} Katalogi.id. All rights reserved.
                    </p>
                </footer>
            </div>
        </section>

    );
}