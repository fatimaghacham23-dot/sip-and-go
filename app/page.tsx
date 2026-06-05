import type { Metadata } from "next";
import type { StoryBeat } from "@/components/ScrollSequence";
import { FactArcSignature } from "@/components/FactArcSignature";
import { FluidNav } from "@/components/FluidNav";
import { HeroTypewriterLine } from "@/components/HeroTypewriterLine";
import { LazyPaymentMethodsVideo } from "@/components/LazyPaymentMethodsVideo";
import { LazyScrollSequence } from "@/components/LazyScrollSequence";
import { LiquidGlassPanel } from "@/components/LiquidGlassPanel";
import { SiteButton } from "@/components/SiteButton";
import { GradientBackground } from "@/components/paper-design-shader-background";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { HandDrawnOval } from "@/components/ui/hand-writing-text";

const site = {
  "brandName": "Sip & Go Coffee House",
  "logoAlt": "Sip & Go Coffee House logo",
  "markText": "S&G",
  "type": "Practical daytime coffee shop",
  "heroCopy": "Fast coffee for workdays, commutes, and everyday Beirut routines.",
  "heroSupport": "A straightforward daytime coffee shop for espresso runs, work breaks, commuter stops, and the routines that need coffee without ceremony.",
  "address": "VGPF+54F, Beirut District",
  "hours": "Monday-Saturday: 8:00 AM - 10:00 PM. Sunday: Closed",
  "phoneDisplay": "+961 78 730 678",
  "contactBody": "WhatsApp: +961 78 730 678",
  "primaryHref": "https://wa.me/96178730678",
  "phoneHref": null,
  "primaryCta": "WhatsApp Us",
  "mapsHref": "https://www.google.com/maps/search/?api=1&query=VGPF%2B54F%2C%20Beirut%20District",
  "socialDisplay": "Regional tags: #sipandgobeirut",
  "socialHref": null,
  "socialTitle": "Message before your next coffee run",
  "socialBody": "For quick questions or directions, use WhatsApp or open the map before you head out.",
  "visitTitle": "Visit Sip & Go Coffee House",
  "visitIntro": "Keep the stop simple: practical hours, direct WhatsApp contact, and a daytime coffee rhythm for local professionals.",
  "finishTitle": "Fast coffee for the useful part of the day.",
  "finishBody": "Make Sip & Go Coffee House your practical stop for espresso, workday breaks, and reliable daytime coffee.",
  "finalCta": "Your practical stop for daily espresso.",
  "openNote": "Open Monday-Saturday from 8:00 AM.",
  "arcText": "SIP & GO • COFFEE HOUSE •",
  "videoLabel": "CARD · CASH · RECEIPT",
  "videoAriaLabel": "Sip & Go Coffee House contact and visit video"
} as const;

export const metadata: Metadata = {
  title: "Sip & Go Coffee House | Practical daytime coffee shop in Beirut",
  description: "Sip & Go Coffee House: A straightforward coffee shop focused on daytime espresso operations for local professionals, commuters, and early risers.",
  keywords: [
  "Sip and Go Coffee House Beirut",
  "Sip & Go Beirut",
  "daytime coffee Beirut",
  "espresso Beirut District"
]
};

const storyBeats: StoryBeat[] = [
  {
    "eyebrow": "THE SIP & GO EXPERIENCE",
    "title": "Coffee that keeps the day moving.",
    "subtitle": "Sip & Go Coffee House keeps things direct for commuters, early risers, and professionals who need a reliable espresso stop.",
    "start": 0,
    "end": 0.2,
    "align": "center"
  },
  {
    "eyebrow": "BEIRUT DISTRICT",
    "title": "A practical stop for daily routines.",
    "subtitle": "The focus is simple: daytime coffee service, quick contact, and a clean path from craving to cup.",
    "start": 0.25,
    "end": 0.45,
    "align": "left"
  },
  {
    "eyebrow": "CONTACT - VISIT - SIP",
    "title": "WhatsApp first, coffee next.",
    "subtitle": "Use the direct WhatsApp link for quick questions, then open the map and keep the coffee run efficient.",
    "start": 0.5,
    "end": 0.7,
    "align": "right"
  },
  {
    "eyebrow": "DAYTIME HOURS",
    "title": "Espresso through the workday.",
    "subtitle": "Open Monday through Saturday from 8:00 AM to 10:00 PM for everyday coffee stops.",
    "start": 0.94,
    "end": 1,
    "align": "center",
    "ctaLabel": "Find Us",
    "ctaHref": "#visit"
  }
];

