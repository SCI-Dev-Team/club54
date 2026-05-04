'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, CalendarDays, ChevronRight, MapPin, Moon, Music, Users } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useSiteLanguage } from './lib/useSiteLanguage';
import { HOME_COPY } from './lib/homeCopy';
import { formatEventDate, useFirestoreEvents } from './lib/useFirestoreEvents';
import { useFirestoreUpcomingEvents } from './lib/useFirestoreUpcomingEvents';

function SidebarEventCta({ href, label }: { href: string; label: string }) {
  const className =
    'text-xs font-semibold uppercase tracking-wide text-red transition-colors hover:text-white';
  if (href.startsWith('/') && !href.startsWith('//')) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
}

export default function Home() {
  const lang = useSiteLanguage();
  const t = HOME_COPY[lang];
  const { events, loading: eventsLoading, configured } = useFirestoreEvents(lang);
  const { upcoming, loading: upcomingLoading } = useFirestoreUpcomingEvents(lang);

  const firebaseConfigured = configured;
  const firestoreLoading = firebaseConfigured && (eventsLoading || upcomingLoading);
  const hasFirestoreRows = events.length > 0 || upcoming.length > 0;

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[95vh] items-center overflow-hidden bg-black text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h1 className="mb-6 text-5xl font-bold uppercase leading-tight tracking-wide md:text-6xl">
                  {t.heroTitleBefore} <span className="text-red">{t.heroTitleAccent}</span>
                </h1>
                <p className="mb-8 text-xl leading-relaxed text-white/80 md:text-2xl">{t.heroSubtitle}</p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-red px-8 py-4 text-center text-lg font-semibold uppercase tracking-wide text-white transition-all hover:bg-white hover:text-red"
                  >
                    {t.visitUsToday}
                  </Link>
                  <Link
                    href="#overview"
                    className="rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-center text-lg font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black"
                  >
                    {t.viewMenu}
                  </Link>
                </div>
              </div>

              <div className="hidden justify-center lg:flex">
                <div className="relative w-full max-w-lg">
                  <Image
                    src="/hero-coffee.png"
                    alt={t.heroImageAlt}
                    width={600}
                    height={600}
                    className="h-auto w-full drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section id="overview" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold uppercase tracking-wide text-black md:text-5xl">
                {t.whatWeOffer}
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-black/75">{t.whatWeOfferSub}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="group rounded-xl border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red/40 hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-red transition-transform group-hover:scale-110">
                  <Moon className="h-8 w-8 text-white" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="mb-4 text-2xl font-bold uppercase text-black">{t.premiumCoffee}</h3>
                <p className="mb-6 leading-relaxed text-black/80">{t.premiumCoffeeDesc}</p>
                <Link
                  href="/#overview"
                  className="inline-flex items-center font-semibold uppercase tracking-wide text-red transition-colors hover:text-black"
                >
                  {t.viewFullMenu}
                  <ChevronRight className="ml-2 h-5 w-5" strokeWidth={2} aria-hidden />
                </Link>
              </div>

              <div className="group rounded-xl border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red/40 hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-red transition-transform group-hover:scale-110">
                  <BookOpen className="h-8 w-8 text-white" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="mb-4 text-2xl font-bold uppercase text-black">{t.freshFood}</h3>
                <p className="mb-6 leading-relaxed text-black/80">{t.freshFoodDesc}</p>
                <Link
                  href="/#overview"
                  className="inline-flex items-center font-semibold uppercase tracking-wide text-red transition-colors hover:text-black"
                >
                  {t.seeMenu}
                  <ChevronRight className="ml-2 h-5 w-5" strokeWidth={2} aria-hidden />
                </Link>
              </div>

              <div className="group rounded-xl border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red/40 hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-red transition-transform group-hover:scale-110">
                  <CalendarDays className="h-8 w-8 text-white" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="mb-4 text-2xl font-bold uppercase text-black">{t.privateEvents}</h3>
                <p className="mb-6 leading-relaxed text-black/80">{t.privateEventsDesc}</p>
                <Link
                  href="/events"
                  className="inline-flex items-center font-semibold uppercase tracking-wide text-red transition-colors hover:text-black"
                >
                  {t.bookEventSpace}
                  <ChevronRight className="ml-2 h-5 w-5" strokeWidth={2} aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Community & Experience */}
        <section className="border-t border-black/10 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold uppercase tracking-wide text-black md:text-5xl">
                  {t.moreThanJust} <span className="text-red">{t.coffeeWord}</span>
                </h2>
                <p className="mb-8 text-xl leading-relaxed text-black/80">{t.communityBlurb}</p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red">
                      <Users className="h-6 w-6 text-white" strokeWidth={2} aria-hidden />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold uppercase text-black">{t.communityVibes}</h3>
                      <p className="text-black/75">{t.communityVibesDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red">
                      <Music className="h-6 w-6 text-white" strokeWidth={2} aria-hidden />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold uppercase text-black">{t.liveEvents}</h3>
                      <p className="text-black/75">{t.liveEventsDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red">
                      <MapPin className="h-6 w-6 text-white" strokeWidth={2} aria-hidden />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold uppercase text-black">{t.cozyAtmosphere}</h3>
                      <p className="text-black/75">{t.cozyAtmosphereDesc}</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/community"
                  className="mt-8 inline-block rounded-lg bg-red px-8 py-4 text-lg font-semibold uppercase tracking-wide text-white transition-colors hover:bg-black"
                >
                  {t.joinCommunity}
                </Link>
              </div>

              <div className="relative">
                <div className="rounded-2xl border border-black/10 bg-black p-8 text-white">
                  <h3 className="mb-6 text-3xl font-bold uppercase">
                    {t.upcoming} <span className="text-red">{t.eventsWord}</span>
                  </h3>
                  <div className="space-y-4">
                    {firestoreLoading ? (
                      <p className="text-sm text-white/70">{t.upcomingEventsLoading}</p>
                    ) : firebaseConfigured && hasFirestoreRows ? (
                      <>
                        {events.length > 0 ? (
                          <div>
                            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/50">
                              {t.homeSidebarCalendarTitle}
                            </p>
                            <div className="space-y-4">
                              {events.slice(0, 3).map((ev) => (
                                <div
                                  key={ev.documentId}
                                  className="rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
                                >
                                  <div className="flex gap-3">
                                    {ev.image ? (
                                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-black/30">
                                        <Image
                                          src={ev.image}
                                          alt={ev.title}
                                          fill
                                          className="object-cover"
                                          sizes="64px"
                                          unoptimized
                                        />
                                      </div>
                                    ) : null}
                                    <div className="min-w-0 flex-1">
                                      <div className="mb-1 flex items-start gap-2">
                                        <div
                                          className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red"
                                          aria-hidden
                                        />
                                        <span className="font-semibold leading-snug">{ev.title}</span>
                                      </div>
                                      <p className="text-sm text-white/80">
                                        {formatEventDate(ev.date, lang)}
                                      </p>
                                      {ev.location ? (
                                        <p className="mt-1 text-xs text-white/60">{ev.location}</p>
                                      ) : null}
                                      <div className="mt-2">
                                        <SidebarEventCta href={ev.ctaHref} label={ev.ctaLabel} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}
                        {upcoming.length > 0 ? (
                          <div
                            className={events.length > 0 ? 'border-t border-white/15 pt-4' : undefined}
                          >
                            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/50">
                              {t.homeSidebarSpotlightTitle}
                            </p>
                            <div className="space-y-4">
                              {upcoming.map((ev) => (
                                <div
                                  key={ev.documentId}
                                  className="rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
                                >
                                  <div className="flex gap-3">
                                    {ev.image ? (
                                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-black/30">
                                        <Image
                                          src={ev.image}
                                          alt={ev.title}
                                          fill
                                          className="object-cover"
                                          sizes="64px"
                                          unoptimized
                                        />
                                      </div>
                                    ) : null}
                                    <div className="min-w-0 flex-1">
                                      {ev.type ? (
                                        <span
                                          className={`mb-2 inline-block rounded px-2 py-0.5 text-xs font-semibold uppercase tracking-wide ${ev.typeColor}`}
                                        >
                                          {ev.type}
                                        </span>
                                      ) : null}
                                      <div className="mb-1 flex items-start gap-2">
                                        <div
                                          className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red"
                                          aria-hidden
                                        />
                                        <span className="font-semibold leading-snug">{ev.title}</span>
                                      </div>
                                      <p className="text-sm text-white/80">
                                        {[ev.day, ev.month, ev.year].filter(Boolean).join(' ')}
                                        {ev.location ? ` · ${ev.location}` : ''}
                                      </p>
                                      {ev.spots ? (
                                        <p
                                          className={`mt-1 text-sm ${ev.spotsUrgent ? 'font-medium text-amber-300' : 'text-white/70'}`}
                                        >
                                          {ev.spots}
                                        </p>
                                      ) : null}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </>
                    ) : (
                      <>
                        <div className="rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                          <div className="mb-2 flex items-center gap-3">
                            <div className="h-2 w-2 shrink-0 rounded-full bg-red"></div>
                            <span className="font-semibold">{t.event1Title}</span>
                          </div>
                          <p className="text-sm text-white/80">{t.event1Time}</p>
                        </div>
                        <div className="rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                          <div className="mb-2 flex items-center gap-3">
                            <div className="h-2 w-2 shrink-0 rounded-full bg-red"></div>
                            <span className="font-semibold">{t.event2Title}</span>
                          </div>
                          <p className="text-sm text-white/80">{t.event2Time}</p>
                        </div>
                        <div className="rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                          <div className="mb-2 flex items-center gap-3">
                            <div className="h-2 w-2 shrink-0 rounded-full bg-white"></div>
                            <span className="font-semibold">{t.event3Title}</span>
                          </div>
                          <p className="text-sm text-white/80">{t.event3Time}</p>
                        </div>
                      </>
                    )}
                  </div>
                  <Link
                    href="/events"
                    className="mt-6 block w-full rounded-lg bg-red px-6 py-3 text-center font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-red"
                  >
                    {t.seeAllEvents}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 text-4xl font-bold uppercase tracking-wide md:text-5xl">
              {t.readyPrefix} <span className="text-red">{t.readyAccent}</span>
              {t.readySuffix}
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-white/80">{t.ctaSub}</p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-red px-10 py-5 text-xl font-semibold uppercase tracking-wide text-white transition-all hover:bg-white hover:text-red"
            >
              {t.visitOrBook}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
