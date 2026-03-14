"use client"; // ← this makes the whole file client-side

import { Toaster as Sonner }                from "@src/components/ui/sonner";
// import { TooltipProvider }                  from "@/components/ui/tooltip";
import { ThemeProvider }                    from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}  {/* ← your pages render here */}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
