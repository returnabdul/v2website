import { HeroSection }      from "@src/components/HeroSection";
import { Navbar }           from "@src/components/Navbar";
import { StatsSection }     from "@src/components/StatsSection";
import { MissionSection }   from "@src/components/MissionSection";
import { EventsSection }    from "@src/components/EventsSection";
import { TopicsSection }    from "@src/components/TopicsSection";
import { CtaSection }       from "@src/components/CtaSection";
import { Footer }           from "@src/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <HeroSection />
                <StatsSection />
                <MissionSection />
                <EventsSection />
                <TopicsSection />
                <CtaSection />
            </main>
            <Footer />
        </div>
    );
}
