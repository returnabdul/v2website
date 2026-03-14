import type { Metadata } from "next";
import                        "@src/app/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@src/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
    title: "URAI",
    description: "University of Regensburg Students Artificial Intelligence",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn("font-sans", inter.variable)}>
            <body>
                {children}
            </body>
        </html>
    );
}
