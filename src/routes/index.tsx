import { createFileRoute } from "@tanstack/react-router";
import { StickyHeader } from "@/components/sections/StickyHeader";
import { Hero } from "@/components/sections/Hero";
import { TimesLocation } from "@/components/sections/TimesLocation";
import { WhatToExpect } from "@/components/sections/WhatToExpect";
import { MissionStory } from "@/components/sections/MissionStory";
import { WelcomeVideo } from "@/components/sections/WelcomeVideo";
import { LifeOfChurch } from "@/components/sections/LifeOfChurch";
import { Ministries } from "@/components/sections/Ministries";
import { Events } from "@/components/sections/Events";
import { Sermons } from "@/components/sections/Sermons";
import { Give } from "@/components/sections/Give";
import { PlanYourVisit } from "@/components/sections/PlanYourVisit";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abba House Ministry — Altadena, CA" },
      {
        name: "description",
        content:
          "A Spirit-led family in Altadena, CA. Join us for Saturday Encounters at 11 AM PST or Kingdom Studies online Thursday nights. You're welcome here.",
      },
      { property: "og:title", content: "Abba House Ministry — Altadena, CA" },
      {
        property: "og:description",
        content:
          "Drawing all people to the Father. In person on Saturdays and online Thursdays — you're welcome, just as you are.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});


function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StickyHeader />
      <main>
        <Hero />
        <TimesLocation />
        <WhatToExpect />
        <MissionStory />
        <WelcomeVideo />
        <LifeOfChurch />
        <Ministries />
        <Events />
        <Sermons />
        <Give />
        <PlanYourVisit />
      </main>
      <Footer />
    </div>
  );
}
