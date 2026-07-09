/**
 * ============================================================================
 * ABBA HOUSE MINISTRY — site config (church template)
 * Altadena, CA · Hybrid (in-person + virtual) · Pastor Walter & Tanya Kirk
 * ============================================================================
 * RESCUE BUILD for Walter Kirk (said "CALL ME" — hottest inbound). His current
 * site is a generic Wix template (title literally "Home | My Site") holding
 * real, beautiful content. The content is sacred; the container is generic.
 *
 * ⚠️ HANDLE WITH REVERENCE — their story is real testimony, not marketing:
 *   Abba House formed 2023 by the Holy Spirit's inspiration. The Jan 2024
 *   Eaton Fire DESTROYED Pastor Kirk's 60-year-old family home — the original
 *   foundation and birthplace of the ministry. Through loss and displacement,
 *   the Kirks kept going: "Abba House continues the good fight of faith in
 *   Altadena." Post-fire, WITHOUT their original building, the website is
 *   genuinely their gathering anchor. On the call, HONOR this — never lead
 *   with "your site's outdated." Lead with what they've overcome.
 *
 * VERIFIED (from abbahouseministry.com — safe to use):
 *   - pastors, address, phone, anchor verse, service rhythm, giving, socials
 *   - their real welcome language + founding/fire story (verbatim below)
 *
 * DRAFT (hlpr's copy over generic template — confirm on call):
 *   - tagline, mission framing, "what to expect"
 *
 * HYBRID NOTE: they gather in person (Sat Encounters) AND virtually (Thu Zoom).
 * Church engine fits. But surface both rhythms clearly — the virtual piece is
 * central for them post-fire.
 *
 * IMAGERY: 3 real photos pulled from abbahouseministry.com are wired below —
 * hero (Altadena mountains), story (the Kirks), life1 (Saturday Encounter
 * flyer). life2–life6 fall back to generic warm placeholders until Walter
 * shares more real photos. Ask on the call for: Saturday Encounter photos,
 * outreach photos, congregation photos.
 * ============================================================================
 */

import heroAsset from "@/assets/abbahouse/hero.png.asset.json";
import storyAsset from "@/assets/abbahouse/story.jpg.asset.json";
import life1Asset from "@/assets/abbahouse/life1.jpg.asset.json";
// TODO: replace with real Abba House photos when Walter shares them
import life2Fallback from "@/assets/placeholders/life-2.jpg";
import life3Fallback from "@/assets/placeholders/life-3.jpg";
import life4Fallback from "@/assets/placeholders/life-4.jpg";
import life5Fallback from "@/assets/placeholders/life-5.jpg";
import life6Fallback from "@/assets/placeholders/life-6.jpg";

const hero = { url: heroAsset.url };
const story = { url: storyAsset.url };
const life1 = { url: life1Asset.url };
const life2 = { url: life2Fallback };
const life3 = { url: life3Fallback };
const life4 = { url: life4Fallback };
const life5 = { url: life5Fallback };
const life6 = { url: life6Fallback };

