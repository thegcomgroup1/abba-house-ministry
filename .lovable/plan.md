
# Remix as Abba House Ministry mockup

Swap the current placeholder homepage into a real mockup for Pastor Walter Kirk's ministry, using the uploaded `AbbaHouse_site.ts` as the source of truth for copy and structure, and photos scraped from abbahouseministry.com.

## Step 1 — Pull photos from their live site

Use Firecrawl (already available as a connector) to scrape `abbahouseministry.com` for image URLs + logo. Any pages worth crawling: home, about, gallery, contact.

For each usable image (targeting 1 logo, 1 hero of the Kirks or a Saturday Encounter, 1 story photo, 6 life-of-the-church photos):
1. Download the file with `curl` into `/tmp/abbahouse/`.
2. Upload each via `lovable-assets create --file … --filename …` and write the pointer JSON to `src/assets/abbahouse/<name>.<ext>.asset.json`.
3. Do not commit the binaries into the repo.

If scraping under-delivers (fewer than 6 warm images), fill remaining slots with the existing placeholder imagery already in the repo and flag those with a `TODO: replace with real photo` comment so the call recap is accurate.

Naming to match the uploaded config exactly:
`logo.png`, `hero.jpg`, `story.jpg`, `life1.jpg`…`life6.jpg`.

## Step 2 — Adopt the uploaded config

Overwrite `src/config/site.ts` with the uploaded file, then reconcile with the site's current shape:

**Fields the uploaded config adds that the code doesn't consume yet** — keep them in the config as forward-looking data for the paid multi-page build; no UI wiring in this pass:
- `announcement` (announcement bar) — leave in config, no bar rendered.
- `brand.pageHeroes` — for `/plan-a-visit`, `/about`, etc. Inner pages aren't in scope.
- `contact.notificationEmail`, `contact.leadership` — extra fields; harmless.

**Fields the current code needs that require small updates:**
- `brand.logoImageSrc` — swap the header wordmark for a real `<img>` when a logo asset exists (fall back to text if missing).
- `expect[]` uses a new `"Users"` icon — extend the icon map in `WhatToExpect.tsx` to include `Users` from `lucide-react`.
- `service.timesShort` (single line) still renders in the hero; the fuller `timesLong` renders in the Times band as today — verified it already maps over the array.

The `as const` shape change ripples through `SiteConfig` type inference; every component consuming `siteConfig` will still typecheck because reads are structural.

## Step 3 — Component tweaks (surgical, homepage only)

- `StickyHeader.tsx`: if `brand.logoImageSrc` exists, render an `<img>` (max-height ~32px) alongside/instead of the wordmark text; keep the text as `alt`.
- `WhatToExpect.tsx`: add `Users` to the icon map.
- `Hero.tsx`: unchanged; `heroMedia.type = "image"` path already handled.
- No changes to `Ministries`, `Events`, `LifeOfChurch`, `Sermons`, `Give`, `PlanYourVisit`, `Footer`, `MissionStory`, `TimesLocation` — they already read the fields this config sets.

## Step 4 — Homepage metadata + polish

- Route `head()` in `src/routes/index.tsx`: title → `Abba House Ministry — Altadena, CA`; description drawn from the mission line; matching og tags.
- Route file title should also refer to Abba House, not `[Church Name]`.

## Step 5 — Brand tokens

Update `:root` in `src/styles.css` with a palette that fits Abba House — warm, reverent, not corporate. Suggested starting point (I'll adjust once the scraped photos land so it complements them):
- `--primary`: warm amber/gold (drawing/light motif from John 12:32).
- `--secondary`: deep navy for headings.
- Body font stays humanist sans; display swap to a warmer serif (Fraunces stays fine).

## Verification

After build:
1. Visit the preview, confirm all real content renders, no `[CHURCH NAME]` / `[CITY]` placeholders remain.
2. Screenshot the hero, Times band, Life grid, Footer via Playwright to verify the images loaded.
3. Confirm the "About" / "Times & Location" / "Give" nav anchors still resolve.

## Explicitly out of scope this turn

- The `/app` PWA (queued next).
- Inner pages (`/plan-a-visit`, `/about`, `/leadership`, `/give`, `/contact`, `/sermons`) — this is still a homepage-only free mockup.
- Sermon video embeds (no source URL yet).
- Giving flow beyond a link (Walter uses Zelle — need confirmation on the call).
- Sending mockup URL to Walter — user will publish and share.

## Ready to build

Once approved I'll: scrape → upload assets → drop the config in → make the three tiny component tweaks → update tokens → verify.