const heroMorphTexts = [
  "Espresso",
  "Workday",
  "Go"
];
const finishMorphTexts = [
  "quick.",
  "daily.",
  "done."
];
const typewriterItems = [
  "quick espresso.",
  "workday routines.",
  "commuter stops.",
  "daytime coffee runs."
];
const visitCards = [
  [
    "Address",
    "VGPF+54F, Beirut District"
  ],
  [
    "Hours",
    "Monday-Saturday: 8:00 AM - 10:00 PM. Sunday: Closed"
  ],
  [
    "Phone / WhatsApp",
    "WhatsApp: +961 78 730 678"
  ],
  [
    "Social",
    "Regional tags: #sipandgobeirut"
  ],
  [
    "Payment",
    "Pay at the counter when you visit."
  ]
] as const;

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] font-body text-white">
      <FluidNav />
      <section
        id="hero"
        aria-labelledby="hero-title"
        className="relative min-h-[var(--stable-vh)] overflow-hidden bg-[#050505]"
      >
        <GradientBackground />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-[#050505] to-transparent" />
        <FactArcSignature
          arcText={site.arcText}
          brandName={site.brandName}
          logoAlt={site.logoAlt}
          markText={site.markText}
          className="
            absolute
            top-[20%]
            z-20
            hidden
            h-48
            w-48
            md:flex
            lg:h-56
            lg:w-56
            xl:h-60
            xl:w-60
          "
          style={{ left: "max(2rem, calc(50% - 720px))" }}
        />
        <div className="relative z-10 mx-auto flex min-h-[var(--stable-vh)] w-full max-w-6xl flex-col items-center justify-center px-6 py-16 text-center sm:px-8 md:py-24">
          <div className="relative z-20 mb-8 flex w-full justify-start px-5 pt-20 md:hidden">
            <FactArcSignature
              arcText={site.arcText}
              brandName={site.brandName}
              logoAlt={site.logoAlt}
              markText={site.markText}
              className="relative h-28 w-28 rotate-[-16deg] sm:h-32 sm:w-32"
            />
          </div>
          <p className="mb-5 font-body text-xs font-medium uppercase tracking-[0.35em] text-white/40">
            {site.type} - Beirut
          </p>
          <div className="relative mx-auto flex w-full flex-col items-center justify-center">
            <div className="relative mx-auto w-full max-w-5xl px-4 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12">
              <HandDrawnOval />
              <h1
                id="hero-title"
                className="relative z-10 mx-auto max-w-[920px] text-center font-display text-[clamp(3.2rem,11vw,8.5rem)] font-semibold leading-[0.86] tracking-normal text-white"
              >
                {site.brandName}
              </h1>
            </div>
            <div
              aria-hidden="true"
              className="relative z-10 h-[4.75rem] w-full max-w-5xl sm:h-[5.75rem] md:h-[7rem] lg:h-[8.5rem]"
            >
              <GooeyText
                texts={heroMorphTexts}
                morphTime={1}
                cooldownTime={0.35}
                className="flex h-full items-center justify-center font-display font-semibold"
                textClassName="text-6xl font-semibold leading-[0.86] text-white/90 sm:text-7xl md:text-8xl lg:text-9xl"
              />
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-pretty font-display text-3xl font-semibold leading-[1.03] tracking-normal text-white/90 sm:text-4xl md:text-5xl">
            {site.heroCopy}
          </p>
          <p className="mt-5 max-w-2xl text-pretty font-body text-base leading-7 text-white/60 sm:text-lg">
            {site.heroSupport}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <SiteButton
              ariaLabel={"Contact " + site.brandName}
              external
              href={site.primaryHref}
            >
              {site.primaryCta}
            </SiteButton>
            <SiteButton
              ariaLabel={"Find " + site.brandName}
              external
              href={site.mapsHref}
            >
              Find Us
            </SiteButton>
          </div>
          <HeroTypewriterLine
            accent="Beirut"
            items={typewriterItems}
            prefix="Made for"
          />
        </div>
      </section>

      <LazyScrollSequence
        id="experience"
        ariaLabel={"Scroll-linked " + site.brandName + " brand experience"}
        beats={storyBeats}
      />

      <section
        id="visit"
        aria-labelledby="visit-title"
        className="relative px-6 py-24 sm:px-8"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-5 font-body text-xs font-medium uppercase tracking-[0.35em] text-white/40">
            Visit
          </p>
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <h2
                id="visit-title"
                className="font-display text-5xl font-semibold leading-[0.92] tracking-normal text-white/90 sm:text-6xl md:text-7xl"
              >
                {site.visitTitle}
              </h2>
              <p className="mt-6 max-w-2xl text-pretty font-body text-base leading-7 text-white/60 sm:text-lg">
                {site.visitIntro}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {visitCards.map(([title, body]) => (
                <LiquidGlassPanel
                  key={title}
                  className="rounded-[2rem] px-5 py-5 md:px-6 md:py-6"
                >
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
                    {title}
                  </p>
                  <p className="mt-4 font-body text-sm leading-relaxed text-white/75">
                    {body}
                  </p>
                </LiquidGlassPanel>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="social"
        aria-labelledby="social-title"
        className="relative px-6 py-20 sm:px-8"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 border-y border-white/10 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.35em] text-white/40">
              {site.socialDisplay}
            </p>
            <h2
              id="social-title"
              className="font-display text-4xl font-semibold leading-none tracking-normal text-white/90 sm:text-5xl md:text-6xl"
            >
              {site.socialTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-pretty font-body text-base leading-7 text-white/60 sm:text-lg">
              {site.socialBody}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {site.socialHref ? (
              <SiteButton
                ariaLabel={"Open " + site.brandName + " Instagram"}
                external
                href={site.socialHref}
              >
                Open {site.socialDisplay}
              </SiteButton>
            ) : (
              <SiteButton
                ariaLabel={"Contact " + site.brandName}
                external
                href={site.primaryHref}
              >
                {site.primaryCta}
              </SiteButton>
            )}
            <SiteButton
              ariaLabel={"Open map for " + site.brandName}
              external
              href={site.mapsHref}
            >
              Find Us
            </SiteButton>
          </div>
        </div>
      </section>

      <LazyPaymentMethodsVideo
        ariaLabel={site.videoAriaLabel}
        label={site.videoLabel}
      />

      <section
        id="finish"
        aria-labelledby="finish-title"
        className="relative flex px-6 pb-24 pt-12 sm:px-8 md:min-h-screen md:items-center md:pb-32 md:pt-24"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="mb-5 font-body text-xs font-medium uppercase tracking-[0.35em] text-white/40">
              {site.brandName}
            </p>
            <h2
              id="finish-title"
              className="max-w-4xl text-balance font-display text-5xl font-semibold leading-[0.92] tracking-normal text-white/90 sm:text-6xl md:text-7xl"
            >
              {site.finishTitle}
            </h2>
            <div
              aria-hidden="true"
              className="block w-full max-w-full translate-x-0 translate-y-0 overflow-visible pt-1 text-left md:translate-x-28 md:-translate-y-2 lg:translate-x-36"
            >
              <GooeyText
                texts={finishMorphTexts}
                morphTime={1}
                cooldownTime={0.35}
                className="relative block h-[clamp(3.2rem,19vw,5rem)] w-full max-w-full overflow-visible font-display font-semibold leading-none text-white md:h-[5.5rem]"
                textClassName="left-0 top-0 text-left text-[clamp(3rem,18vw,4.8rem)] font-semibold leading-none text-white/90 md:text-7xl"
              />
            </div>
          </div>
          <div className="md:pb-3">
            <p className="text-pretty font-body text-base leading-7 text-white/60 sm:text-lg">
              {site.finishBody}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <SiteButton
                ariaLabel={"Contact " + site.brandName}
                external
                href={site.primaryHref}
              >
                {site.primaryCta}
              </SiteButton>
              <SiteButton
                ariaLabel={"Find " + site.brandName}
                external
                href={site.mapsHref}
              >
                Find Us
              </SiteButton>
            </div>
            <p className="mt-5 font-body text-sm text-white/40">
              {site.finalCta} {site.openNote}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