export const siteConfig = {
  announcement: {
    enabled: true,
    text: "New here? Join us for a Saturday Encounter or online Thursday \u2014 you're welcome.",
    ctaLabel: "Plan your visit",
    ctaUrl: "/plan-a-visit",
  },

  church: {
    name: "Abba House Ministry",
    shortName: "Abba House",
    city: "Altadena, CA",
    // DRAFT tagline drawn from their heart; confirm with Pastor Kirk:
    tagline: "Drawing all people to the Father.",
    // Built from their REAL welcome + anchor verse (John 12:32):
    mission:
      "A Spirit-led family in Altadena where every person is welcomed to share a relationship with the Father \u2014 nurturing new souls and strengthening the body of Christ.",
    story: [
      // Their REAL story, kept close to verbatim (verified, handle with care):
      "Abba House Ministry was formed in 2023 through the inspiration of the Holy Spirit \u2014 to nurture new souls and strengthen the body of Christ. Pastors Walter and Tanya Kirk have served across Southern California for over 25 years, in youth, men's and women's ministry, praise and worship, evangelism, intercessory prayer, and outreach.",
      "In January 2024, the Eaton Fire tragically destroyed Pastor Kirk's 60-year-old family home \u2014 the original foundation and birthplace of Abba House. Through loss and displacement, the Kirks' faith led them to continue the Lord's work. Abba House Ministry continues the good fight of faith in Altadena \u2014 and there's a place for you in it.",
    ],
    foundedLine: "Continuing the good fight of faith in Altadena", // their real line
  },

  brand: {
    logoText: "Abba House",
    // No standalone logo file available on the current site (the "ABH.png"
    // on their homepage is a Zelle donation QR code, not a mark). Header
    // renders the wordmark text when this is empty.
    logoImageSrc: "",
    storyImageSrc: story.url,
    heroMedia: {
      type: "image" as "image" | "video",
      imageSrc: hero.url,
      videoSrc: "",
    },
    // Forward-looking data for the paid multi-page build; not wired yet.
    pageHeroes: {
      planAVisit: hero.url,
      about: story.url,
      leadership: life3.url,
      give: life4.url,
      contact: life2.url,
      sermons: life3.url,
    },
  },

  service: {
    // VERIFIED rhythm from their site (hybrid) — confirm current on call:
    timesShort: "Saturdays \u00b7 Encounter 11:00 AM PST",
    timesLong: [
      { day: "Saturday", time: "Encounter \u2014 1st, 2nd & 3rd Saturdays, 11:00 AM PST" },
      { day: "Saturday", time: "Faith in Action Outreach \u2014 4th Saturday" },
      { day: "Thursday", time: "Kingdom Studies (virtual, Zoom) \u2014 6:30 PM PST" },
    ],
    address: "380 E Woodbury Rd, Altadena, CA 91001",
    mapEmbedUrl:
      "https://www.google.com/maps?q=380+E+Woodbury+Rd,+Altadena,+CA+91001&output=embed",
    mapLinkUrl:
      "https://www.google.com/maps?q=380+E+Woodbury+Rd,+Altadena,+CA+91001",
    practical: [
      { label: "In person", value: "Saturday Encounters, 11 AM PST \u2014 come as you are" },
      { label: "Online", value: "Thursday Kingdom Studies on Zoom, 6:30 PM PST \u2014 join from anywhere" },
      { label: "What to expect", value: "Spirit-filled worship, the Word, and a family that welcomes you" },
    ],
  },

  // Built from their REAL identity (Spirit-led, welcoming, resilient):
  expect: [
    {
      icon: "Heart" as const,
      title: "Welcomed to the Father",
      body: "\u201cAnd I, when I am lifted up from the earth, will draw all people to myself.\u201d (John 12:32) You're welcome here, just as you are.",
    },
    {
      icon: "Users" as const,
      title: "In person & online",
      body: "Gather with us at Saturday Encounters in Altadena, or join Kingdom Studies on Zoom Thursday nights from anywhere. There's a way in for everyone.",
    },
    {
      icon: "Heart" as const,
      title: "Faith through the fire",
      body: "Through loss and displacement after the Eaton Fire, this ministry has kept going. Abba House knows what it means to hold onto faith \u2014 and to keep welcoming others in.",
    },
    {
      icon: "Users" as const,
      title: "Faith in action",
      body: "Every 4th Saturday, we take the love of Christ into Altadena through outreach. Serving our community is part of who we are.",
    },
  ],

  life: [
    { src: life1.url, alt: "Saturday Encounter Service — 1st, 2nd & 3rd Saturdays at 11 AM PST" },
    { src: life2.url, alt: "Welcoming a first-time guest" },
    { src: life3.url, alt: "Pastor Walter & Evangelist Tanya Kirk with the Abba House family" },
    { src: life4.url, alt: "The Abba House family together" },
    { src: life5.url, alt: "Faith in Action outreach in Altadena" },
    { src: life6.url, alt: "Worship at Abba House" },
  ],

  // Their REAL ministry rhythms as "ministries":
  ministries: [
    { name: "Saturday Encounter", line: "In-person gathering for worship and the Word, 1st\u20133rd Saturdays." },
    { name: "Kingdom Studies", line: "Virtual Bible study on Zoom every Thursday night \u2014 join from anywhere." },
    { name: "Faith in Action", line: "Community outreach every 4th Saturday, carrying Christ's love into Altadena." },
    { name: "Prayer & Support", line: "Reach out anytime \u2014 the Kirks and the Abba House family are here for you." },
  ],

  events: [
    { date: "Saturdays", title: "Saturday Encounter", blurb: "1st, 2nd & 3rd Saturdays at 11 AM PST \u2014 come worship with us in Altadena." },
    { date: "Thursdays", title: "Kingdom Studies (Online)", blurb: "6:30 PM PST on Zoom \u2014 grow in the Word from wherever you are." },
  ],

  sermon: {
    // TODO — wire to their IG/FB video if desired; warm placeholder otherwise:
    title: "Latest Word",
    speaker: "Pastor Walter Kirk, Jr.",
    series: "Abba House Ministry",
    date: "",
    summary:
      "Spirit-led teaching from Pastor Kirk. Join us in person on Saturday or online Thursday \u2014 or reach out and we'll help you connect.",
    embedUrl: "",
    watchUrl: "https://www.instagram.com/abbahouseministry",
  },

  give: {
    line: "Your generosity helps Abba House continue the good fight of faith in Altadena \u2014 nurturing souls and serving our community. Thank you.",
    // [CONFIRM] — they use Zelle to (626) 421-0634; ask Walter how he wants giving presented
    onlineUrl: "https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiQUJCQSBIT1VTRSBNSU5JU1RSWSIsImFjdGlvbiI6InBheW1lbnQiLCJ0b2tlbiI6IjYyNjQyMTA2MzQifQ==",
  },

  welcomeVideo: {
    enabled: false,
    eyebrow: "Meet the Kirks",
    heading: "A word of welcome before you visit.",
    body: "Pastors Walter and Tanya would love to say hello before you join us.",
    posterSrc: story.url,
    embedUrl: "",
  },

  contact: {
    phone: "(626) 421-0634",
    email: "", // [CONFIRM] — walterkirkjr1983@gmail.com from form; confirm public-facing address
    notificationEmail: "walterkirkjr1983@gmail.com", // route form submissions to Walter; confirm
    leadership: "Pastor Walter Kirk, Jr. & Evangelist Tanya Kirk",
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/abbahouseministry" },
      { label: "Facebook", url: "https://www.facebook.com/share/17UYtnwtnN/" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
