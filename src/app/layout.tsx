import type { Metadata }    from "next";
import { Inter }            from "next/font/google";
import { cn }               from "@src/lib/utils";
import { Providers }        from "@src/app/providers";
import                      "@src/app/globals.css";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
    title: "URAI",
    description: "University of Regensburg students Artificial Intelligence",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html   lang="en" suppressHydrationWarning
                className={cn("font-sans", inter.variable)}>
            <body>
                <Providers>
                    { children }
                </Providers>
            </body>
        </html>
    );
}
