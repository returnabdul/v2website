import { HeroSection }      from "@src/components/HeroSection";
import { Navbar }           from "@src/components/Navbar";
import { StatsSection }     from "@src/components/StatsSection";
import { MissionSection }   from "@src/components/MissionSection";
import { EventsSection }    from "@src/components/EventsSection";
import { TopicsSection }    from "@src/components/TopicsSection";
import { CtaSection }       from "@src/components/CtaSection";
import { Footer }           from "@src/components/Footer";
import { Navbar1 }          from "@src/components/navbar1";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar1
                logo={{
                    url: "/",
                    src: "/logo-bw.svg",
                    alt: "URAI Logo",
                    title: "",
                }}
            />
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
