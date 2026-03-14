export function Footer() {
    return (
        <footer className="py-10 bg-background border-t border-border">
            <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                <p className="font-display font-semibold text-foreground">
                    <span className="text-primary">UR</span>AI
                </p>
                <p>© {new Date().getFullYear()} URAI – Regensburg's Student AI Initiative</p>
            </div>
        </footer>
    );
}
