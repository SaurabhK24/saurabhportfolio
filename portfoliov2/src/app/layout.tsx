import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import MouseFollow from "../../components/main/MouseFollow";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Saurabh Khanal",
    description: "full-Stack software engineer building and designing ai and clean ui/ux",
    keywords: [
        "saurabh khanal",
        "saurabh",
        "khanal",
        "software engineer",
        "software developer",
        "student",
        "george mason university",
        "george mason",
        "mason",
        "fairfax",
        "web developer",
        "full stack",
        "frontend",
        "ai",
        "backend",
        "ui",
        "ux",
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body
                className={`${rubik.className} bg-[#030014] bg-gradient-to-br from-[#030014] from-50% to-[#1a1134] leading-relaxed text-slate-400 antialiased selection:bg-[#7a92f0] selection:text-indigo-950 min-h-screen overscroll-none`}
            >
                <div>
                    {children}
                    <div className="mousefollowmobile md:hidden absolute bottom-0 -right-16"></div>
                    <MouseFollow />
                </div>
            </body>
        </html>
    );
}
