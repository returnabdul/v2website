import { LandingPage }      from "@src/components/LandingPage";
import { StatsSection }     from "@src/components/StatsSection";
import { MissionSection }   from "@src/components/MissionSection";
import { EventsSection }    from "@src/components/EventsSection";
import { TopicsSection }    from "@src/components/TopicsSection";
import { CtaSection }       from "@src/components/CtaSection";
import { Footer }           from "@src/components/Footer";
import { Navbar1 }          from "@src/components/Navbar1";

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

                // TODO: add manu items

                className="w-full"
            />
            <main>
                <LandingPage />
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
